#!/usr/bin/env python3
"""
Snake Game using Tkinter

Run the game:
  python3 snake_game.py

CLI options:
  --grid 20x20         Grid size as COLSxROWS (default 20x20)
  --cell-size 24       Cell size in pixels (default 24)
  --speed 120          Movement speed in ms per tick (default 120)
  --self-test          Run a quick logic test without launching UI

Notes:
- Uses only Python standard library. Tk (tkinter) must be available on your system.
- On some Linux distros you may need to install tk packages (e.g., `sudo apt-get install python3-tk`).
"""

from __future__ import annotations

import argparse
import os
import random
import sys
from dataclasses import dataclass
from typing import List, Optional, Tuple


# Lazy tkinter import support for headless self-test
try:
    import tkinter as tk  # type: ignore
except Exception:  # pragma: no cover - allow running --self-test without Tk
    tk = None  # type: ignore


Direction = Tuple[int, int]
Point = Tuple[int, int]


@dataclass
class GameConfig:
    num_columns: int = 20
    num_rows: int = 20
    cell_size_pixels: int = 24
    tick_millis: int = 120

    @property
    def width_pixels(self) -> int:
        return self.num_columns * self.cell_size_pixels

    @property
    def height_pixels(self) -> int:
        return self.num_rows * self.cell_size_pixels


class Snake:
    def __init__(self, initial_positions: List[Point], initial_direction: Direction) -> None:
        self.segments: List[Point] = list(initial_positions)
        self.direction: Direction = initial_direction
        self.pending_growth: int = 0

    def set_direction(self, new_direction: Direction) -> None:
        # Prevent reversing direction directly
        opposite = (-self.direction[0], -self.direction[1])
        if new_direction == opposite:
            return
        self.direction = new_direction

    def head(self) -> Point:
        return self.segments[0]

    def occupies(self, point: Point) -> bool:
        return point in self.segments

    def move_forward(self) -> None:
        head_col, head_row = self.head()
        dx, dy = self.direction
        new_head = (head_col + dx, head_row + dy)
        self.segments.insert(0, new_head)
        if self.pending_growth > 0:
            self.pending_growth -= 1
        else:
            self.segments.pop()

    def grow(self, amount: int = 1) -> None:
        self.pending_growth += max(1, amount)

    def collided_with_self(self) -> bool:
        return self.segments.count(self.head()) > 1


class SnakeGameLogic:
    """Core game logic independent from UI for testability."""

    DIRECTIONS = {
        "Left": (-1, 0),
        "Right": (1, 0),
        "Up": (0, -1),
        "Down": (0, 1),
    }

    def __init__(self, config: GameConfig) -> None:
        self.config = config
        self.score: int = 0
        start_col = config.num_columns // 2
        start_row = config.num_rows // 2
        initial_positions = [
            (start_col, start_row),
            (start_col - 1, start_row),
            (start_col - 2, start_row),
        ]
        self.snake = Snake(initial_positions=initial_positions, initial_direction=self.DIRECTIONS["Right"]) 
        self.food: Point = self._spawn_food()
        self.game_over: bool = False

    def _random_empty_cell(self) -> Point:
        occupied = set(self.snake.segments)
        while True:
            point = (
                random.randint(0, self.config.num_columns - 1),
                random.randint(0, self.config.num_rows - 1),
            )
            if point not in occupied:
                return point

    def _spawn_food(self) -> Point:
        return self._random_empty_cell()

    def set_direction_by_name(self, name: str) -> None:
        if name in self.DIRECTIONS:
            self.snake.set_direction(self.DIRECTIONS[name])

    def step(self) -> None:
        if self.game_over:
            return
        self.snake.move_forward()
        head_col, head_row = self.snake.head()
        if (
            head_col < 0
            or head_row < 0
            or head_col >= self.config.num_columns
            or head_row >= self.config.num_rows
        ):
            self.game_over = True
            return
        if self.snake.collided_with_self():
            self.game_over = True
            return
        if self.snake.head() == self.food:
            self.score += 1
            self.snake.grow(1)
            self.food = self._spawn_food()


class SnakeGameApp:
    def __init__(self, root: "tk.Tk", config: GameConfig) -> None:  # type: ignore[name-defined]
        if tk is None:  # type: ignore
            raise RuntimeError("Tkinter is not available. Install Tk for your Python.")
        self.root = root
        self.config = config
        self.logic = SnakeGameLogic(config)
        self.is_paused: bool = False
        self.high_score_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), "highscore.txt")
        self.high_score: int = self._load_high_score()

        self.canvas = tk.Canvas(
            root,
            width=self.config.width_pixels,
            height=self.config.height_pixels + 40,
            bg="#1b1e28",
            highlightthickness=0,
        )
        self.canvas.pack()

        root.title("Snake")
        root.resizable(False, False)

        self._bind_keys()
        self._draw_everything()
        self._schedule_tick()

    def _bind_keys(self) -> None:
        self.root.bind("<Left>", lambda _e: self.logic.set_direction_by_name("Left"))
        self.root.bind("<Right>", lambda _e: self.logic.set_direction_by_name("Right"))
        self.root.bind("<Up>", lambda _e: self.logic.set_direction_by_name("Up"))
        self.root.bind("<Down>", lambda _e: self.logic.set_direction_by_name("Down"))
        self.root.bind("a", lambda _e: self.logic.set_direction_by_name("Left"))
        self.root.bind("d", lambda _e: self.logic.set_direction_by_name("Right"))
        self.root.bind("w", lambda _e: self.logic.set_direction_by_name("Up"))
        self.root.bind("s", lambda _e: self.logic.set_direction_by_name("Down"))
        self.root.bind("<space>", lambda _e: self._toggle_pause())
        self.root.bind("r", lambda _e: self._restart())

    def _toggle_pause(self) -> None:
        if self.logic.game_over:
            return
        self.is_paused = not self.is_paused

    def _restart(self) -> None:
        self.logic = SnakeGameLogic(self.config)
        self.is_paused = False
        self._draw_everything()

    def _schedule_tick(self) -> None:
        self.root.after(self.config.tick_millis, self._tick)

    def _tick(self) -> None:
        if not self.is_paused and not self.logic.game_over:
            self.logic.step()
            self._draw_everything()
            if self.logic.game_over:
                self._maybe_update_high_score()
        self._schedule_tick()

    def _draw_everything(self) -> None:
        self.canvas.delete("all")
        self._draw_header()
        self._draw_food()
        self._draw_snake()
        if self.logic.game_over:
            self._draw_game_over_overlay()

    def _draw_header(self) -> None:
        header_height = 40
        self.canvas.create_rectangle(
            0,
            0,
            self.config.width_pixels,
            header_height,
            fill="#121521",
            outline="",
        )
        score_text = f"Score: {self.logic.score}    High: {self.high_score}    [Space] Pause  [R] Restart"
        self.canvas.create_text(
            10,
            header_height // 2,
            anchor="w",
            text=score_text,
            fill="#d7e0ff",
            font=("Segoe UI", 12, "bold"),
        )

    def _draw_cell(self, col: int, row: int, color: str, inset: int = 2) -> None:
        x0 = col * self.config.cell_size_pixels
        y0 = 40 + row * self.config.cell_size_pixels
        x1 = x0 + self.config.cell_size_pixels
        y1 = y0 + self.config.cell_size_pixels
        self.canvas.create_rectangle(
            x0 + inset,
            y0 + inset,
            x1 - inset,
            y1 - inset,
            fill=color,
            outline="",
        )

    def _draw_snake(self) -> None:
        for index, (col, row) in enumerate(self.logic.snake.segments):
            color = "#64ffda" if index == 0 else "#4cc9f0"
            self._draw_cell(col, row, color)

    def _draw_food(self) -> None:
        c, r = self.logic.food
        self._draw_cell(c, r, "#ff477e", inset=4)

    def _draw_game_over_overlay(self) -> None:
        cx = self.config.width_pixels // 2
        cy = 40 + self.config.height_pixels // 2
        self.canvas.create_text(
            cx,
            cy - 10,
            text="Game Over",
            fill="#ffffff",
            font=("Segoe UI", 28, "bold"),
        )
        self.canvas.create_text(
            cx,
            cy + 22,
            text="Press R to restart",
            fill="#cbd5e1",
            font=("Segoe UI", 14),
        )

    def _load_high_score(self) -> int:
        try:
            if os.path.exists(self.high_score_file):
                with open(self.high_score_file, "r", encoding="utf-8") as f:
                    return int(f.read().strip() or 0)
        except Exception:
            pass
        return 0

    def _maybe_update_high_score(self) -> None:
        if self.logic.score > self.high_score:
            self.high_score = self.logic.score
            try:
                with open(self.high_score_file, "w", encoding="utf-8") as f:
                    f.write(str(self.high_score))
            except Exception:
                pass


def parse_args(argv: Optional[List[str]] = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Snake Game")
    parser.add_argument("--grid", default="20x20", help="Grid size as COLSxROWS (default 20x20)")
    parser.add_argument("--cell-size", type=int, default=24, help="Cell size in pixels (default 24)")
    parser.add_argument("--speed", type=int, default=120, help="Tick speed in ms (default 120)")
    parser.add_argument("--self-test", action="store_true", help="Run a logic self-test and exit")
    return parser.parse_args(argv)


def create_config_from_args(args: argparse.Namespace) -> GameConfig:
    try:
        cols_str, rows_str = args.grid.lower().split("x")
        num_cols = max(8, int(cols_str))
        num_rows = max(8, int(rows_str))
    except Exception:
        num_cols, num_rows = 20, 20
    cell_size = max(8, int(args.cell_size))
    speed = max(40, int(args.speed))
    return GameConfig(num_columns=num_cols, num_rows=num_rows, cell_size_pixels=cell_size, tick_millis=speed)


def run_self_test() -> int:
    # Validate basic logic without UI
    config = GameConfig(num_columns=10, num_rows=10, cell_size_pixels=10, tick_millis=100)
    logic = SnakeGameLogic(config)

    # Grow snake to length >= 5 deterministically by placing food at head+1 repeatedly
    for _ in range(3):
        logic.food = (logic.snake.head()[0] + 1, logic.snake.head()[1])
        logic.step()  # eat
        assert logic.score >= 1, "Score should increase when eating"
        logic.step()  # apply growth

    # Now craft a self-collision: move Down, Left, Up, Right into body
    logic.set_direction_by_name("Down")
    logic.step()
    logic.set_direction_by_name("Left")
    logic.step()
    logic.set_direction_by_name("Up")
    logic.step()
    logic.set_direction_by_name("Right")
    logic.step()
    assert logic.game_over is True, "Game should end on self-collision"
    return 0


def main(argv: Optional[List[str]] = None) -> int:
    args = parse_args(argv)
    if args.self_test:
        try:
            return run_self_test()
        except AssertionError as exc:  # pragma: no cover
            print(f"Self-test failed: {exc}")
            return 1
    config = create_config_from_args(args)
    if tk is None:
        print("Tkinter is not available. Install Tk for your Python (e.g., python3-tk).")
        return 2
    root = tk.Tk()  # type: ignore
    app = SnakeGameApp(root, config)
    root.mainloop()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

