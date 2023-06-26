rh._.exports({"0":[[" ","vertex_begin"]],"1":[["vertex_begin"]],"2":[[" ","vertex_begin"]],"3":[[" ","With this function you begin the definition of a custom primitive. You assign a buffer to write the primitive to, and the vertex format to use (previously defined using the vertex format functions). You would then define the necessary points for each vertex of the primitive before calling ","vertex_end()"," to finalise the primitive creation."],[" ","vertex_begin(buffer, format);"," ","Argument"," ","Type"," ","Description"," ","buffer"," ","Vertex Buffer ID"," ","The buffer to be written to."," ","format"," ","Vertex Format ID"," ","The vertex format to use."],[" ","N/A"],[" ","vertex_format_begin();","\n    vertex_format_add_position();","\n    vertex_format_add_colour();","\n    vertex_format_add_textcoord();","\n    v_format = vertex_format_end();","\n    v_buff = vertex_create_buffer();","\n    vertex_begin(v_buff, v_format);"," ","The above code will define a new vertex format, create a new buffer and start the definition process of a new primitive."," ","Back: ","Primitives And Vertex Formats"," ","Next: ","vertex_colour"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["vertex_begin"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"878"})