import pygame
import random
import sys
from enum import Enum

# Initialize Pygame
pygame.init()

# Constants
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
GRID_SIZE = 20
GRID_WIDTH = SCREEN_WIDTH // GRID_SIZE
GRID_HEIGHT = SCREEN_HEIGHT // GRID_SIZE

# Colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
RED = (255, 0, 0)
BLUE = (0, 0, 255)
DARK_GREEN = (0, 100, 0)
GRAY = (128, 128, 128)
LIGHT_BLUE = (173, 216, 230)

class Direction(Enum):
    UP = 1
    DOWN = 2
    LEFT = 3
    RIGHT = 4

class SnakeGame:
    def __init__(self):
        self.screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
        pygame.display.set_caption("Snake Game")
        self.clock = pygame.time.Clock()
        self.font = pygame.font.Font(None, 36)
        self.big_font = pygame.font.Font(None, 72)
        
        self.reset_game()
        
    def reset_game(self):
        """Reset the game to initial state"""
        self.snake = [(GRID_WIDTH // 2, GRID_HEIGHT // 2)]
        self.direction = Direction.RIGHT
        self.food = self.generate_food()
        self.score = 0
        self.game_over = False
        self.paused = False
        
    def generate_food(self):
        """Generate food at random position"""
        while True:
            food = (random.randint(0, GRID_WIDTH - 1), random.randint(0, GRID_HEIGHT - 1))
            if food not in self.snake:
                return food
    
    def handle_events(self):
        """Handle pygame events"""
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                return False
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    return False
                elif event.key == pygame.K_r and self.game_over:
                    self.reset_game()
                elif event.key == pygame.K_SPACE:
                    self.paused = not self.paused
                elif not self.paused and not self.game_over:
                    self.handle_movement(event.key)
        return True
    
    def handle_movement(self, key):
        """Handle movement keys"""
        if key == pygame.K_UP and self.direction != Direction.DOWN:
            self.direction = Direction.UP
        elif key == pygame.K_DOWN and self.direction != Direction.UP:
            self.direction = Direction.DOWN
        elif key == pygame.K_LEFT and self.direction != Direction.RIGHT:
            self.direction = Direction.LEFT
        elif key == pygame.K_RIGHT and self.direction != Direction.LEFT:
            self.direction = Direction.RIGHT
    
    def move_snake(self):
        """Move the snake based on current direction"""
        if self.paused or self.game_over:
            return
            
        head = self.snake[0]
        if self.direction == Direction.UP:
            new_head = (head[0], head[1] - 1)
        elif self.direction == Direction.DOWN:
            new_head = (head[0], head[1] + 1)
        elif self.direction == Direction.LEFT:
            new_head = (head[0] - 1, head[1])
        else:  # Direction.RIGHT
            new_head = (head[0] + 1, head[1])
        
        # Check for wall collision
        if (new_head[0] < 0 or new_head[0] >= GRID_WIDTH or 
            new_head[1] < 0 or new_head[1] >= GRID_HEIGHT):
            self.game_over = True
            return
        
        # Check for self collision
        if new_head in self.snake:
            self.game_over = True
            return
        
        self.snake.insert(0, new_head)
        
        # Check for food collision
        if new_head == self.food:
            self.score += 10
            self.food = self.generate_food()
        else:
            self.snake.pop()
    
    def draw(self):
        """Draw the game elements"""
        self.screen.fill(BLACK)
        
        # Draw grid lines
        for x in range(0, SCREEN_WIDTH, GRID_SIZE):
            pygame.draw.line(self.screen, GRAY, (x, 0), (x, SCREEN_HEIGHT))
        for y in range(0, SCREEN_HEIGHT, GRID_SIZE):
            pygame.draw.line(self.screen, GRAY, (0, y), (SCREEN_WIDTH, y))
        
        # Draw snake
        for i, segment in enumerate(self.snake):
            color = GREEN if i == 0 else DARK_GREEN
            rect = pygame.Rect(segment[0] * GRID_SIZE, segment[1] * GRID_SIZE, 
                             GRID_SIZE, GRID_SIZE)
            pygame.draw.rect(self.screen, color, rect)
            pygame.draw.rect(self.screen, WHITE, rect, 2)
        
        # Draw food
        food_rect = pygame.Rect(self.food[0] * GRID_SIZE, self.food[1] * GRID_SIZE, 
                               GRID_SIZE, GRID_SIZE)
        pygame.draw.rect(self.screen, RED, food_rect)
        pygame.draw.rect(self.screen, WHITE, food_rect, 2)
        
        # Draw score
        score_text = self.font.render(f"Score: {self.score}", True, WHITE)
        self.screen.blit(score_text, (10, 10))
        
        # Draw game over screen
        if self.game_over:
            self.draw_game_over()
        elif self.paused:
            self.draw_pause_screen()
        
        # Draw instructions
        self.draw_instructions()
        
        pygame.display.flip()
    
    def draw_game_over(self):
        """Draw game over screen"""
        # Semi-transparent overlay
        overlay = pygame.Surface((SCREEN_WIDTH, SCREEN_HEIGHT))
        overlay.set_alpha(128)
        overlay.fill(BLACK)
        self.screen.blit(overlay, (0, 0))
        
        # Game over text
        game_over_text = self.big_font.render("GAME OVER", True, RED)
        text_rect = game_over_text.get_rect(center=(SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2 - 50))
        self.screen.blit(game_over_text, text_rect)
        
        # Final score
        final_score_text = self.font.render(f"Final Score: {self.score}", True, WHITE)
        score_rect = final_score_text.get_rect(center=(SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2))
        self.screen.blit(final_score_text, score_rect)
        
        # Restart instruction
        restart_text = self.font.render("Press R to Restart", True, WHITE)
        restart_rect = restart_text.get_rect(center=(SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2 + 50))
        self.screen.blit(restart_text, restart_rect)
    
    def draw_pause_screen(self):
        """Draw pause screen"""
        # Semi-transparent overlay
        overlay = pygame.Surface((SCREEN_WIDTH, SCREEN_HEIGHT))
        overlay.set_alpha(128)
        overlay.fill(BLACK)
        self.screen.blit(overlay, (0, 0))
        
        # Pause text
        pause_text = self.big_font.render("PAUSED", True, LIGHT_BLUE)
        text_rect = pause_text.get_rect(center=(SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2))
        self.screen.blit(pause_text, text_rect)
        
        # Continue instruction
        continue_text = self.font.render("Press SPACE to Continue", True, WHITE)
        continue_rect = continue_text.get_rect(center=(SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2 + 50))
        self.screen.blit(continue_text, continue_rect)
    
    def draw_instructions(self):
        """Draw game instructions"""
        instructions = [
            "Use Arrow Keys to Move",
            "SPACE to Pause",
            "R to Restart (when game over)",
            "ESC to Quit"
        ]
        
        y_offset = SCREEN_HEIGHT - 120
        for instruction in instructions:
            text = self.font.render(instruction, True, GRAY)
            self.screen.blit(text, (10, y_offset))
            y_offset += 25
    
    def run(self):
        """Main game loop"""
        running = True
        while running:
            running = self.handle_events()
            self.move_snake()
            self.draw()
            self.clock.tick(10)  # 10 FPS for smooth gameplay
        
        pygame.quit()
        sys.exit()

def main():
    """Main function to start the game"""
    print("Starting Snake Game...")
    print("Controls:")
    print("- Arrow Keys: Move")
    print("- SPACE: Pause/Resume")
    print("- R: Restart (when game over)")
    print("- ESC: Quit")
    print("\nEnjoy the game!")
    
    game = SnakeGame()
    game.run()

if __name__ == "__main__":
    main()