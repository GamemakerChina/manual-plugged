rh._.exports({"0":[[" ","gpu_get_blendmode_ext_sepalpha"]],"1":[["gpu_get_blendmode_ext_sepalpha,bm_zero,bm_one,bm_src_colour,bm_inv_src_colour,bm_src_alpha,bm_inv_src_alpha,bm_dest_alpha,bm_inv_dest_alpha,bm_dest_colour,bm_inv_dest_colour,bm_src_alpha_sat,bm_src_color,bm_inv_src_color,bm_dest_color,bm_inv_dest_colour"]],"2":[["gpu_get_blendmode_ext_sepalpha,bm_zero,bm_one,bm_src_colour,bm_inv_src_colour,bm_src_alpha,bm_inv_src_alpha,bm_dest_alpha,bm_inv_dest_alpha,bm_dest_colour,bm_inv_dest_colour,bm_src_alpha_sat,bm_src_color,bm_inv_src_color,bm_dest_color,bm_inv_dest_colour"]],"3":[[" ","gpu_get_blendmode_ext_sepalpha"]],"4":[[" ","This function can be used to retrieve the current extended blend mode being used for drawing, separating out the blend modes into two parts - the RGB component and the Alpha component. The function returns a 4 element 1D array with the following elements in it:"," ","[0] = Source blend mode minus the alpha component (default is ","bm_src_alpha"," (As, As, As))"," ","[1] = Destination blend mode minus the alpha component (default is ","bm_inv_src_alpha"," (1-As, 1-As, 1-As))"," ","[2] = Source alpha component (default is ","bm_src_alpha"," (As))"," ","[3] = Destination alpha component (default is ","bm_inv_src_alpha"," (1-As))"," ","The values of the array will be one of the following constants (\"s\" denotes a value taken from the source while a \"d\" denotes a value from the destination):"," ","Blend Mode Factor Constant"," ","Constant"," ","Blend factor (Red, Green, Blue, Alpha)"," ","bm_zero"," ","(0, 0, 0, 0)"," ","bm_one"," ","(1, 1, 1, 1)"," ","bm_src_colour"," ","(Rs, Gs, Bs, As)"," ","bm_inv_src_colour"," ","(1-Rs, 1-Gs, 1-Bs, 1-As)"," ","bm_src_alpha"," ","(As, As, As, As)"," ","bm_inv_src_alpha"," ","(1-As, 1-As, 1-As, 1-As)"," ","bm_dest_alpha"," ","(Ad, Ad, Ad, Ad)"," ","bm_inv_dest_alpha"," ","(1-Ad, 1-Ad, 1-Ad, 1-Ad)"," ","bm_dest_colour"," ","(Rd, Gd, Bd, Ad)"," ","bm_inv_dest_colour"," ","(1-Rd, 1-Gd, 1-Bd, 1-Ad)"," ","bm_src_alpha_sat"," ","(f, f, f, 1) where f = min(As, 1-Ad)"," ","When creating the extended blend modes in this way, the RGB components will be taken from one blend mode and the Alpha component will be taken from another, so that - for example - if you use ","bm_zero"," (0, 0, 0, 0) as the RGB blend mode and ","bm_one"," as the alpha blend mode, you will get a composite blend of (0,0,0,1)."," ","Note that you can change these values directly within the array and pass the full array to the function as a single argument (as shown in the example below)."],[" ","gpu_get_blendmode_ext_sepalpha();"],[" ","Array"," (4 elements only; see above for constants)"],[" ","var bm = gpu_get_blendmode_ext_sepalpha();","\n    bm[0] = bm_src_alpha;","\n    bm[1] = bm_inv_src_alpha;","\n    gpu_set_blendmode_ext_sepalpha(bm);"," ","The above code creates a local array and gets the current extended blend mode with separate alpha values. This array is then manipulated and returned to set the blend mode."," ","Back: ","GPU Control"," ","Next: ","gpu_get_blendmode_src"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2070"})