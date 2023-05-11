rh._.exports({"0":[[" ","layer_sequence_get_yscale"]],"1":[["layer_sequence_get_yscale"]],"2":[["layer_sequence_get_yscale"]],"3":[[" ","layer_sequence_get_yscale"]],"4":[[" ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," - and it will return the current scale along the Y axis of the sequence element in the game room."],[" ","layer_sequence_get_yscale(sequence_element_id)"," ","Argument"," ","Type"," ","Description"," ","sequence_element_id"," ","Sequence Element ID"," ","The unique ID value of the sequence element to target"],[" ","Real"],[" ","var _ys = layer_sequence_get_yscale(title_sequence)","\n    if _ys < 1","\n    {","\n        _ys += 0.01;","\n        layer_sequence_yscale(title_sequence, _ys);","\n    }"," ","The above code retrieves the current scale along the Y axis of the sequence element with the ID stored in the variable \"title_sequence\", and if it's less than 1, then 0.01 is added to the current Y scale."," ","Back: ","Sequence Layers"," ","Next: ","layer_sequence_get_headpos"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1209"})