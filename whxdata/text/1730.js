rh._.exports({"0":[[" ","sprite_set_bbox"]],"1":[["sprite_set_bbox"]],"2":[["sprite_set_bbox"]],"3":[[" ","sprite_set_bbox"]],"4":[[" ","This function can be used to set the bounding box values for a sprite. You supply the sprite index to use and then the left, top, right and bottom values for the bounding box positions. The positions are ","absolute"," values, where the (0, 0) position corresponds to the top left corner of the sprite, regardless of the offset for the sprite, any \"empty\" pixels the sprite may have, or where it is being drawn in the room."," ","NOTE"," This function affects the sprite ","asset ","so that all further instances with this sprite will have the same bounding box."],[" ","sprite_set_bbox(ind, left, top, right, bottom);"," ","Argument","Type"," ","Description"," ","ind","Sprite Asset"," ","The index of the sprite to set the bounding box on."," ","left","Real"," ","The left side of the bounding box"," ","top","Real"," ","The top of the bounding box."," ","right","Real"," ","The right side of the bounding box"," ","bottom","Real"," ","The bottom of the bounding box."],[" ","N/A"],[" ","if sprite_get_bbox_mode(sprite_index) == 2","\n    {","\n        left = irandom(sprite_width / 2);","\n        right = irandom((sprite_width / 2) + irandom(sprite_width / 2));","\n        top = irandom(sprite_height / 2);","\n        bottom = irandom((sprite_height / 2) + irandom(sprite_height / 2));","\n        sprite_set_bbox(sprite_index, left, top, right, bottom);","\n    }"," ","The above code will check the bounding box mode of the sprite assigned to the ","sprite_index",", and if it is set to ","manual"," then it will have its bounding box changed."," ","Back: ","Sprite Manipulation"," ","Next: ","sprite_set_speed"]],"5":[[" ","Syntax:"],[" ","Returns"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1730"})