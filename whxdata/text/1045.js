rh._.exports({"0":[[" ","buffer_get_address"]],"1":[["buffer_get_address"]],"2":[["buffer_get_address"]],"3":[[" ","buffer_get_address"]],"4":[[" ","With this function you can get the a ","pointer"," to the raw, ","aligned"," buffer address. This is primarily for use with extensions as you can pass this value through to them, allowing them to access the buffer data. Note that there are a few things\n    you cannot do with the buffer when accessing from an extension:"," ","You cannot free the memory."," ","You cannot resize the memory."," ","You cannot not write past the buffer address plus the buffer size (you can use the ","buffer_get_size()"," function for this) or you will get an out of bounds error."],[" ","buffer_get_address(buffer);"," ","Argument","Type"," ","Description"," ","buffer","Buffer ID"," ","The index of the buffer to use."],[" ","Pointer"],[" ","var b_address = buffer_get_address(buff_model);"," var b_end_address = b_address + buffer_get_size(buff_model);"," ","The above code will get the memory address of the buffer indexed in the variable \"buff_model\" and then get the memory address for the end of the buffer using the ","buffer_get_size()"," function, storing both values in local variables for\n    further use."," ","Back: ","Buffers"," ","Next: ","buffer_get_size"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1045"})