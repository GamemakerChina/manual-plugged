rh._.exports({"0":[[" ","draw_point_colour"]],"1":[["draw_point_colour,draw_point_color"]],"2":[["draw_point_colour,draw_point_color"]],"3":[[" ","draw_point_colour"]],"4":[[" ","With this function you can draw a single pixel anywhere on the screen with a colour that you define. The colour settings will override the base colour set with the function ","draw_set_colour()","."," ","NOTE"," If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind."],[" ","draw_point_colour(x, y, col1);"," ","Argument"," ","Type"," ","Description"," ","x"," ","Real"," ","The x coordinate of the point."," ","y"," ","Real"," ","The y coordinate of the point."," ","col1"," ","Colour"," ","The colour of the point."],[" ","N/A"],[" ","draw_point_colour(50, 50, c_red);"," ","This would draw a red pixel at (50,50)."," ","Back: ","Basic Forms"," ","Next: ","draw_rectangle"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1183"})