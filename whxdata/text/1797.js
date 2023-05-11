rh._.exports({"0":[[" ","buffer_get_surface"]],"1":[["buffer_get_surface,buffer_surface_copy (Deprecated)"]],"2":[["buffer_get_surface,buffer_surface_copy"]],"3":[[" ","buffer_get_surface"]],"4":[[" ","With this function you can write information from a surface to a given buffer. The buffer must have been created previously and should be a 1-byte aligned buffer large enough to store data for the surface you are going to write (if unsure, use a ","grow"," buffer or see the example at the bottom of this page)."," ","The information for the surface will always be written to the start of the buffer (regardless of the seek position) but you can choose an offset value (in bytes) to move the write position from the start of the buffer."," ","The ","format"," of the surface will affect how the surface is written into the buffer. Keep in mind that the same format may be written in a different way on different platforms."],[" ","buffer_get_surface(buffer, surface, offset);"," ","Argument"," ","Type"," ","Description"," ","buffer"," ","Buffer ID"," ","The index of the buffer to use."," ","surface"," ","Surface ID"," ","The index of the surface to use."," ","offset"," ","Real"," ","The data offset value (in bytes)."],[" ","N/A"],[" ","buffer = buffer_create(surf_width * surf_height * 4, buffer_fixed, 1);","\n    buffer_get_surface(buffer, surface, 0);"," ","This code will create a fixed-size buffer which has the capacity to store 4 bytes per pixel (for the R, G, B and A components) based on the exact size of the surface, and then copy the surface data into it."," ","Back: ","Buffers"," ","Next: ","buffer_set_surface"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1797"})