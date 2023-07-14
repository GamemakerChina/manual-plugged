rh._.exports({"0":[[" ","tileset_get_uvs"]],"1":[["tileset_get_uvs"]],"2":[[" ","tileset_get_uvs"]],"3":[[" ","This function returns an ","array"," with the UV coordinates and other data for the texture of the given tile set on the texture page. The array contains the following 8 elements:"," ","[0] = left"," ","[1] = top"," ","[2] = right"," ","[3] = bottom"," ","[4] = amount of pixels the asset compiler has trimmed from the tile set left side"," ","[5] = amount of pixels the asset compiler has trimmed from the tile set top side"," ","[6] = normalised percentage of pixel data from the original tile set width that has been saved to the texture page"," ","[7] = normalised percentage of pixel data from the original tile set height that has been saved to the texture page"," ","This array can then be used in other draw functions, particularly when working in 3D or using the ","2D primitive"," functions, as well as when working with the ","Shader"," functions."],[" ","tileset_get_uvs","(tileset);"," ","Argument"," ","Type"," ","Description"," ","tileset"," ","Tile Set Asset"," ","The index of the tile set to use."],[" ","Array"," (1D, 8 elements)"],[" ","var tex = ","tileset_get_uvs","(tl_Grass);","\n    tex_left = tex[0];","\n    tex_top = tex[1];","\n    tex_right = tex[2];","\n    tex_bottom = tex[3];"," ","The above code will store the UV coordinates for the given tile set in a local array and then assign the values to instance variables."," ","Back: ","Tile Sets"," ","Next: ","tileset_get_info"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["tileset_get_uvs"]],"6":[[" ","Syntax:"],[" ","Returns"],[" ","Example:"]],"id":"1759"})