rh._.exports({"0":[[" ","vertex_format_add_colour"]],"1":[["vertex_format_add_colour,vertex_format_add_color"]],"2":[["vertex_format_add_colour,vertex_format_add_color"]],"3":[[" ","vertex_format_add_colour"]],"4":[[" ","This function adds an RGBA colour attribute to the new vertex format being created."," ","IMPORTANT"," The attribute is stored as four bytes in the vertex buffer and turned into a vec4 (floats)."],[" ","vertex_format_add_colour","();"],[" ","N/A"],[" ","vertex_format_begin();","\n    vertex_format_add_colour();","\n    vertex_format_add_position();","\n    my_format = vertex_format_end();"," ","The above code creates a new vertex format with just colour and position values and then stores the format in the variable ","my_format","."," ","Back: ","Primitives And Vertex Formats"," ","Next: ","vertex_format_add_position"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"459"})