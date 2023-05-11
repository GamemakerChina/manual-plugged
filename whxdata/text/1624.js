rh._.exports({"0":[[" ","buffer_get_type"]],"1":[["buffer_get_type"]],"2":[["buffer_get_type,buffer_fixed,buffer_grow,buffer_wrap,buffer_fast,buffer_vbuffer"]],"3":[[" ","buffer_get_type"]],"4":[[" ","With this function you retrieve the type of buffer that is being referenced by a buffer ID value. The return value will be one of the following constants:"," ","Constant"," ","Description"," ","buffer_fixed"," ","A buffer of fixed size."," ","buffer_grow"," ","A buffer that will \"grow\" dynamically as data is added"," ","buffer_wrap"," ","A buffer where the data will \"wrap\". When the data being added reaches the limit of the buffer size, the overwrite will be placed back at the start of the buffer, and further writing will continue from that point."," ","buffer_fast"," ","Special \"stripped\" buffer that is extremely fast to read/write to. Can only be used with ","buffer_u8"," ","data types",", and ","must"," be 1 byte aligned."," ","buffer_vbuffer"," ","A vertex buffer"],[" ","buffer_get_type(buffer);"," ","Argument","Type"," ","Description"," ","buffer","Buffer ID"," ","The index of the buffer to check."],[" ","Buffer Type Constant"],[" ","type = buffer_get_type(buff);"," ","The above code will get the type of buffer from the value indexed in the variable \"buff\" and store it in a variable."," ","Back: ","Buffers"," ","Next: ","buffer_get_alignment"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1624"})