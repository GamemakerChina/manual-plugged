rh._.exports({"0":[[" ","mouse_check_button_released"]],"1":[["mouse_check_button_released"]],"2":[[" ","mouse_check_button_released"]],"3":[[" ","This function will return ","true"," if the mouse button being checked has been released or ","false"," if it has not."," ","This function will only return ","true"," ","once"," for any mouse button when it is released and in order for it to return ","true"," again the button will need to have been pressed and released again. Note that it will be considered released for the duration of the step, and for all instances that have any mouse events or that use this same function."," ","You supply the mouse button to check from one of the following constants:"," ","Mouse Button Constant"," ","Constant"," ","Description"," ","mb_left"," ","The left mouse button"," ","mb_middle"," ","The middle mouse button (this may not be valid for all target platforms)"," ","mb_right"," ","The right mouse button"," ","mb_side1","*"," ","Mouse side button 1"," ","mb_side2","*"," ","Mouse side button 2"," ","mb_any"," ","Any of the mouse buttons"," ","mb_none"," ","No mouse button"," ","* ","NOTE"," The ","mb_side1"," and ","mb_side2 ","buttons are only for use on Windows, macOS, Ubuntu and HTML5."],[" ","mouse_check_button_released","(numb);"," ","Argument"," ","Type"," ","Description"," ","numb"," ","Mouse Button Constant"," ","Which mouse button constant to check for."],[" ","Boolean"],[" ","if ","mouse_check_button_released","(mb_right)","\n    {","\n        speed = point_distance(x, y, mouse_x, mouse_y) / 10;","\n    }"," ","The above code will check to see if the right mouse button has been released and if it has it will set the speed of the instance to a tenth of the distance between the current x/y position and the mouse x/y position."," ","Back: ","Mouse Input"," ","Next: ","mouse_clear"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["mouse_check_button_released"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1744"})