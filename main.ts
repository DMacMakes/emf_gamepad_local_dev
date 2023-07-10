EMF_Gamepad.onEMFButtonEvent(EMF_Button.L_BUTTON, EMFButton_Event.BUTTON_UP, function () {
    serial.writeLine("test app: on L is Up")
})
EMF_Gamepad.onEMFButtonEvent(EMF_Button.L_BUTTON, EMFButton_Event.BUTTON_DOWN, function () {
    serial.writeLine("test app: on L is Down")
})
radio.setGroup(20)
serial.writeLine("test app: waking up")
