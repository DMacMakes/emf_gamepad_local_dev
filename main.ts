EMF_Gamepad.onEvent(Stick_Id.STICK_LEFT, Stick_Event.CHANGED_DIR, function () {
    radio.sendValue("change direction", EMF_Gamepad.Get_left_stick_direction())
})
radio.setGroup(20)
basic.forever(function () {
	
})
