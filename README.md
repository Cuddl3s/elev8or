# Elev8or Part 3
(Check out branches for the other parts)

## Installation
* `yarn` to install dependencies
* `yarn start` to run the app in dev mode

## Instructions
### Elevate (hehe) the app
* So, right now we have a functional elevator. It doesn't really work like a real world elevator now, does it? The first exercise is to design (eg. think about the code and write it down) a way for it to behave more elevator-y. Things like:
* Right now, the elevator moves directly to the floor you click on. And you can only ever have one destination at a time. Think up a system, where it is possible to press multiple buttons, and the elevator moves to each destination after handling the previous one (I know, this isn't really how an elevator works, but one step at a time...)
* The elevator should have an open/closed state. Like a real elevator, it should 
  * Move to a destination
  * Open its doors
  * Close its doors
  * Move to the next destination
* Think only in terms of pseudo-code right now. Try to figure out what properties the elevator needs to have to make these things happen, as well as what its interface (the functions you can call) would have to be like.

###Example
Let's say we code up an ice cream truck that has the following specifications: It can drive, it can open its shop windows when it is not driving, and it plays music as long as it is driving.
* It could have a state `driving` that stores whether the ice cream truck is currently driving
* Another state that we need would be `playingMusic`.
* Whenever the value of `driving` changes, we need to either play or stop music
* It also needs a state to store whether the windows are open or closed, let's just call it `open`.
* It would need a function to open / close its windows, and opening should check `driving` before it actually opens windows

```
IceCreamTruck

-driving: boolean
-playingMusic: boolean
-open: boolean

+setDriving
+setPlayingMusic
+setOpen

Wenn driving wechselt ==> setPlayingMusic
```