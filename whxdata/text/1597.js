rh._.exports({"0":[[" ","draw_light_define_point"]],"1":[["draw_light_define_point"]],"2":[[" ","draw_light_define_point"]],"3":[[" ","This function is for defining a positional light, where you can define the x, y and z position of the light, the light range and its colour (which will also affect the perceived intensity of the light as certain colours appear \"darker\" than\n    others). You must also give the light an index number which what will be used in other functions to reference it."," ","NOTE",": There are only 8 hardware lights available, so only 8 defined lights can be enabled at any one time (although more can be defined)."],[" ","draw_light_define_point(ind, x, y, z, range, col);"," ","Argument","Type"," ","Description"," ","ind","Real"," ","The index number of the light (arbitrary)"," ","x","Real"," ","The x position of the light"," ","y","Real"," ","The y position of the light"," ","z","Real"," ","The z position of the light"," ","range","Real"," ","The light range (in pixels)"," ","col","Colour"," ","The colour to use for the light (either a constant, a real or a hex value)."],[" ","N/A"],[" ","draw_set_lighting(true);"," draw_light_define_point(1, 200, 123, 50, 2000, c_white);"," draw_light_enable(1, true);"," ","The above code will enable lighting for the whole scene, then define a white light at a specific point in the room space, and then finally turn that light on."," ","Back: ","Lighting"," ","Next: ","draw_light_define_direction"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["draw_light_define_point"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1597"})