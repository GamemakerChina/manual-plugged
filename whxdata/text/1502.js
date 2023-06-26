rh._.exports({"0":[[" ","surface_get_texture"]],"1":[["surface_get_texture"]],"2":[[" ","surface_get_texture"]],"3":[[" ","This function returns a special ","pointer"," for the surface's texture. This value can then be used in other draw functions, particularly in general 3D and some of the 2D primitive functions."," ","NOTE"," When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly."," ","TIP"," How a surface appears depends on its contents, especially the alpha values inside the surface. A surface ","cleared"," with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the ","application_surface","."," ","NOTE"," On HTML5, this returns a struct instead of a texture pointer, as a pointer cannot be used on that platform. However this does not change the use of the returned value, as its usage in ","texture functions"," still remains the same."],[" ","surface_get_texture","(surface_id);"," ","Argument"," ","Type"," ","Description"," ","surface_id"," ","Surface ID"," ","The ID of the surface to get the texture of."],[" ","Texture"],[" ","var _tex;","\n    _tex = ","surface_get_texture","(surf);","\n    draw_primitive_begin_texture(pr_trianglestrip, _tex);","\n    draw_vertex_texture(0, 0, 0, 0);","\n    draw_vertex_texture(640, 0, 1, 0);","\n    draw_vertex_texture(0, 480, 0, 1);","\n    draw_vertex_texture(640, 480, 1, 1);","\n    draw_primitive_end();"," ","The above code will draw a 4 vertex triangle strip textured with the texture held in the ","_tex"," variable, which is itself taken from a previously created surface ","surf","."," ","Back: ","Surfaces"," ","Next: ","surface_get_depth_disable"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["surface_get_texture"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1502"})