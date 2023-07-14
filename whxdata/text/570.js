rh._.exports({"0":[[" ","gpu_get_colourwriteenable"]],"1":[["gpu_get_colorwriteenable,gpu_get_colourwriteenable"]],"2":[[" ","gpu_get_colourwriteenable"]],"3":[[" ","This function can be used to retrieve the current colour write-enable values. The function returns a 4 element 1D array with the following elements in it which will be either ","true"," (enabled) or ","false"," (disabled). By default all colour writing is set to ","true",":"," ","[0] = Red channel enabled/disabled"," ","[1] = Green channel enabled/disabled"," ","[2] = Blue channel enabled/disabled"," ","[3] = Alpha channel enabled/disabled"],[" ","gpu_get_colorwriteenable();"],[" ","Array"," (4 elements only; see above for details)"],[" ","var cw = gpu_get_colorwriteenable();","\n    cw[3] = false;","\n    gpu_set_colorwriteenable(cw);"," ","The above code gets the current colour write values and then sets the alpha component to ","false","."," ","Back: ","GPU Control"," ","Next: ","gpu_get_alphatestenable"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gpu_get_colorwriteenable,gpu_get_colourwriteenable"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"570"})