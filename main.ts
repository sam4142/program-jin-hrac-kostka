input.onGesture(Gesture.Shake, function () {
    if (randint(1, 6) == 6) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
