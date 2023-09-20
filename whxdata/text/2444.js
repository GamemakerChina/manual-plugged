rh._.exports({"0":[[" ","draw_sprite_part_ext"]],"1":[["draw_sprite_part_ext"]],"2":[[" ","draw_sprite_part_ext"]],"3":[[" ","This function will draw a part of the chosen sprite at the given position following the same rules as per ","draw_sprite_part()",", only now you can scale the part, blend a colour with it, or change its alpha when\n    drawing it to the screen (the same as when drawing a sprite with ","draw_sprite_ext()","). You should note that if the texture page permits automatic cropping then this function may not work as expected, since\n    the extra \"empty\" space around the sprite will have been removed for creating the texture page. To resolve this issue, you will need to set the texture page settings (in the ","Texture Group Editor",")\n    to disable the ","Automatic Crop","."," ","NOTE"," ","When drawing with this function, the sprite ","x offset"," and ","y offset","    are ignored and the sprite part will be drawn with the top left corner at the specified x / y position in the room."," ","NOTE",": This function is only useful for ","bitmap"," sprites and will not work with SWF or JSON (Spine) sprites."," ","NOTE",": Colour blending is only recommended for the HTML5 target when WebGL is enabled, although you can still set the blending colour if it is not enabled and it will blend the sprite as normal. However all blending in this way creates a duplicate\n    sprite which is then stored in the cache and used when required. This is far from optimal and if you use multiple colour changes it will slow down your games performance unless you activate WebGL. if you do not wish to use WebGL, then you can set\n    the font cache size to try and limit this should it be necessary using the function ","sprite_set_cache_size()","."],[" ","draw_sprite_part_ext(sprite, subimg, left, top, width, height, x, y, xscale, yscale, colour, alpha);"," ","Argument","Type"," ","Description"," ","sprite","Sprite Asset"," ","The index of the sprite to draw."," ","subimg","Real"," ","The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object)."," ","left","Real"," ","The x position on the sprite of the top left corner of the area to draw."," ","top","Real"," ","The y position on the sprite of the top left corner of the area to draw."," ","width","Real"," ","The width of the area to draw."," ","height","Real"," ","The height of the area to draw."," ","x","Real"," ","The x coordinate of where to draw the sprite."," ","y","Real"," ","The y coordinate of where to draw the sprite."," ","xscale","Real"," ","The horizontal scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc..."," ","yscale","Real"," ","The vertical scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc..."," ","colour","Colour"," ","The colour with which to blend the sprite. c_white is to display it normally."," ","alpha","Real"," ","The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque)."],[" ","N/A"],[" ","draw_sprite_part_ext(sprite_index, image_index, 8, 8, sprite_width-16, sprite_height-16, x, y, 2, 0.5, c_black, 1);"," ","This will draw the instances assigned sprite (sprite_index) and its current frame of animation (image_index), however it will shave an 8px margin off all four sides of the sprite. It will then be stretched to double its usual width but half its usual\n    height, and although the alpha is still 1, it will be blended with black (turning it into a silhouette)."," ","Back: ","Sprites And Tiles"," ","Next: ","draw_sprite_streteched"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["draw_sprite_part_ext"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2444"})