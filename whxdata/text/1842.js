rh._.exports({"0":[[" ","skeleton_slot_colour_set"]],"1":[["skeleton_slot_colour_set,skeleton_slot_color_set"]],"2":[[" ","skeleton_slot_colour_set"]],"3":[[" ","With this function you can set an attachment slot colour and alpha so all sprites attached to it will be drawn with these blend values. Keep in mind that the instance sprite can have a blend colour and alpha setting (","image_blend"," and ","image_alpha","), as can the attachment (see the function ","skeleton_attachment_create_colour()","), and so the final colour and alpha that the assigned attachment sprite for the slot will have will be a composite of all these values."],[" ","skeleton_slot_colour_set(slot, colour, alpha);"," ","Argument"," ","Type"," ","Description"," ","slot"," ","String"," ","The slot name to set, a string"," ","colour"," ","Colour"," ","The colour to set, either an integer, a constant, or a hex value."," ","alpha"," ","Real"," ","The alpha to set from 0 to 1."],[" ","N/A"],[" ","slot_list = ds_list_create();","\n    skeleton_find_slot(mouse_x, mouse_y, slot_list);","\n    if !ds_list_empty(slot_list)","\n    {","\n        for (var i = 0; i < ds_list_size(slot_list); ++i)","\n        {","\n            if skeleton_slot_colour_get(slot_list[| i]) != c_white","\n            {","\n                skeleton_slot_colour_set(slot_list[| i], c_white, 1);","\n            }","\n        }","\n    }"," ","The above code creates a DS list and then populates it with the slot names found at the position of the mouse in the room. It then loops through the slot list and resets the colour for the found slots to white with an alpha of 1 if the colour is not already white."," ","Back: ","Slots"," ","Next: ","skeleton_slot_colour_get"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["skeleton_slot_colour_set"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1842"})