rh._.exports({"0":[[" ","layer_background_exists"]],"1":[["layer_background_exists"]],"2":[["layer_background_exists"]],"3":[[" ","layer_background_exists"]],"4":[[" ","You can use this function to check and see if a background element exists on any given layer. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and the background element ID (which you get when you create a background element using ","layer_background_create()"," or when you use the function ","layer_background_get_id()",") and the function will return either ","true"," if the element exists, or ","false"," if it does not."," ","NOTE",": This function works within the scope of the current target room - by default the room in which the function is called - which can be set using the function ","layer_set_target_room()","."],[" ","layer_background_exists(layer_id, background_element_id)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer ID"," ","The unique ID value of the layer to target (or the layer name as a string)"," ","background_element_id"," ","Background Element ID"," ","The unique ID value of the background element to check"],[" ","Boolean"],[" ","var lay_id = layer_get_id(\"Background_trees\");","\n    if layer_background_exists(lay_id, global.TreesBackground)","\n    {","\n        layer_background_destroy(lay_id, global.TreesBackground);","\n    }"," ","The above code checks the layer \"Background_trees\" to see if the given background element exists and if it does, then it is destroyed (but not the layer)."," ","Back: ","Background Layers"," ","Next: ","layer_background_create"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1853"})