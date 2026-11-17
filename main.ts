input.onButtonPressed(Button.A, function () {
    scour += 1 + scour
    basic.showNumber(scour)
})
input.onButtonPressed(Button.A, function () {
    scour += 1
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.showNumber(scour)
})
input.onButtonPressed(Button.B, function () {
    scour += -1
    basic.showIcon(IconNames.No)
    basic.pause(100)
    basic.showNumber(scour)
})
let scour = 0
scour += 0
