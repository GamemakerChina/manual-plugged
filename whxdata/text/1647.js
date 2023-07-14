rh._.exports({"0":[[" ","gamepad_button_check_pressed"]],"1":[["gamepad_button_check_pressed"]],"2":[[" ","gamepad_button_check_pressed"]],"3":[[" ","This function will return ","true"," or ","false"," depending on whether the given gamepad button is detected as having been pressed or not. Note that this function will only trigger ","once"," for the button the first time it is pressed. For it to trigger again the button must first be released and then re-pressed. If you need to check a continuous press of the button you should be using the function ","gamepad_button_check()","."," ","If you are checking an analogue button, then the check will take into consideration the ","threshold setting"," and only return ","true"," when the raw input value goes over the given threshold (you can get this raw value using the function ","gamepad_button_value()",")."],[" ","gamepad_button_check_pressed(device, button);"," ","Argument"," ","Type"," ","Description"," ","device"," ","Real"," ","Which gamepad device \"slot\" to check."," ","button"," ","Gamepad Button Constant"," ","Which gamepad button ","constant"," to check for."],[" ","Boolean"],[" ","if gamepad_button_check_pressed(0, gp_start)","\n    {","\n        audio_play_sound(snd_Start, 0, false);","\n        room_goto(rm_Level_1);","\n    }"," ","The above code will detect whether the \"start\" button of the gamepad connected to device \"slot\" 0 has been pressed or not and change room if it has."," ","Back: ","Gamepad Input"," ","Next: "," gamepad_button_check_released "]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gamepad_button_check_pressed"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1647"})