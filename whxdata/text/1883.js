rh._.exports({"0":[[" ","draw_light_get"]],"1":[["draw_light_get"]],"2":[["draw_light_get"]],"3":[[" ","draw_light_get"]],"4":[[" ","This function will get the specified light parameters as an array with the following 6 elements -"," ","[0] = enabled / disabled (","true"," / ","false",")"," ","[1] = ","Light Type Constant"," (see table below)"," ","[2] = x position"," ","[3] = y position"," ","[4] = z position"," ","[5] = light radius (only for point lights, will be 0 for directional)"," ","[6] = light colour (a real)"," ","The light type (element [1]) can be one of the following two constants:"," ","Light Type Constant"," ","Constant"," ","Description"," ","lighttype_dir"," ","The light is a directional light"," ","lighttype_point"," ","The light is a point light"],[" ","draw_light_get(ind);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Real"," ","The index number of the light (from 0 to 7)"],[" ","Array"],[" ","light_a = draw_light_get(1);","\n    if light_a[5] < 200","\n    {","\n        light_a[5] += 5;","\n        draw_light_define_point(1, 200, 123, 50, light_a[5], c_white);","\n    }"," ","The above code will get the values used to define the light indexed as \"1\", then check the radius and if it is less than 200 it will be increased and the light radius set to the new value."," ","Back: ","Lighting"," ","Next: ","draw_get_lighting"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1883"})