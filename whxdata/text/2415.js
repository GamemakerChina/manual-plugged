rh._.exports({"0":[[" ","skeleton_attachment_replace"]],"1":[["skeleton_attachment_replace"]],"2":[["skeleton_attachment_replace"]],"3":[[" ","skeleton_attachment_replace"]],"4":[[" ","This function replaces an existing custom attachment on the current instance's skeletal animation sprite with another one."," ","The change to the attachment will be visible in all ","Slots"," that have the attachment assigned."],[" ","skeleton_attachment_replace","(name, sprite, ind, xorigin, yorigin, xscale, yscale, rot);"," ","Argument"," ","Type"," ","Description"," ","name"," ","String"," ","The name of the attachment to replace"," ","sprite"," ","Sprite Asset"," ","The index of the sprite asset to use for the attachment"," ","ind"," ","Real"," ","The image_index of the sprite to use"," ","xorigin"," ","Real"," ","The x origin to use for the image. The sprite's origin is ignored."," ","yorigin"," ","Real"," ","The y origin to use for the image. The sprite's origin is ignored."," ","xscale"," ","Real"," ","The horizontal scale factor of the image"," ","yscale"," ","Real"," ","The vertical scale factor of the image"," ","rot"," ","Real"," ","The rotation of the image. This is ","added"," to the bone's rotation."],[" ","Real"," (1 if successful, -1 if not)"],[" ","if (skeleton_attachment_exists(\"weapon_attachment\")) ","\n    {"," ","skeleton_attachment_replace","(\"weapon_attachment\", spr_baseball, 0, 0, 0, 1, 1, 0);","\n    }"," ","The above code first checks if an attachment named \"weapon_attachment\" exists. If it exists, the attachment is replaced with a new one that uses a sprite \"spr_baseball\" and has no change in origin (offset), scale or rotation."," ","Back: ","Attachments"," ","Next: ","skeleton_attachment_replace_colour"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2415"})