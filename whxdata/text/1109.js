rh._.exports({"0":[[" ","skeleton_collision_draw_set"]],"1":[["skeleton_collision_draw_set"]],"2":[[" ","skeleton_collision_draw_set"]],"3":[[" ","With this function, you can toggle on (","true",") or off (","false",") drawing the collision data for the current skeletal animation sprite being used by the instance. If this is switched on, the bounding box and the precise collision mask will be drawn as outlines around the sprite."," ","This function only works when the skeletal sprite drawing is being handled by the object. To draw the collision bounding box when drawing a skeletal sprite manually, use ","draw_skeleton_collision()","."," ","NOTE"," The bounding box of a Spine sprite is set up in Spine itself, not in ","GameMaker","."],[" ","skeleton_collision_draw_set(flag);"," ","Argument"," ","Type"," ","Description"," ","flag"," ","Boolean"," ","Set to ","true"," to turn on drawing, and ","false"," to turn it off."],[" ","N/A"],[" ","if debug_mode == true","\n    {","\n        skeleton_collision_draw_set(true);","\n    }"," ","The above code checks to see if the game is being run in debug mode and if it is, it toggles the skeletal collision data for the instance to be shown."," ","Back: ","Drawing And Miscellaneous"," ","Next: ","draw_skeleton"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["skeleton_collision_draw_set"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1109"})