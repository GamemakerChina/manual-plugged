rh._.exports({"0":[[" ","sprite_set_bbox_mode"]],"1":[["sprite_set_bbox_mode"]],"2":[["sprite_set_bbox_mode,bboxmode_automatic,bboxmode_fullimage,bboxmode_manual"]],"3":[[" ","sprite_set_bbox_mode"]],"4":[[" ","This function can be used to set the bounding box mode for a sprite. You supply the sprite index and the mode to use, which should be one of the following constants:"," ","Bounding Box Mode Constant"," ","Constant"," ","Description"," ","bboxmode_automatic"," ","Automatic ","- The bounding box will be calculated automatically, based on the tolerance setting for the sprite"," ","bboxmode_fullimage"," ","Full Image"," - The bounding box will be set to use the full width and height of the sprite, regardless of the tolerance and \"empty\" pixels"," ","bboxmode_manual"," ","Manual"," - The bounding box is being set manually to user defined values, which requires the use of the function ","sprite_set_bbox()"," ","NOTE"," This function affects the sprite ","asset ","so that all further instances with this sprite will have the same bounding box mode."],[" ","sprite_set_bbox_mode(ind, mode);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Sprite Asset"," ","The index of the sprite to change the mode of."," ","mode"," ","Bounding Box Mode Constant"," ","The mode to set (a constant)."],[" ","N/A"],[" ","if sprite_get_bbox_mode(sprite_index) != bboxmode_automatic","\n    {","\n        sprite_set_bbox_mode(sprite_index, bboxmode_automatic);","\n    }"," ","The above code checks the bbox mode for the current sprite and if it's not ","automatic",", then it is set to that value."," ","Back: ","Sprite Manipulation"," ","Next: ","sprite_set_bbox"]],"5":[[" ","Syntax:"],[" ","Returns"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2109"})