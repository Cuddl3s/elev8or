# Elev8or Part 2
(Check out branches for the other parts)

## Installation
* `yarn` to install dependencies
* `yarn start` to run the app in dev mode

## Instructions
### Move it more!
* The elevator is running! AWESOME! But if someone opens the app, they won't see right away that it is... let's change that!
* The default floor that the elevator is on, is the ground floor (0)
* Using useEffect, change the floor value to the topmost level right away (in `App.tsx`)
* Because useEffect runs AFTER the component finished rendering, this will make the elevator move to the top whenever you open the app!
### Make them shine
* Also, let's have the buttons look different whenever the elevator is at their corresponding floor
* The styling is already put in place, you just have to figure out what condition sets it!
* Additionally, why don't we disable the button whenever we are already at the corresponding floor? No use in pressing it anyway, ey?