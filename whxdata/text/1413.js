rh._.exports({"0":[[" ","point_direction"]],"1":[["point_direction"]],"2":[["point_direction"]],"3":[[" ","point_direction"]],"4":[[" ","This function returns the direction of a vector formed by the specified components [x1,y1] and [x2,y2] in relation to the fixed x/y coordinates of the room. For example, in the image below if we want to get the direction from the player ship position to the enemy position so that we can fire a missile at the enemy then we would use this function (the exact code is in the example below the image):"],[" ","point_direction(x1, y1, x2, y2)"," ","Argument","Type"," ","Description"," ","x1","Real"," ","The x coordinate of the first component of the vector"," ","y1","Real"," ","The y coordinate of the first component of the vector"," ","x2","Real"," ","The x coordinate of the second component of the vector"," ","y2","Real"," ","The y coordinate of the second component of the vector"],[" ","Real"],[" ","var ex, ey;","\n    ex = instance_nearest(x, y, enemy).x;","\n    ey = instance_nearest(x, y, enemy).y;","\n    with (instance_create_layer(x, y, \"Bullets\", obj_Missile))","\n    {","\n        direction = point_direction(x, y, ex, ey);","\n    }"," ","The above code will get the x and y coordinates of the nearest enemy and then pass them to a bullet object to use in the point_direction function to set its direction of travel correctly."," ","Back: ","Angles And Distance"," ","Next: ","point_distance"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1413"})