EMF_Gamepad.onEMFButtonEvent(EMF_Button.L_BUTTON, Button_State.DOWN, function () {
    serial.writeLine("on L DOWN")
})
EMF_Gamepad.onEMFButtonEvent(EMF_Button.R_BUTTON, Button_State.DOWN, function () {
    serial.writeLine("on L UP")
})
EMF_Gamepad.onStickEvent(Stick_Id.STICK_LEFT, Stick_Event.CHANGED_DIR, function () {
    radio.sendValue("change direction", 0)
    serial.writeLine("" + (EMF_Gamepad.Stick_direction(Stick_Id.STICK_LEFT)))
})
radio.setGroup(20)
serial.writeValue("Left stick direction on start:", EMF_Gamepad.Stick_direction(Stick_Id.STICK_LEFT))
basic.forever(function () {
	
})
