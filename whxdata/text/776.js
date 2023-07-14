rh._.exports({"0":[[" ","draw_set_colour"]],"1":[["draw_set_colour,draw_set_color"]],"2":[[" ","draw_set_colour"]],"3":[[" ","With this function you can set the base draw colour for the game."," ","This will affect drawing of fonts, forms, primitives and 3D, however it will not affect sprites (drawn ","manually"," or by an instance). If any affected graphics are drawn with their own colour values, this value will be ignored."],[" ","draw_set_colour(col);"," ","Argument"," ","Type"," ","Description"," ","col"," ","Colour"," ","The colour to set for drawing."],[" ","N/A"],[" ","draw_set_alpha(0.5);","\n    draw_set_colour(c_black);","\n    draw_text(x+5, y+5, \"LEVEL 1\");","\n    draw_set_alpha(1);","\n    draw_set_colour(c_white);","\n    draw_text(x, y, \"LEVEL 1\");"," ","The above code will draw some text at the specified position with a shadow effect created by modified draw alpha and colour."," ","Back: ","Colour And Alpha"," ","Next: ","colour_get_blue"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["draw_set_colour,draw_set_color"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"776"})