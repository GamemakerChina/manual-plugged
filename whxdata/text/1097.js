rh._.exports({"0":[[" ","gpu_set_alphatestenable"]],"1":[["gpu_set_alphatestenable"]],"2":[[" ","gpu_set_alphatestenable"]],"3":[[" ","This function will enable or disable alpha testing for your game (by default this is disabled). By switching alpha testing on you can then use the companion function ","gpu_set_alphatestref()"," to set the \"cut-off\" value at which all alpha values will be set to 0. The image below shows the difference that can be seen when alpha testing is switched on or off:"," ","NOTE",": This function may negatively affect performance on iOS and Android devices."],[" ","gpu_set_alphatestenable(enable);"," ","Argument","Type"," ","Description"," ","enable","Boolean"," ","Enable or disable alpha testing (","true"," / ","false",")"],[" ","N/A"],[" ","if !gpu_get_alphatestenable()","\n    {","\n        gpu_set_alphatestenable(true);","\n        gpu_set_alphatestref(128);","\n    }"," ","The above code will check to see if alpha testing is enabled and if not it will switch on alpha testing and set the test threshold to 128 (only pixels with an alpha over 0.5 will be drawn)."," ","Back: ","GPU Control"," ","Next: ","gpu_set_alphatestref"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gpu_set_alphatestenable"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1097"})