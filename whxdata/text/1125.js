rh._.exports({"0":[[" ","sequence_exists"]],"1":[["sequence_exists"]],"2":[[" ","sequence_exists"]],"3":[[" ","With this function you can check to see if a sequence object exists or not. You supply either the sequence object struct (as returned by the function ","sequence_create()"," or ","sequence_get()",") or the sequence ID (as returned by the function ","layer_sequence_get_sequence()"," or from the sequence instance struct property ","sequence",", or the index from the asset browser) and the function will return ","true"," if the sequence object exists or ","false"," if it does not."],[" ","sequence_exists(sequence_struct_or_id);"," ","Argument"," ","Type"," ","Description"," ","sequence_struct_or_id"," ","Sequence Asset"," or ","Sequence Object Struct"," ","The sequence to check for, can be the asset reference itself or its Sequence object struct."],[" ","Boolean"],[" ","if sequence_exists(my_seq)","\n    {","\n        sequence_destroy(my_seq);","\n    }"," ","The above code checks to see if the given sequence object exists and if it does it is destroyed."," ","Back: ","Sequences"," ","Next: ","sequence_create"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["sequence_exists"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1125"})