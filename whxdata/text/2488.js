rh._.exports({"0":[[" ","buffer_create_from_vertex_buffer_ext"]],"1":[["buffer_create_from_vertex_buffer_ext,buffer_fixed,buffer_grow,buffer_wrap,buffer_fast,buffer_vbuffer"]],"2":[[" ","buffer_create_from_vertex_buffer_ext"]],"3":[[" ","You use this function to allocate a portion of memory as a buffer in your game filled with the data from a previously created ","vertex buffer",". The function returns a unique ","buffer id"," that should be stored in a variable and used for all further function calls to the buffer. The function takes the id for the vertex buffer to use (as returned by the function ","vertex_create_buffer()",", for example) with the following constants being used to define the buffer type:"," ","Constant"," ","Description"," ","buffer_fixed"," ","A buffer of fixed size."," ","buffer_grow"," ","A buffer that will \"grow\" dynamically as data is added"," ","buffer_wrap"," ","A buffer where the data will \"wrap\". When the data being added reaches the limit of the buffer size, the overwrite will be placed back at the start of the buffer, and further writing will continue from that point."," ","buffer_fast"," ","Special \"stripped\" buffer that is extremely fast to read/write to. Can only be used with ","buffer_u8"," ","data types",", and ","must"," be 1 byte aligned."," ","buffer_vbuffer"," ","This type of buffer is to be used as a vertex buffer only."," ","Apart from the buffer type, you will also have to set the ","byte alignment"," for the buffer. This value will vary depending on the data that you wish to store in the buffer, and in most cases a value of 1 is perfectly fine. However, be aware that for some operations a specific alignment is ","essential",", and an incorrect alignment may cause errors (for further details on alignment see ","Buffer Alignment","). The following is a general guide to show which values are most appropriate for each data type (when in doubt, use an alignment of 1):"," ","Strings should be aligned to 1 byte."," ","Signed or unsigned 8bit integers can be aligned to any value, but note that for a fast buffer (see ","buffer_write()",") it ","must"," be aligned to 1."," ","Signed or unsigned 16bit integers should be aligned to 2 bytes."," ","Signed or unsigned 32bit integers should be aligned to 4 bytes"," ","Floats of up to 16bits should be aligned to 2 bytes. ","(Not currently supported!)"," ","Floats of up to 32bits should be aligned to 4 bytes."," ","Floats of up to 64bits should be aligned to 8 bytes."," ","NOTE",": Vertex buffers are 1 byte aligned, but you can create the buffer with any alignment depending on how you want to treat the data, as the vertex data is simply a raw memory copy into the buffer."," ","The final two arguments are used to specify the range of vertex data that you wish to copy into the newly created buffer. The start vertex can be anywhere between 0 and the number of vertices -1, and then you give the number of vertices from that point to copy. You can use the function ","vertex_get_number()"," on the vertex buffer to get the total number of vertices stored."," ","NOTE",": It's important that you remove any dynamically created resources like this from memory when you no longer need them to prevent memory leaks, so when you are finished with the buffer that you have created you should free it up again using ","buffer_delete()",". Also note that the vertex buffer used to create the new buffer is not removed from memory either and you should use the function ","vertex_delete_buffer()"," when it is no longer required."],[" ","buffer_create_from_vertex_buffer_ext(vertex_buffer, type, alignment, start_vertex, num_vertices)"," ","Argument"," ","Type"," ","Description"," ","vertex_buffer"," ","Vertex Buffer ID"," ","The vertex buffer index to use."," ","type"," ","Buffer Type Constant"," ","The type of buffer to create (see the constants list below)."," ","alignment"," ","Real"," ","The byte alignment for the buffer"," ","start_vertex"," ","Real"," ","The starting vertex."," ","num_vertices"," ","Real"," ","The total number of vertices to copy."],[" ","Buffer ID"],[" ","var v_num = vertex_get_number(model_buff); player_buffer = buffer_create_from_vertex_buffer(model_buffer, buffer_grow, 1, 0, v_num - 1);"," ","The above code allocates memory to a buffer then copies the data of all vertices from the given vertex buffer into it, returning the index of the new buffer which is stored in the variable \"player_buffer\", for future use."," ","Back: ","Buffers"," ","Next: ","buffer_delete"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["buffer_create_from_vertex_buffer_ext"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2488"})