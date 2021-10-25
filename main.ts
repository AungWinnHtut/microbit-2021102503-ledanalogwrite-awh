input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
let led2 = 0
for (let index = 0; index < 3; index++) {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(500)
}
basic.forever(function () {
    led2 = 0
    while (led2 < 1024) {
        led2 = led2 + 1
        music.playTone(led2, music.beat(BeatFraction.Sixteenth))
        led.plotBarGraph(
        led2,
        1024
        )
        pins.analogWritePin(AnalogPin.P1, led2)
        basic.pause(15)
    }
    while (led2 > 0) {
        led2 = led2 - 1
        music.playTone(led2, music.beat(BeatFraction.Sixteenth))
        led.plotBarGraph(
        led2,
        1024
        )
        pins.analogWritePin(AnalogPin.P1, led2)
        basic.pause(15)
    }
})
