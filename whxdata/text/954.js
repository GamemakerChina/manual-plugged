rh._.exports({"0":[[" ","skeleton_slot_alpha_get"]],"1":[["skeleton_slot_alpha_get"]],"2":[[" ","skeleton_slot_alpha_get"]],"3":[[" ","With this function you can get an attachment slot alpha value. You supply the slot name (a string) and the function will return an real value for the alpha between 0 and 1."],[" ","skeleton_slot_alpha_get(slot);"," ","Argument"," ","Type"," ","Description"," ","slot"," ","String"," ","The slot name to check, a string"],[" ","Real"],[" ","slot_list = ds_list_create();","\n    skeleton_find_slot(mouse_x, mouse_y, slot_list);","\n    if !ds_list_empty(slot_list)","\n    {","\n        for (var i = 0; i < ds_list_size(slot_list); ++i)","\n        {","\n            if skeleton_slot_alpha_get(slot_list[| i]) != 1","\n            {","\n                skeleton_slot_colour_set(slot_list[| i], c_white, 1);","\n            }","\n        }","\n    }"," ","The above code creates a DS list and then populates it with the slot names found at the position of the mouse in the room. It then loops through the slot list and resets the colour for the found slots to white with an alpha of 1 if the alpha is not already 1."," ","Back: ","Slots"," ","Next: ","skeleton_get_minmax"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["skeleton_slot_alpha_get"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"954"})