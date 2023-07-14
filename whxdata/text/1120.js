rh._.exports({"0":[[" ","skeleton_animation_list"]],"1":[["skeleton_animation_list"]],"2":[[" ","skeleton_animation_list"]],"3":[[" ","With this function you can populate a (pre-created) ","DS list"," with all the names of the animations included as part of the skeletal animation sprite. The names will be strings and can then be used in the other animation functions for these types of sprite."],[" ","skeleton_animation_list(sprite, list);"," ","Argument"," ","Type"," ","Description"," ","sprite"," ","Sprite Asset"," ","The sprite index of the Spine skeletal animation to get the list from."," ","list"," ","DS List ID"," ","The ID of the DS list to populate with the animation names."],[" ","N/A"],[" ","var list = ds_list_create();","\n    skeleton_animation_list(sprite_index, list);"," ","\n    for (var i = 1; i < ds_list_size(list); i++;)","\n    {","\n        skeleton_animation_mix(list[| 0], list[| i], 0.5);","\n    }"," ","\n    ds_list_destroy(list);\n  "," ","The above code creates a DS list of all the animation names for the sprite being used by the instance. It then loops through these and sets the mix value for all of them with the first animation to 0.5."," ","Back: ","Animation"," ","Next: ","skeleton_animation_clear"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["skeleton_animation_list"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1120"})