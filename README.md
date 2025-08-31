## Snake Game (Tkinter, Python)

A simple, modern-looking Snake game built with Python's Tkinter. No third-party dependencies.

### Run

```bash
python3 snake_game.py
```

### Controls

- Arrow keys or WASD to move
- Space to pause/resume
- R to restart

### Options

```bash
python3 snake_game.py --grid 24x18 --cell-size 24 --speed 110
```

- **--grid COLSxROWS**: number of columns by rows (default: 20x20)
- **--cell-size PX**: pixel size of each cell (default: 24)
- **--speed MS**: milliseconds per tick; lower is faster (default: 120)
- **--self-test**: runs a headless logic test (no UI)

### Requirements

- Python 3.8+
- Tk (tkinter). On Linux, you may need to install it separately, e.g.:

```bash
sudo apt-get update && sudo apt-get install -y python3-tk
```

### Notes

- High score is stored in `highscore.txt` next to `snake_game.py`.
- The `--self-test` option exercises core logic without requiring a display.

# ashraf