rh._.exports({"0":[[" ","sprite_get_uvs"]],"1":[["sprite_get_uvs"]],"2":[["sprite_get_uvs"]],"3":[[" ","sprite_get_uvs"]],"4":[[" ","This function returns an ","array"," with the UV coordinates and other data for the texture of the sprite sub-image on the texture page. The function returns an array with the following 8 elements:"," ","[0] = left"," ","[1] = top"," ","[2] = right"," ","[3] = bottom"," ","[4] = amount of pixels the asset compiler has trimmed from the sprite's left side"," ","[5] = amount of pixels the asset compiler has trimmed from the sprite's top side"," ","[6] = normalised percentage of pixel data from the original sprite's width that has been saved to the texture page"," ","[7] = normalised percentage of pixel data from the original sprite's height that has been saved to the texture page"," ","This array can then be used in other draw functions, particularly when working in 3D or using the ","Primitive"," functions, as well as when working with the ","Shader"," functions."," ","NOTE"," This function will ","not"," work with vector sprites or skeleton animation sprites."],[" ","sprite_get_uvs","(sprite, subimage);"," ","Argument"," ","Type"," ","Description"," ","sprite"," ","Sprite Asset"," ","The index of the sprite to use."," ","subimage"," ","Real"," ","The sub-image of the sprite to use."],[" ","Array"," (1D, 8 elements)"],[" ","var _tex = ","sprite_get_uvs","(sprite, 0);","\n    tex_left = _tex[0];","\n    tex_top = _tex[1];","\n    tex_right = _tex[2];","\n    tex_bottom = _tex[3];"," ","The above code will store the UV coordinates for the given sprite in a local array and then assign the values to instance variables."," ","Back: ","Sprite Information"," ","Next: ","sprite_get_info"]],"5":[[" ","Syntax:"],[" ","Returns"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1991"})