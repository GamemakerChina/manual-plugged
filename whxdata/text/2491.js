rh._.exports({"0":[[" ","collision_ellipse_list"]],"1":[["collision_ellipse_list"]],"2":[["collision_ellipse_list"]],"3":[[" ","collision_ellipse_list"]],"4":[[" ","This function is the same as the ","collision_ellipse()"," function, only instead of just detecting one instance / tile map in collision at a time, it will detect multiple instances or tile maps. You supply the x/y positions of the top left and bottom right of the elliptical area to check along with the object / tile map to check for, and you can set the check to be precise (in which case all instances being checked will need to have ","precise"," collision masks) and whether the check should include the calling instance or not."," ","You supply a ","DS list"," too, so the ","id"," values of any instances (or tile maps) that are colliding with the calling instance will be added to the end of the given list. You can ","clear"," the list before calling this function so that it only contains results from this function call. You also have the option to order the instances based on their distances from the origin of the elliptic area to their origins. The function returns the number of instances / tile maps found, or 0 if none are found."," ","In addition to objects and instances, the function also accepts:"," ","The special keywords ","all"," and ","other"," ","A ","Tile Map Element ID"," ","An array containing a combination of objects, instances, Tile Maps and the keywords ","all","/","other"," ","Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call."],[" ","collision_ellipse_list(x1, y1, x2, y2, obj, prec, notme, list, ordered);"," ","Argument"," ","Type"," ","Description"," ","x1"," ","Real"," ","The x coordinate of the left side of the ellipse to check."," ","y1"," ","Real"," ","The y coordinate of the top side of the ellipse to check."," ","x2"," ","Real"," ","The x coordinate of the right side of the ellipse to check."," ","y2"," ","Real"," ","The y coordinate of the bottom side of the ellipse to check."," ","obj"," ","Object Asset"," or ","Object Instance"," or ","Tile Map Element ID"," or ","Array"," ","An object, instance, tile map ID, keywords all/other, or array containing these items"," ","prec"," ","Boolean"," ","Whether the check is based on precise collisions (","true",", which is slower) or its bounding box in general (","false",", faster)."," ","notme"," ","Boolean"," ","Whether the calling instance, if relevant, should be excluded (","true",") or not (","false",")."," ","list"," ","DS List"," ","The DS list to use to store the IDs of colliding instances."," ","ordered"," ","Boolean"," ","Whether the list should be ordered by distance (","true",") or not (","false",")."],[" ","Real"," (The number of instances / tile maps found to be in collision)"],[" ","var _list = ds_list_create();","\n    var _num = collision_ellipse_list(x - 100, y - 100, x + 100, y + 100, obj_Enemy, false, true, _list, false);","\n    if (_num > 0) ","\n    {","\n        for (var i = 0; i < _num; ++i;)","\n        {","\n            instance_destroy(_list[| i]);","\n        }","\n    }","\n    ds_list_destroy(_list);"," ","The code above will check an elliptical area 100 pixels around the calling instance position for collisions with instances of \"obj_Enemy\". If there are any collisions, then the pre-created list is looped through and each instance that was in the collision is destroyed."," ","Back: ","Collisions"," ","Next: ","collision_line"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2491"})