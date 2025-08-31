# Snake Game

A classic Snake game built with Python and Pygame, featuring modern graphics and smooth gameplay.

## Features

- 🐍 Classic snake gameplay mechanics
- 🎮 Smooth controls with arrow keys
- ⏸️ Pause/Resume functionality
- 🔄 Easy restart system
- 📊 Real-time score tracking
- 🎨 Modern, clean UI with grid lines
- 🎯 Random food generation
- 💀 Collision detection (walls and self)

## Requirements

- Python 3.6 or higher
- Pygame 2.5.2

## Installation

1. **Clone or download the project files**
2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
   
   Or install pygame directly:
   ```bash
   pip install pygame
   ```

## How to Play

1. **Run the game:**
   ```bash
   python snake_game.py
   ```

2. **Game Controls:**
   - **Arrow Keys**: Move the snake
   - **SPACE**: Pause/Resume the game
   - **R**: Restart the game (when game over)
   - **ESC**: Quit the game

3. **Objective:**
   - Control the snake to eat the red food
   - Each food eaten increases your score by 10 points
   - The snake grows longer with each food consumed
   - Avoid hitting the walls or yourself

## Game Rules

- The snake moves continuously in the current direction
- You cannot reverse direction instantly (e.g., can't go right when moving left)
- Game ends when the snake hits a wall or itself
- Higher scores are achieved by eating more food and surviving longer

## Technical Details

- **Resolution**: 800x600 pixels
- **Grid Size**: 20x20 pixels per cell
- **Frame Rate**: 10 FPS for smooth gameplay
- **Colors**: Green snake, red food, white borders, gray grid

## Troubleshooting

- **If you get a "pygame module not found" error:**
  - Make sure you've installed pygame: `pip install pygame`
  
- **If the game runs too fast/slow:**
  - You can modify the `self.clock.tick(10)` value in the code
  - Higher numbers = faster gameplay, lower numbers = slower gameplay

## Customization

You can easily modify the game by changing these constants in `snake_game.py`:
- `SCREEN_WIDTH` and `SCREEN_HEIGHT`: Change window size
- `GRID_SIZE`: Change grid cell size
- Colors: Modify the color constants for different themes
- Speed: Adjust the frame rate in the main loop

Enjoy playing! 🎮