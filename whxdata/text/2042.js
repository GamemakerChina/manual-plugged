rh._.exports({"0":[[" ","point_in_triangle"]],"1":[["point_in_triangle"]],"2":[["point_in_triangle"]],"3":[[" ","point_in_triangle"]],"4":[[" ","When using this function, you define a triangular area and ","GameMaker"," will work out whether the given point falls within its bounds or not. If the point falls within the defined triangle the function will return ","true"," otherwise the function will return ","false","."],[" ","point_in_triangle(px, py, x1, y1, x2, y2, x3, y3);"," ","Argument","Type"," ","Description"," ","px","Real"," ","The x coordinate of the point to check."," ","py","Real"," ","The y coordinate of the point to check."," ","x1","Real"," ","The x coordinate of the first corner of the triangle to check."," ","y1","Real"," ","The y coordinate of the first corner of the triangle to check."," ","x2","Real"," ","The x coordinate of the second corner of the triangle to check."," ","y2","Real"," ","The y coordinate of the second corner of the triangle to check."," ","x3","Real"," ","The x coordinate of the third corner of the triangle to check."," ","y3","Real"," ","The y coordinate of the third corner of the triangle to check."],[" ","Boolean"],[" ","var inst = instance_nearest(x, y, obj_Player);","\n    if instance_exists(inst)","\n    {","\n        var x1 = x + lengthdir_x(100, image_angle - 45);","\n        var y1 = y + lengthdir_y(100, image_angle - 45);","\n        var x2 = x + lengthdir_x(100, image_angle + 45);","\n        var y2 = y + lengthdir_y(100, image_angle + 45);","\n        if point_in_triangle(inst.x, inst.y, x, y, x1, y1, x2, y2)","\n        {","\n            can_see = true;","\n        }","\n    }"," ","The above code uses the ","point_in_triangle"," function as a \"cone of vision\" to check for an instance of \"obj_player\", setting a variable to ","true"," should the objects x/y position fall within the defined triangle."," ","Back: ","Collisions"," ","Next: ","point_in_circle"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2042"})