rh._.exports({"0":[[" ","image_index"]],"1":[["image_index"]],"2":[["image_index"]],"3":[[" ","image_index"]],"4":[[" ","A sprite is made up of one or more ","sub-images"," which can make the sprite appear animated as they switch from one to the other, or can they can be switched between in code to give different \"states\", much like a button has in windows. If the sprite is animated, then you can get the current frame of the animation by checking the ","image_index"," variable, or if you want to change the state of a static sprite, you can select a new sub-image by setting this variable to the desired sub-image of the sprite."],[" ","For changes in this variable to be visible, the instance should have either ","no"," draw event (and so ","GameMaker"," will default draw the sprite) or be drawn using one of the drawing functions like ","draw_self()"," or ","draw_sprite_ext()"," (by supplying the image_index into the appropriate argument)."," ","Setting this variable directly to a frame will ","not"," trigger any Broadcast Messages that may be present on that frame."," ","While using skeletal animation sprites, you can still get and set the ","image_index"," values - see the function ","skeleton_animation_get_duration()"," for examples of how to do this."," ","A stretched frame will be returned as a fraction of one number. For example, if in the ","Sprite Editor"," you stretch ","frame 1"," to last 4 frames, instead of those 4 frames returning the values 1, 2, 3, 4, they will instead return 1.0, 1.25, 1.5, and 1.75.\n      "," ","This means that if you add 1 to ","image_index",", it will skip frames the same way regardless of their stretched length."],[" ","image_index;"],[" ","Real"," (single precision floating point value)"],[" ","if (image_speed > 0)","\n    {","\n        if (image_index >= image_number - 1) instance_destroy();","\n    }"," ","The above code checks to see if the sprite is animating, and if it is then it checks to see if the current image_index is at the last frame and in that case destroys the instance."," ","Back: ","Sprite Instance Variables"," ","Next: ","image_number"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"7":[[" ","Usage Notes"]],"id":"1922"})