rh._.exports({"0":[[" ","Transferring Data Between Buffers"]],"1":[["buffer,vertex buffer"]],"2":[["buffer,vertex buffer,data,transfer,stride,copy,update"]],"3":[[" ","Transferring Data Between Buffers"]],"4":[[" ","This page gives an overview of how you can transfer data between buffers and vertex buffers."," ","At the lowest level, a buffer is a contiguous region in memory that consists of bytes. Using the functions ","buffer_read"," and ","buffer_write"," (and ","buffer_peek",", ","buffer_poke"," and ","buffer_fill",") basic data types can be written into a buffer. On top of this, these basic data types can be combined to create data structures where each entry in the structure follows a given format."],[" ","Items stored in a buffer in such a structured way all take up the same number of bytes. This is the number of bytes to move to go from one item to the next and is called the stride."],[" ","The following functions allow copying parts of data from one buffer to another: "," ","buffer_copy",": copies a contiguous block of bytes once"," ","buffer_copy_stride",": copies a contiguous block of bytes multiple times. You can use this to copy e.g. all positions, all colours, all UV's, etc."],[" ","A vertex buffer is a special type of buffer. The vertex format determines what data is written to the buffer and in which order. You don't have to write the values directly, but can call functions such as ","vertex_position_3d",", ","vertex_colour",", ","vertex_texcoord",", etc."," ","A few things are specific to vertex buffers: "," ","The stride in this case is the size of the vertex format (and that of a vertex)."," ","Most components of the vertex attributes are stored as a 32bit float (","buffer_f32",")."," ","Each of the components of a colour attribute (R, G, B, A) is stored as an unsigned byte (","buffer_u8",")."," ","The following schematic shows how the data in a vertex buffer maps to the data in a buffer, and the other way around: "," ","TIP"," You can use the function ","vertex_format_get_info"," to get information on how the data of a vertex in a given format is laid out in a buffer."," ","The following functions can be used to transfer data between buffers and vertex buffers and vice versa: "," ","buffer_create_from_vertex_buffer"," ","buffer_create_from_vertex_buffer_ext"," ","buffer_copy_from_vertex_buffer"," ","vertex_create_buffer_from_buffer"," ","vertex_create_buffer_from_buffer_ext"," ","vertex_update_buffer_from_buffer"," ","Back: ","Buffers"," ","Next: ","buffer_exists"]],"6":[[" ","© Copyright ","YoYo Games"," ","Ltd."," ","2024"," All Rights Reserved"]],"7":[[" ","Stride"]],"8":[[" ","Buffer to Buffer"],[" ","Buffer to Vertex Buffer"]],"id":"2431"})