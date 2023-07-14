rh._.exports({"0":[[" ","keyboard_check_released"]],"1":[["keyboard_check_released"]],"2":[[" ","keyboard_check_released"]],"3":[[" ","With this function you can check to see if a key has been released or not."," ","Unlike the ","keyboard_check"," function, this function will only return ","true"," once in the step the key is lifted, i.e. when it switches from held down in the previous step to no longer held down in the current step. So for it to return ","true"," again, the key must be first pressed and then released again. In all other steps, the function returns ","false","."," ","The function will take a keycode value as returned by the function ","ord"," (only ","capital"," letters from A-Z or numbers from 0-9), or any of the ","vk_*"," constants listed on the main ","Keyboard Input"," page."],[" ","keyboard_check_released","(key);"," ","Argument"," ","Type"," ","Description"," ","key"," ","Virtual Key Constant (vk_*)"," ","The key to check the released state of."],[" ","Boolean"],[" ","if ","keyboard_check_released","(ord(\"P\"))","\n    {","\n        instance_create_layer(0, 0, \"Controllers\", obj_Pause);","\n    }"," ","The above code will check to see if the \"P\" key has been released and if so, create an instance of ","obj_Pause","."," ","Back: ","Keyboard Input"," ","Next: ","keyboard_check_direct"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["keyboard_check_released"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1763"})