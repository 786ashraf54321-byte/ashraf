# Modern Calculator App

A beautiful, feature-rich calculator application built with Python and tkinter.

## Features

- **Modern UI Design**: Clean, professional interface with a dark theme
- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Advanced Features**: 
  - Percentage calculations
  - Sign toggle (±)
  - Decimal point support
  - Clear function (C)
- **Responsive Layout**: Well-organized button grid with proper spacing
- **Error Handling**: Graceful handling of division by zero and invalid operations

## Screenshots

The calculator features:
- Large, easy-to-read display
- Color-coded buttons (orange for operations, blue for numbers, red for clear, green for equals)
- Professional dark theme (#2c3e50 background)

## Installation

### Prerequisites
- Python 3.6 or higher
- tkinter (usually included with Python)

### Setup
1. Clone or download this repository
2. Navigate to the project directory
3. Run the application

## Usage

### Running the Calculator
```bash
python calculator.py
```

### Calculator Operations

#### Basic Arithmetic
- **Addition**: Enter first number → Press `+` → Enter second number → Press `=`
- **Subtraction**: Enter first number → Press `-` → Enter second number → Press `=`
- **Multiplication**: Enter first number → Press `×` → Enter second number → Press `=`
- **Division**: Enter first number → Press `÷` → Enter second number → Press `=`

#### Special Functions
- **Clear (C)**: Clears all calculations and resets to 0
- **Sign Toggle (±)**: Changes the sign of the current number
- **Percentage (%)**: Converts the current number to a percentage (divides by 100)
- **Decimal Point (.)**: Adds a decimal point for fractional numbers

### Example Calculations

1. **Simple Addition**: `5 + 3 = 8`
2. **Percentage**: Enter `50` → Press `%` → Result: `0.5`
3. **Sign Change**: Enter `25` → Press `±` → Result: `-25`

## Technical Details

### Architecture
- **Class-based Design**: Uses object-oriented programming principles
- **Event-driven**: Responds to button clicks and user interactions
- **State Management**: Maintains calculator state (current number, previous number, operation)

### Key Components
- **Display**: Large label showing current number and results
- **Button Grid**: 4x5 grid layout with proper spacing
- **Event Handlers**: Methods for each calculator operation
- **Error Handling**: Graceful fallbacks for edge cases

### Code Structure
```
Calculator Class
├── __init__() - Initialize calculator state and UI
├── create_widgets() - Build the user interface
├── add_digit() - Handle number input
├── set_operation() - Set mathematical operations
├── calculate() - Perform calculations
├── clear() - Reset calculator
├── toggle_sign() - Change number sign
├── percentage() - Calculate percentage
└── update_display() - Update the display
```

## Customization

### Colors
The calculator uses a modern color scheme:
- Background: `#2c3e50` (Dark Blue-Gray)
- Display: `#34495e` (Medium Blue-Gray)
- Operations: `#f39c12` (Orange)
- Numbers: `#34495e` (Blue-Gray)
- Clear: `#e74c3c` (Red)
- Equals: `#27ae60` (Green)
- Secondary: `#95a5a6` (Gray)

### Layout
- Window size: 400x600 pixels
- Display height: 150 pixels
- Button grid: 4 columns × 5 rows
- Responsive design with proper spacing

## Troubleshooting

### Common Issues

1. **"No module named 'tkinter'"**
   - Solution: Install tkinter (usually included with Python)
   - On Ubuntu/Debian: `sudo apt-get install python3-tk`
   - On macOS: Usually included with Python.org installer

2. **Display not updating**
   - Check if the calculator window is properly focused
   - Ensure no syntax errors in the code

3. **Buttons not responding**
   - Verify Python version compatibility
   - Check for any error messages in the terminal

## Future Enhancements

Potential improvements for future versions:
- Scientific calculator functions (sin, cos, log, etc.)
- Memory functions (M+, M-, MR, MC)
- History of calculations
- Keyboard support
- Different themes
- Unit conversions

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve the calculator!

---

**Enjoy your calculations! 🧮**