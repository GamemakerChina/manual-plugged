rh._.exports({"0":[[" ","instance_activate_layer"]],"1":[["instance_activate_layer"]],"2":[["instance_activate_layer"]],"3":[[" ","instance_activate_layer"]],"4":[[" ","With this function you can activate a layer that has been deactivated previously. You need to supply the ","layer ID",", which can either be the name of the layer as written in the code editor (as a string) or the actual layer ID value as returned by the ","layer_create()"," and all deactivated instances on that layer will activated once again. Note that if you have deactivated a layer that has persistent instances, you will need to reactivate the layer again with this function before changing room, otherwise any persistent instances will ","not"," be carried over and will be discarded. Note too that activation is not instantaneous, and an instance that has been activated in this way will not be considered to be active until the end of the event in which the function was called."],[" ","instance_activate_layer(layer_id);"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","Layer ID"," or ","String"," ","The layer name string (or ID value) to be used"],[" ","N/A"],[" ","instance_activate_all();","\n    var _vx = camera_get_view_x(view_camera[0]);","\n    var _vy = camera_get_view_y(view_camera[0]);","\n    instance_deactivate_region(view_xview[0] - 64, view_yview - 64, _vx + 128, _vy + 128, false, false);","\n    instance_activate_layer(\"Player_Layer\");"," ","The above code activates all instances within the room and then deactivates those that are outside of the limits of the current camera view, except for the instances on the layer \"Player_Layer\" which are re-activated again at the end."," ","Back: ","Deactivating Instances"," ","Next: ","instance_deactivate_all"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1621"})