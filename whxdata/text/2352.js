rh._.exports({"0":[[" ","collision_line"]],"1":[["collision_line"]],"2":[["collision_line"]],"3":[[" ","collision_line"]],"4":[[" ","Collision_line"," checks along a line from point x1,y1 to point x2,y2 for a collision with ","any"," instance of the object specified by the argument \"obj\". this check can be either precise or not, but for precise collisions to be enabled, the object or instance that you are checking for ","must"," also have precise collisions enabled for their sprite. If not, the default check is based on bounding boxes. The following image illustrates how this works:"," ","Remember, for precise collisions to be considered ","both"," the object sprite and the collision function must have precise marked as on. It should also be noted that the return value of the function can be the id of ","any one"," of the instances considered to be in collision along the line, so if three instance overlap the defined line, any one of their ids could be the return value of the function."," ","Note that instead of an object index you can supply an instance ","id"," to check for a specific instance, or the ","instance keywords"," ","all",", or ","other"," (depending on the event and current code scope)."],[" ","collision_line(x1, y1, x2, y2, obj, prec, notme);"," ","Argument"," ","Type"," ","Description"," ","x1"," ","Real"," ","The x coordinate of the start of the line."," ","y1"," ","Real"," ","The y coordinate of the start of the line."," ","x2"," ","Real"," ","The x coordinate of the end of the line."," ","y2"," ","Real"," ","The y coordinate of the end of the line."," ","obj"," ","Object Asset"," or ","Instance ID"," ","The object or instance to check for."," ","prec"," ","Boolean"," ","Whether the check is based on precise collisions (","true",", which is slower) or its bounding box in general (","false",", faster)."," ","notme"," ","Boolean"," ","Whether the calling instance, if relevant, should be excluded (","true",") or not (","false",")."],[" ","Instance ID"," or ","noone"],[" ","with (obj_Enemy)","\n    {","\n        if collision_line(100, 400, 100, 600, id, false, false) instance_destroy();","\n    }"," ","This code gets all instances of \"obj_Enemy\" to check along a line from 100x, 400y to 100x, 600y for a collision with themselves, and if there is one then they are destroyed."," ","Back: ","Collisions"," ","Next: ","collision_line_list"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2352"})