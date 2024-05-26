rh._.exports({"0":[[" ","Basic Forms"]],"2":[["Basic Forms"]],"3":[[" ","Basic Forms"]],"4":[[" ","GameMaker"," has a whole collection of functions available for drawing different forms and shapes. These functions should only ever be used in the draw event of an instance (you ","can"," use them elsewhere but you won't see anything!) and create purely graphic effects, which means that they do not generate collision events as those can only be done through the sprite or collision mask that has been assigned to an instance. All these functions are affected by the current draw colour, alpha and blend mode (see the section on ","Colour",")."," ","IMPORTANT"," Lines, points and forms are always drawn at 1:1 with the ","screen resolution",", regardless of the event they are drawn in."," ","IMPORTANT"," These functions will break the vertex batching and increase the number of texture swaps in your game, so having multiple calls to any of them in a single draw frame may lead to performance issues."],[" ","NOTE"," These functions are slow to call and only supplied as basic drawing tools."," ","draw_arrow"," ","draw_circle"," ","draw_circle_colour"," ","draw_ellipse"," ","draw_ellipse_colour"," ","draw_line"," ","draw_line_colour"," ","draw_line_width"," ","draw_line_width_colour"," ","draw_point"," ","draw_point_colour"," ","draw_rectangle"," ","draw_rectangle_colour"," ","draw_roundrect"," ","draw_roundrect_colour"," ","draw_roundrect_ext"," ","draw_roundrect_colour_ext"," ","draw_triangle"," ","draw_triangle_colour"," ","The following functions are also included in ","GameMaker"," to set drawing precision and draw some very specific things:"," ","draw_set_circle_precision"," ","draw_button"," ","draw_healthbar"," ","draw_path"," ","Back: ","Drawing"," ","Next: ","Sprites And Tiles"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"8":[[" ","Function Reference"]],"id":"2087"})