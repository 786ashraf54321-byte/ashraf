import tkinter as tk
from tkinter import ttk
import math

class Calculator:
    def __init__(self, root):
        self.root = root
        self.root.title("Modern Calculator")
        self.root.geometry("400x600")
        self.root.resizable(False, False)
        self.root.configure(bg="#2c3e50")
        
        # Calculator state
        self.current_number = ""
        self.previous_number = ""
        self.operation = ""
        self.should_reset = False
        
        # Style configuration
        style = ttk.Style()
        style.theme_use('clam')
        
        self.create_widgets()
        
    def create_widgets(self):
        # Display frame
        display_frame = tk.Frame(self.root, bg="#2c3e50", height=150)
        display_frame.pack(fill="x", padx=20, pady=20)
        display_frame.pack_propagate(False)
        
        # Display label
        self.display_var = tk.StringVar()
        self.display_var.set("0")
        self.display = tk.Label(
            display_frame,
            textvariable=self.display_var,
            font=("Arial", 36, "bold"),
            bg="#34495e",
            fg="white",
            anchor="e",
            padx=20,
            pady=20
        )
        self.display.pack(fill="both", expand=True)
        
        # Buttons frame
        buttons_frame = tk.Frame(self.root, bg="#2c3e50")
        buttons_frame.pack(fill="both", expand=True, padx=20, pady=(0, 20))
        
        # Button configurations
        button_configs = [
            # Row 1
            ("C", "#e74c3c", self.clear),
            ("±", "#95a5a6", self.toggle_sign),
            ("%", "#95a5a6", self.percentage),
            ("÷", "#f39c12", self.set_operation),
            
            # Row 2
            ("7", "#34495e", self.add_digit),
            ("8", "#34495e", self.add_digit),
            ("9", "#34495e", self.add_digit),
            ("×", "#f39c12", self.set_operation),
            
            # Row 3
            ("4", "#34495e", self.add_digit),
            ("5", "#34495e", self.add_digit),
            ("6", "#34495e", self.add_digit),
            ("-", "#f39c12", self.set_operation),
            
            # Row 4
            ("1", "#34495e", self.add_digit),
            ("2", "#34495e", self.add_digit),
            ("3", "#34495e", self.add_digit),
            ("+", "#f39c12", self.set_operation),
            
            # Row 5
            ("0", "#34495e", self.add_digit, 2),  # Span 2 columns
            (".", "#34495e", self.add_decimal),
            ("=", "#27ae60", self.calculate)
        ]
        
        # Create buttons grid
        row = 0
        col = 0
        for config in button_configs:
            if len(config) == 4:  # Button with colspan
                text, color, command, colspan = config
                button = tk.Button(
                    buttons_frame,
                    text=text,
                    font=("Arial", 18, "bold"),
                    bg=color,
                    fg="white",
                    relief="flat",
                    command=lambda cmd=command, t=text: cmd(t),
                    height=2
                )
                button.grid(row=row, column=col, columnspan=colspan, sticky="nsew", padx=2, pady=2)
                col += colspan
            else:
                text, color, command = config
                button = tk.Button(
                    buttons_frame,
                    text=text,
                    font=("Arial", 18, "bold"),
                    bg=color,
                    fg="white",
                    relief="flat",
                    command=lambda cmd=command, t=text: cmd(t),
                    height=2
                )
                button.grid(row=row, column=col, sticky="nsew", padx=2, pady=2)
                col += 1
            
            if col >= 4:
                col = 0
                row += 1
        
        # Configure grid weights
        for i in range(5):
            buttons_frame.grid_rowconfigure(i, weight=1)
        for i in range(4):
            buttons_frame.grid_columnconfigure(i, weight=1)
    
    def add_digit(self, digit):
        if self.should_reset:
            self.current_number = ""
            self.should_reset = False
        
        if digit == "0" and self.current_number == "0":
            return
        
        if self.current_number == "0":
            self.current_number = digit
        else:
            self.current_number += digit
        
        self.update_display()
    
    def add_decimal(self, decimal):
        if self.should_reset:
            self.current_number = "0"
            self.should_reset = False
        
        if "." not in self.current_number:
            if self.current_number == "":
                self.current_number = "0."
            else:
                self.current_number += "."
            self.update_display()
    
    def clear(self, clear):
        self.current_number = ""
        self.previous_number = ""
        self.operation = ""
        self.should_reset = False
        self.display_var.set("0")
    
    def toggle_sign(self, sign):
        if self.current_number and self.current_number != "0":
            if self.current_number.startswith("-"):
                self.current_number = self.current_number[1:]
            else:
                self.current_number = "-" + self.current_number
            self.update_display()
    
    def percentage(self, percent):
        if self.current_number:
            try:
                value = float(self.current_number)
                result = value / 100
                self.current_number = str(result)
                self.update_display()
            except ValueError:
                pass
    
    def set_operation(self, op):
        if self.current_number:
            if self.previous_number and self.operation:
                self.calculate("=")
            
            self.previous_number = self.current_number
            self.operation = op
            self.current_number = ""
            self.should_reset = False
    
    def calculate(self, equals):
        if not self.current_number or not self.previous_number or not self.operation:
            return
        
        try:
            prev = float(self.previous_number)
            current = float(self.current_number)
            
            if self.operation == "+":
                result = prev + current
            elif self.operation == "-":
                result = prev - current
            elif self.operation == "×":
                result = prev * current
            elif self.operation == "÷":
                if current == 0:
                    self.display_var.set("Error")
                    return
                result = prev / current
            
            # Format result
            if result.is_integer():
                result = int(result)
            else:
                result = round(result, 10)
            
            self.current_number = str(result)
            self.previous_number = ""
            self.operation = ""
            self.should_reset = True
            self.update_display()
            
        except ValueError:
            self.display_var.set("Error")
    
    def update_display(self):
        if self.current_number:
            # Format display for better readability
            try:
                value = float(self.current_number)
                if value.is_integer():
                    display_text = str(int(value))
                else:
                    display_text = str(value)
                self.display_var.set(display_text)
            except ValueError:
                self.display_var.set(self.current_number)
        else:
            self.display_var.set("0")

def main():
    root = tk.Tk()
    app = Calculator(root)
    root.mainloop()

if __name__ == "__main__":
    main()