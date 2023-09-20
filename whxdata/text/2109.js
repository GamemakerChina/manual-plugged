rh._.exports({"0":[[" ","gpu_get_blendmode_srcalpha"]],"1":[["gpu_get_blendmode_srcalpha,bm_zero,bm_one,bm_src_colour,bm_inv_src_colour,bm_src_alpha,bm_inv_src_alpha,bm_dest_alpha,bm_inv_dest_alpha,bm_dest_colour,bm_inv_dest_colour,bm_src_alpha_sat,bm_src_color,bm_inv_src_color,bm_dest_color,bm_inv_dest_colour"]],"2":[[" ","gpu_get_blendmode_srcalpha"]],"3":[[" ","This function can be used to retrieve the current ","source"," extended blend mode alpha factor. The value returned will be one of the following constants (\"s\" denotes a value taken from the source while a \"d\" denotes a value from the destination) with only the \"A\" component being used when drawing:"," ","Constant"," ","Blend factor (Red, Green, Blue, Alpha)"," ","bm_zero"," ","(0, 0, 0, 0)"," ","bm_one"," ","(1, 1, 1, 1)"," ","bm_src_colour"," ","(Rs, Gs, Bs, As)"," ","bm_inv_src_colour"," ","(1-Rs, 1-Gs, 1-Bs, 1-As)"," ","bm_src_alpha"," ","(As, As, As, As)"," ","bm_inv_src_alpha"," ","(1-As, 1-As, 1-As, 1-As)"," ","bm_dest_alpha"," ","(Ad, Ad, Ad, Ad)"," ","bm_inv_dest_alpha"," ","(1-Ad, 1-Ad, 1-Ad, 1-Ad)"," ","bm_dest_colour"," ","(Rd, Gd, Bd, Ad)"," ","bm_inv_dest_colour"," ","(1-Rd, 1-Gd, 1-Bd, 1-Ad)"," ","bm_src_alpha_sat"," ","(f, f, f, 1) where f = min(As, 1-Ad)"],[" ","gpu_get_blendmode_srcalpha();"],[" ","Blend Mode Factor Constant"," (see above table)"],[" ","var bm;","\n    bm[0] = gpu_get_blendmode_srcalpha();","\n    bm[1] = gpu_get_blendmode_destalpha();","\n    gpu_set_blendmode_ext_sepalpha(bm_inv_src_alpha, bm_inv_dest_colour, bm[0], bm[1]);"," ","The above code creates a local array and gets the current source and destination blending factors for the alpha component. This array is then used to manipulate the RGB component of the blending factors."," ","Back: ","GPU Control"," ","Next: "," gpu_get_blendmode_destalpha "]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gpu_get_blendmode_srcalpha,bm_zero,bm_one,bm_src_colour,bm_inv_src_colour,bm_src_alpha,bm_inv_src_alpha,bm_dest_alpha,bm_inv_dest_alpha,bm_dest_colour,bm_inv_dest_colour,bm_src_alpha_sat,bm_src_color,bm_inv_src_color,bm_dest_color,bm_inv_dest_colour"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2109"})