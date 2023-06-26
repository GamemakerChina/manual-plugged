rh._.exports({"0":[[" ","surface_get_format"]],"1":[["surface_get_format"]],"2":[[" ","surface_get_format"]],"3":[[" ","This function returns the format of the given surface. All formats are ","listed here","."],[" ","surface_get_format(surface_id);"," ","Argument"," ","Type"," ","Description"," ","surface_id"," ","Surface ID"," ","The ID of the surface to get the format of"],[" ","Variable \"Type_Constant_Surface_Format\" is not defined"],[" ","var _format = surface_get_format(my_surf);","\n    if (_format == surface_rgba8unorm)","\n    {","\n        var _buffer = buffer_create(1, buffer_grow, 1);","\n        buffer_get_surface(_buffer, my_surf, 0);","\n        buffer_seek(_buffer, buffer_seek_start, 0);","\n        show_debug_message(buffer_read(_buffer, buffer_u8));","\n        show_debug_message(buffer_read(_buffer, buffer_u8));","\n        show_debug_message(buffer_read(_buffer, buffer_u8));","\n        show_debug_message(buffer_read(_buffer, buffer_u8));","\n    }"," ","This gets the format of a surface, and checks if it's ","surface_rgba8unorm",", meaning each pixel has 4 channels (RGBA) with each channel having 8 bits (1 byte)."," ","If the format matches, it creates a buffer and writes the surface to that buffer. It then seeks to the start of the buffer and reads the first four bytes, i.e. the RGBA values for the first pixel. It prints each channel's value to the output log."," ","Back: ","Surfaces"," ","Next: ","surface_format_is_supported"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["surface_get_format"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1741"})