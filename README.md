A simple Snake Game built with JavaScript.



Introduction:

This is a classic Snake Game where the player controls a snake to eat food, grow longer, and avoid collisions with itself or the game boundaries. The game features increasing difficulty as the snake grows longer and the score increases.


Features:

Movement: Control the snake using arrow keys or 'A' key for upward movement.
Sound Effects: Includes sound effects for eating food, game over, and moving.
Scoring System: Tracks the score and high score, which is saved in the browser's local storage.
Increasing Speed: The speed of the snake increases as the score goes up.
Responsive Design: Game board resizes based on the viewport.


How to Play:

Use the arrow keys to control the direction of the snake:
Up: ArrowUp or A
Down: ArrowDown
Left: ArrowLeft
Right: ArrowRight
The objective is to eat the food that appears randomly on the board.
Each time the snake eats food, it grows longer and the score increases.
Avoid colliding with the walls or the snake's own body.
The game ends when a collision occurs, and you can start a new game by pressing any key.


Game Logic:

Collision Detection: The game checks for collisions with the walls and the snake's body.
Snake Movement: The snake moves in the direction of the last key press.
Food Consumption: When the snake's head reaches the food, the snake grows longer, and a new piece of food appears on the board.
Score Management: The score is updated each time the snake eats food. The high score is saved in local storage.


Technologies Used:

JavaScript: Core game logic and interactivity.
HTML: Game structure and layout.
CSS: Styling for the game elements.
Audio: Sound effects for various game events.



License:

This project is licensed under the MIT License. See the LICENSE file for details.



Enjoy playing the Snake Game!
