rh._.exports({"0":[[" ","gamepad_get_button_threshold"]],"1":[["gamepad_get_button_threshold"]],"2":[[" ","gamepad_get_button_threshold"]],"3":[[" ","This function can be used to detect the current threshold setting of the analogue buttons for a given device. The default threshold for all analogue buttons is 0.5, with the range being from 0 to 1. The threshold defines at what point the button is considered as being \"pressed\" for games that require them to act as a digital button."],[" ","gamepad_get_button_threshold(device);"," ","Argument","Type"," ","Description"," ","device","Real"," ","Which gamepad device \"slot\" to check."],[" ","Real"],[" ","if gamepad_get_button_threshold(0) != 0.5","\n    {","\n        gamepad_set_button_threshold(0, 0.5);","\n    }"," ","The above code checks the analogue button threshold of the gamepad connected to device \"slot\" 0 and if it is not the default value of 0.5, it is set to that value."," ","Back: ","Gamepad Input"," ","Next: "," gamepad_get_axis_deadzone "]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gamepad_get_button_threshold"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"594"})