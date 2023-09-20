rh._.exports({"0":[[" ","gamepad_button_value"]],"1":[["gamepad_button_value"]],"2":[[" ","gamepad_button_value"]],"3":[[" ","With this function you can get the current value of an analogue button, from 0 to 1, where 0 is no pressure and 1 is full pressure. You supply the gamepad slot index to check, along with either a button constant (as listed ","here","), or an integer value between 0 and ","gamepad_button_count()"," - 1","."," ","Note that this will return the ","raw"," value for the button, and does ","not"," take into account the setting for the threshold (see ","here"," for more information on thresholds)."],[" ","gamepad_button_value(device, button);"," ","Argument"," ","Type"," ","Description"," ","device"," ","Real"," ","Which gamepad device \"slot\" to check."," ","button"," ","Gamepad Button Constant"," ","Which gamepad button ","constant"," to check for."],[" ","Real"],[" ","speed = gamepad_button_value(0, gp_shoulderrb) * 4;"," ","The above code uses the analogue trigger value from the gamepad plugged into device \"slot\" 0 to set the speed of the instance."," ","Back: ","Gamepad Input"," ","Next: ","gamepad_hat_count"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gamepad_button_value"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1397"})