rh._.exports({"0":[[" ","layer_get_name"]],"1":[["layer_get_name"]],"2":[[" ","layer_get_name"]],"3":[[" ","You can use this function to get the ","name"," of the given layer. You supply the unique layer ID value and if the layer is one of the named layers created in the room editor, then the function will return a string with the layer name. If the layer is not one of the room editor ones (ie: it was created using ","layer_create()",") then an empty string will be returned."],[" ","layer_get_name(layer_id)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","Layer ID"," ","The unique ID value of the layer to get the name of"],[" ","String"],[" ","var a = layer_get_all();","\n    var layer_list = ds_list_create(); for (var i = 0; i Alt; array_length(a); i++;)","\n    {","\n        if layer_get_name(a[i]) != \"\"","\n        {","\n            ds_list_add(layer_list, a[i])","\n        }","\n    }"," ","The above code gets the IDs for all the layers in the room and then loops though them checking to see if any are named layers. If they are they are then their ID is added to a list."," ","Back: ","General Layer Functions"," ","Next: ","layer_get_all"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_get_name"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"843"})