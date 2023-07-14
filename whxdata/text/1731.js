rh._.exports({"0":[[" ","point_distance_3d"]],"1":[["point_distance_3d"]],"2":[[" ","point_distance_3d"]],"3":[[" ","This function takes the supplied components of the vector and returns the length (distance) of the vector. It works in exactly the same way as ","point_distance()"," but with the addition of factoring in the z value (depth) for use in 3D space."],[" ","point_distance_3d(x1, y1, z1, x2, y2, z2);"," ","Argument","Type"," ","Description"," ","x1","Real"," ","The x coordinate of the first component of the vector"," ","y1","Real"," ","The y coordinate of the first component of the vector"," ","z1","Real"," ","The z coordinate of the first component of the vector"," ","x2","Real"," ","The x coordinate of the second component of the vector"," ","y2","Real"," ","The y coordinate of the second component of the vector"," ","z2","Real"," ","The z coordinate of the second component of the vector"],[" ","Real"],[" ","var inst, ex, ey, ez;","\n    inst = instance_nearest(x, y, enemy);","\n    if inst","\n    {","\n        ex = inst.x;","\n        ey = inst.y;","\n        ez = inst.z;","\n        if point_distance_3d(x, y, z, ex, ey, ez) < 200","\n        {","\n            instance_create_layer(x, y, \"Bullets\", obj_Missile)","\n        }","\n    }"," ","The above code will get the x and y and z coordinates of the nearest enemy and then use them to check the distance (length) of the vector formed by them and the player coordinates. If the value is less than 200, the player object will create an instance of \"obj_Missile\"."," ","Back: ","Angles And Distance"," ","Next: ","distance_to_object"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["point_distance_3d"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1731"})