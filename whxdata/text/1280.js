rh._.exports({"0":[[" ","draw_line"]],"1":[["draw_line"]],"2":[[" ","draw_line"]],"3":[[" ","With this function you can draw a 1 pixel wide line between any two points in the game room. Please note that the line being drawn may need different values (+/-1 on the x, y) to be drawn with the desired dimensions due to differences across the various\n    supported platforms."," ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the\n    shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind."],[" ","draw_line(x1, y1, x2, y2);"," ","Argument","Type"," ","Description"," ","x1","Real"," ","The x coordinate of the start of the line."," ","y1","Real"," ","The y coordinate of the start of the line."," ","x2","Real"," ","The x coordinate of the end of the line."," ","y2","Real"," ","The y coordinate of the end of the line."],[" ","N/A"],[" ","draw_set_colour(c_lime);"," draw_line(50,50,150,50);\n  "," ","This will draw a light green horizontal line from point (50,50) to point (150,50)."," ","Back: ","Basic Forms"," ","Next: ","draw_line_colour"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["draw_line"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1280"})