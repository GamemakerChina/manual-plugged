rh._.exports({"0":[[" ","point_in_circle"]],"1":[["point_in_circle"]],"2":[[" ","point_in_circle"]],"3":[[" ","When using this function, you define a circular area and ","GameMaker"," will work out whether the given point falls within its bounds or not. If the point falls within the defined circle the function will return ","true"," otherwise the function will return ","false","."],[" ","point_in_circle(px, py, x1, y1, rad);"," ","Argument","Type"," ","Description"," ","px","Real"," ","The x coordinate of the point to check."," ","py","Real"," ","The y coordinate of the point to check."," ","x1","Real"," ","The x coordinate of the circle centre."," ","y1","Real"," ","The y coordinate of the circle centre."," ","rad","Real"," ","The radius of the circle."],[" ","Boolean"],[" ","if point_in_circle(mouse_x, mouse_y, x, y, 16)","\n    {","\n        over = true;","\n    }","\n    else","\n    {","\n        over = false;","\n    }"," ","The above code uses the ","point_in_circle"," function to check if the mouse position falls within the defined circular area, setting the variable \"over\" to ","true"," if it does, or ","false"," otherwise."," ","Back: ","Collisions"," ","Next: ","rectangle_in_rectangle"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["point_in_circle"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1385"})