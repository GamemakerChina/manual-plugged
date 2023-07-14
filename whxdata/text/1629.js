rh._.exports({"0":[[" ","gpu_set_alphatestref"]],"1":[["gpu_set_alphatestref"]],"2":[[" ","gpu_set_alphatestref"]],"3":[[" ","This function will set the reference value for the alpha testing (when it has been enabled using the ","gpu_set_alphatestenable()","). This is the \"cut-off\" threshold at which pixels with alpha will not be drawn."," ","Basically, if you have this value set to 0 and you have linear interpolation turned on (either in the Game Options or using ","gpu_set_texfilter()","), you can still get visual errors at the edges of overlapping objects. This is because you can have ","almost"," completely transparent areas that block things drawn behind them, but if you set this reference value to, for example, 254 (i.e. one below maximum), this guarantees that only 100% opaque pixels are going to be drawn. You can also turn texture interpolation off, which would normally allow you to use the default values with no problems and no need to use this function at all, however a lot depends on the source artwork."," ","NOTE",": This is an advanced drawing feature, so if you are not sure whether you need it or not, or don't know exactly what it does, you are probably better off not using it as it can seriously corrupt how your game is drawn."],[" ","gpu_set_alphatestref(val);"," ","Argument","Type"," ","Description"," ","val","Real"," ","Sets the reference value for alpha testing from 0 to 255 (default value is 0)"],[" ","N/A"],[" ","if !gpu_get_alphatestenable()","\n    {","\n        gpu_set_alphatestenable(true);","\n        gpu_set_alphatestref(128);","\n    }"," ","The above code will check to see if alpha testing is enabled and if not it will switch on alpha testing and set the test threshold to 128 (only pixels with an alpha over 0.5 will be drawn)."," ","Back: ","GPU Control"," ","Next: ","gpu_set_texfilter"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gpu_set_alphatestref"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1629"})