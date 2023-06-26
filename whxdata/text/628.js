rh._.exports({"0":[[" ","image_yscale"]],"1":[["image_yscale"]],"2":[[" ","image_yscale"]],"3":[[" ","This value sets the vertical scaling (along the y-axis) applied to the sprite that has been assigned to the current instance. A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the height of the sprite), larger values will scale up and negative values will mirror the sprite ","and"," scale it unless the value used is exactly -1 (in which case the sprite is just mirrored along the y-axis with no scaling)."],[" ","image_yscale;"],[" ","Real"," (single precision floating point value)"],[" ","if image_xscale < 5","\n    {","\n        image_xscale += 0.2;","\n        image_yscale = image_xscale;","\n    }","\n    else","\n    {","\n        instance_create_layer(x, y, \"Effects\", obj_Explosion);","\n        instance_destroy();","\n    }"," ","The above code scales the sprite and then once it is scaled to 5 times its original size, a new instance of another object is created and the instance destroyed."," ","Back: ","Sprite Instance Variables"," ","Next: ","mask_index"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["image_yscale"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"628"})