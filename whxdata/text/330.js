rh._.exports({"0":[[" ","view_set_wport"]],"1":[["view_set_wport"]],"2":[["view_set_wport"]],"3":[[" ","view_set_wport"]],"4":[[" ","This function can be used to set the width of the given view port. You give the view port index (from 0 to 7) and the new width to use."],[" ","view_set_wport(view_port, w)"," ","Argument","Type"," ","Description"," ","view_port","Real"," ","The view port to target (0 - 7)"," ","w","Real"," ","The new width (in pixels)"],[" ","Real"],[" ","if view_get_wport(0) != (display_get_width () / 2)","\n    {","\n        view_set_wport(0, display_get_width() / 2);","\n    }"," ","The above code will check the width of the view port[0] and if it is not half of the display width it is set to that value."," ","Back: ","Cameras And View Ports"," ","Next: ","view_set_hport"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"330"})