rh._.exports({"0":[[" ","device_mouse_y"]],"1":[["device_mouse_y"]],"2":[[" ","device_mouse_y"]],"3":[[" ","This function returns the y position of a touch on the device. If you are running this on a the HTML5 or PC and Mac modules then this value is updated constantly, as long as the device (usually a mouse) is plugged in, however for mobile devices, this will only be updated while the screen is being touched and note that the maximum number of touches that can be detected will depend very much on the device being used and the OS it runs."],[" ","device_mouse_y(device);"," ","Argument","Type"," ","Description"," ","device","Real"," ","The device (from 0 - ","n",") that is being checked."],[" ","Real"],[" ","if device_mouse_check_button(0, mb_left)","\n    {","\n        if device_mouse_y(0) > y-32 && device_mouse_y(0) < y+32","\n        {","\n            pressed = true;","\n        }","\n        else","\n        {","\n            pressed = false;","\n        }","\n    }"," ","The above code checks to see if the device is being pressed and if so it then polls the device y position to see if it is within the parameters. If it is it sets the variable \"pressed\" to ","true",", other wise it sets it to ","false","."," ","Back: ","Device Input"," ","Next: ","device_mouse_raw_x"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["device_mouse_y"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1030"})