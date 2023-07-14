rh._.exports({"0":[[" ","layer_sequence_get_xscale"]],"1":[["layer_sequence_get_xscale"]],"2":[[" ","layer_sequence_get_xscale"]],"3":[[" ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," - and it will return the current scale along the X axis of the sequence element in the game room."],[" ","layer_sequence_get_xscale(sequence_element_id)"," ","Argument"," ","Type"," ","Description"," ","sequence_element_id"," ","Sequence Element ID"," ","The unique ID value of the sequence element to target"],[" ","Real"],[" ","var _xs = layer_sequence_get_xscale(title_sequence)","\n    if _xs < 1","\n    {","\n        _xs += 0.01;","\n        layer_sequence_xscale(title_sequence, _xs);","\n    }"," ","The above code retrieves the current scale along the X axis of the sequence element with the ID stored in the variable \"title_sequence\", and if it's less than 1, then 0.01 is added to the current X scale."," ","Back: ","Sequence Layers"," ","Next: ","layer_sequence_get_yscale"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_sequence_get_xscale"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1194"})