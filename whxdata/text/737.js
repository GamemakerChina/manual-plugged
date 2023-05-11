rh._.exports({"0":[[" ","draw_surface_tiled"]],"1":[["draw_surface_tiled"]],"2":[["draw_surface_tiled"]],"3":[[" ","draw_surface_tiled"]],"4":[[" ","This function will take a surface and then repeatedly tile it across the whole room, starting from the coordinates that you give in the function."," ","NOTE"," When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly."," ","TIP"," How a surface appears depends on its contents, especially the alpha values inside the surface. A surface ","cleared"," with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the ","application_surface","."],[" ","draw_surface_tiled(id, x, y);"," ","Argument"," ","Type"," ","Description"," ","id"," ","Surface ID"," ","The unique ID value of the surface to draw."," ","x"," ","Real"," ","The x position of where to draw the surface."," ","y"," ","Real"," ","The y position of where to draw the surface."],[" ","N/A"],[" ","draw_surface_tiled(surf, x, y);"," ","This will draw the surface indexed in \"surf\" at the instances own x and y position, and tiled in every direction in the room."," ","Back: ","Surfaces"," ","Next: ","draw_surface_tiled_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"737"})