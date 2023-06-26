rh._.exports({"0":[[" ","object_set_mask"]],"1":[["object_set_mask"]],"2":[[" ","object_set_mask"]],"3":[[" ","With this function you can set the mask_index of a specific object (for more information on masks see ","The Object Editor","). This means that all instances of this object that are created ","after the mask has been changed"," will be created with this new mask, while instances that are already in the room may not be affected. You can set this to -1 to remove a mask sprite and so default to the mask defined for the sprite of the object (or no masks if no sprite has been chosen)."," ","Please note that this is not an instance function! You can set the mask index of individual instances using the ","mask_index"," variable and so have ten instances all with a different mask to the object they are created from, and even if you change the mask index of the object using this function, all instances that are currently in the room will remain as they were, and only instances created after calling the function will start with the new mask."],[" ","object_set_mask(index, spr);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Object Asset"," ","The index of the object to change."," ","spr"," ","Sprite Asset"," ","The new sprite to use as the object's mask."],[" ","N/A"],[" ","if (global.level == 10)","\n    {","\n        object_set_mask(obj_Platform, spr_mask_10);","\n    }"," ","The above code checks the value of global variable and then changes the mask index of the object \"obj_Platform\" if it is equal to ten."," ","Back: ","Objects"," ","Next: ","object_set_persistent"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["object_set_mask"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1536"})