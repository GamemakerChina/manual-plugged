rh._.exports({"0":[[" ","gamepad_get_description"]],"1":[["gamepad_get_description"]],"2":[["gamepad_get_description"]],"3":[[" ","gamepad_get_description"]],"4":[[" ","This function will return a string with the description of the given gamepad, for example, a PS3 controller may return a string similar to \"PLAYSTATION(R)3 Controller\", or an XBox360 controller could return \"Xbox 360 Controller (XInput STANDARD GAMEPAD)\". This string is hardware dependant and the returned value will depend on the gamepad plugged into the device \"slot\" that is being checked."],[" ","gamepad_get_description(device);"," ","Argument","Type"," ","Description"," ","device","Real"," ","Which gamepad \"slot\" to get the name of."],[" ","String"],[" ","var gp_num = gamepad_get_device_count();","\n    for (var i = 0; i < gp_num; i++;)","\n    {","\n        if (gamepad_is_connected(i)) ","\n        {","\n            draw_text(32, 32 + (i * 32), gamepad_get_description(i));","\n        }","\n        else","\n        {","\n            draw_text(32, 32 + (i * 32), \"No Gamepad Connected\");","\n        }","\n    }"," ","The above code will loop through all the gamepad slots to check for connected devices and then draw some text to the screen based on whether a gamepad is connected to the slot or not."," ","Back: ","Gamepad Input"," ","Next: "," gamepad_get_button_threshold "]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1059"})