# Elev8or Part 5
(Check out branches for the other parts)

## Installation
* `yarn` to install dependencies
* `yarn start` to run the app in dev mode

## Instructions
### Open the doors!
* The elevator is looking pretty cool already! The only thing that's missing right now, is the ability to open and close the doors
* The code is the same as for exercise 4. Just paste your solution for that exercise and start by defining a const that tracks whether the elevator doors are open or not
* When you have set up that value, give it to the Elevator component
* Now, you have to set this value. I would advise on something like this:
* When the elevator reaches a floor, wait 0.5s, open the doors, wait 2s, close the doors, go to next floor
* The transition to open the doors takes 1s. You can either use this knowledge and say "whenever I opened the door and 1s has passed, the doors are open" or you use the transitionend event (like it is done for the elevator). You then have to set a new ref to one of the doors though (one is enough because they behave the same)


