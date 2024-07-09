input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
input.onButtonPressed(Button.B, function () {
    millivolts = Math.round(pins.analogReadPin(AnalogPin.P0) * 3000 / 1023)
    basic.showNumber(millivolts)
    if (millivolts < 1200) {
        basic.showIcon(IconNames.SmallDiamond)
    } else {
        basic.showLeds(`
            # . . . #
            . # # # .
            . # . # .
            . # # # .
            # . . . #
            `)
    }
})
let millivolts = 0
radio.setGroup(99)
basic.showString("\"Solar Tester\"")
basic.forever(function () {
    radio.sendValue("\"millivolts\"", millivolts)
    radio.sendValue("Analog read pin", pins.analogReadPin(AnalogPin.P0))
})
