let lightning = 0
radio.setGroup(169)
basic.forever(function () {
    lightning = input.lightLevel()
    radio.sendNumber(lightning)
})
