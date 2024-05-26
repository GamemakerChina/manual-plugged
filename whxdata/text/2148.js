rh._.exports({"0":[[" ","device_mouse_check_button_released"]],"1":[["device_mouse_check_button_released"]],"2":[["device_mouse_check_button_released"]],"3":[[" ","device_mouse_check_button_released"]],"4":[[" ","This function returns ","true"," or ","false"," depending on whether the device touch that you specify has been released or not."," ","The device argument refers to the device touch number, which can be from 0 to n, and note that the maximum number of touches that can be detected will depend very much on the device being used and the OS it runs (most devices will support at least 4 simultaneous touches)."," ","This function only returns ","true"," once by the actual releasing action, during the step the key changed from pressed to not pressed, and the constants listed ","on this page"," can be used to check for the mouse buttons. During all other steps, the function returns ","false","."," ","NOTE"," ","mb_right"," will only have been detected if a double tap touch is detected and held on the second tap before release (this behaviour can be disabled using the function ","device_mouse_dbclick_enable",")."],[" ","device_mouse_check_button_released","(device, button);"," ","Argument"," ","Type"," ","Description"," ","device"," ","Real"," ","The device (from 0 - ","n",") that is being checked."," ","button"," ","Mouse Button Constant"," ","The button of the device that is being checked."],[" ","Boolean"],[" ","if ","device_mouse_check_button_released","(0, mb_left)","\n    {","\n        press = false;","\n    }"," ","The above code checks to see if the device has been pressed and sets a variable to ","false"," if it has."," ","Back: ","Device Input"," ","Next: ","device_mouse_dbclick_enable"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2148"})