rh._.exports({"0":[[" ","surface_getpixel"]],"1":[["surface_getpixel"]],"2":[[" ","surface_getpixel"]],"3":[[" ","This function can be used to get the colour of a specific pixel from a surface, using the local coordinates of the surface where (0,0) is the top left corner. This function should ","not"," be used very often as it is extremely slow and may cause a pause in your game."," ","The data type returned by this function will depend on the ","format"," of the given surface:"," ","Formats"," ","Function Return"," ","surface_rgba8unorm"," (default)"," ","surface_rgba4unorm","\n            surface_r8unorm","\n            surface_rg8unorm"," ","For these formats, the function will return a regular ","colour"," value. Any unused channels are set to 0."," ","surface_rgba16float","\n            surface_r16float","\n            surface_rgba32float","\n            surface_r32float"," ","For these formats, the function will return an array with 3 values (R, G, B) with each being a 32-bit float. Any unused channels are set to 0."," ","\n          To get the pixel colour with the alpha channel, use ","surface_getpixel_ext",".\n        "," ","NOTE"," When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly."],[" ","surface_getpixel(surface_id, x, y);"," ","Argument"," ","Type"," ","Description"," ","surface_id"," ","Surface ID"," ","The ID of the surface."," ","x"," ","Real"," ","The x position on the surface from which to get the pixel."," ","y"," ","Real"," ","The y position on the surface from which to get the pixel."],[" ","Colour"," or ","Array"],[" ","col = surface_getpixel(surf, 56, 78);"," ","This will return the colour of the pixel at coordinates (56,78) of the surface indexed in the variable ","surf","."," ","Back: ","Surfaces"," ","Next: ","surface_getpixel_ext"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["surface_getpixel"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2369"})