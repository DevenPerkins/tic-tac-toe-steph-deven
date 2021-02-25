# Tic Tac Toe

### Rules of React

Here are some rules to keep handy as you build Tic Tac Toe. Following these protocols will help you avoid lots of problems.

- Never update State directly, always use the setState() method.
- Never alter the DOM directly, always operate on a value in state.
- Only call setState() once per method or render cycle.
- State is for values that change, Props is for values being passed to a child component.
- Don't directly manipulate the DOM to keep track of changes. In other words, don't do this: getElementById("square").style. React State and Props should do all the heavy lifting.

### Remember...

This challenge is intended to let you practice maintaining state in a React application and become more familiar with passing props and dealing with user interactions.

This game will be for two users, playing on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player.

This project will challenge your knowledge of React but should also be an exercise in creating good user experiences. Your view should be styled to look good as well as function flawlessly.

### User Stories:
- As a user, I should start off seeing a 3x3 grid on the main page.
- As a user, I should be able to click on a square to mark it.
- As a user, my partner should be able to click on a square after me and see their mark.
- As a user, I shouldn't be able to click on a square that has already been selected.
- As a user, when someone has won the game (3 squares in a row: horizontally, vertically, or diagonally) I should see a notice telling me who won.
- As a user, I should not be able to continue playing the game after the game has been won.
- As a user, if there are no more squares available, I should see a notice telling me that the game has ended.
- As a user, I should see a restart button that when clicked will clear the gameboard.

### Stretch Goals:
- As a user, I can see a notification that informs me whether it is currently player one's or player two's turn.
- As a user, I can choose my marker (X, O, a color, an emoji, etc...).
