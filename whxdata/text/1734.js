rh._.exports({"0":[[" ","draw_surface_ext"]],"1":[["draw_surface_ext"]],"2":[[" ","draw_surface_ext"]],"3":[[" ","This function will draw the given surface as in the function ","draw_surface()"," but with additional options to change the scale, blending, rotation and alpha of the surface being drawn. Changing these values does ","not"," modify the resource in any way (only how it is drawn)."," ","NOTE"," When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly."," ","TIP"," How a surface appears depends on its contents, especially the alpha values inside the surface. A surface ","cleared"," with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the ","application_surface","."],[" ","draw_surface_ext(id, x, y, xscale, yscale, rot, col, alpha);"," ","Argument"," ","Type"," ","Description"," ","id"," ","Surface ID"," ","The unique ID value of the surface to draw."," ","x"," ","Real"," ","The x position of where to draw the surface."," ","y"," ","Real"," ","The y position of where to draw the surface."," ","xscale"," ","Real"," ","The horizontal scale."," ","yscale"," ","Real"," ","The vertical scale."," ","rot"," ","Real"," ","The rotation or angle to draw the surface."," ","col"," ","Colour"," ","The colour with which to blend the surface."," ","alpha"," ","Real"," ","The alpha transparency for drawing the surface."],[" ","N/A"],[" ","draw_surface_ext(surf, 0, 0, 2, 2, 0, c_red, 0.5);"," ","The above code will draw a the surface indexed in the variable \"surf\" at the (0,0) position in the room, with twice the original scale, blended red and semi transparent."," ","Back: ","Surfaces"," ","Next: ","draw_surface_part"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["draw_surface_ext"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1734"})