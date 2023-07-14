rh._.exports({"0":[[" ","skeleton_attachment_replace_colour"]],"1":[["skeleton_attachment_replace_colour"]],"2":[[" ","skeleton_attachment_replace_colour"]],"3":[[" ","This function replaces an existing custom attachment on the current instance's skeletal animation sprite with another one. It also sets the blend colour to use when drawing this attachment."," ","The change to the attachment will be visible in all ","Slots"," that have the attachment assigned."],[" ","skeleton_attachment_replace_colour","(name, sprite, ind, xorigin, yorigin, xscale, yscale, rot, colour, alpha);"," ","Argument"," ","Type"," ","Description"," ","name"," ","String"," ","The name of the attachment to replace"," ","sprite"," ","Sprite Asset"," ","The index of the sprite asset to use for the attachment"," ","ind"," ","Real"," ","The image_index of the sprite to use"," ","xorigin"," ","Real"," ","The x origin to use for the image. The sprite's origin is ignored."," ","yorigin"," ","Real"," ","The y origin to use for the image. The sprite's origin is ignored."," ","xscale"," ","Real"," ","The horizontal scale factor of the image"," ","yscale"," ","Real"," ","The vertical scale factor of the image"," ","rot"," ","Real"," ","The rotation of the image. This is ","added"," to the bone's rotation."," ","colour"," ","Colour"," ","The blend colour to use when drawing the sprite"," ","alpha"," ","Real"," ","The alpha value to use when drawing the sprite"],[" ","Real"," (1 if successful, -1 if not)"],[" ","if skeleton_attachment_exists(\"fruit_attachment\")","\n    {"," ","skeleton_attachment_replace_colour","(\"fruit_attachment\", spr_apple, 0, 0, 0, 1, 1, 0, c_lime, 1);","\n    }"," ","The above code first checks if an attachment with the name \"fruit_attachment\" exists on the skeleton. If it does, it replaces the attachment image with a sprite \"spr_apple\", with no change in offset, rotation or scale and a  colour of ","c_lime"," and alpha value of 1."," ","Back: ","Attachments"," ","Next: ","skeleton_attachment_destroy"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["skeleton_attachment_replace_colour"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2413"})