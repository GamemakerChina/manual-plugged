rh._.exports({"0":[[" ","gpu_set_cullmode"]],"1":[["gpu_set_cullmode,cull_noculling,cull_clockwise,cull_counterclockwise"]],"2":[[" ","gpu_set_cullmode"]],"3":[[" ","This function can be used to set the backface culling mode. A polygon (primitive) has a ","front"," and a ","back"," side. The front side is said to be the side where the vertices are defined in ","counter-clockwise"," order. Normally both sides are drawn, but if you make a closed shape (like a pyramid) then this is a waste of processing power because the back side of the triangle can never be seen. It's in these cases that you can switch on backface culling, as this saves about half the amount of drawing time, although it means you have the task of defining your polygons in the correct way to prevent issues."," ","The cull mode value used must be one of the following constants (the default value is ","cull_noculling","):"," ","Constant"," ","Description"," ","cull_noculling"," ","No culling will be done"," ","cull_clockwise"," ","All clockwise triangles will be culled"," ","cull_counterclockwise"," ","All counter-clockwise triangles will be culled"],[" ","gpu_set_cullmode(cullmode);"," ","Argument"," ","Type"," ","Description"," ","cullmode"," ","Culling Mode Constant"," ","The cull mode to use (see list above)"],[" ","N/A"],[" ","if gpu_get_cullmode() != cull_clockwise","\n    {","\n        gpu_set_cullmode(cull_clockwise);","\n    }"," ","The above code gets the current cull mode and if it is not ","cull_clockwise"," it is set to that constant."," ","Back: ","GPU Control"," ","Next: ","gpu_set_blendmode"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gpu_set_cullmode,cull_noculling,cull_clockwise,cull_counterclockwise"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1682"})