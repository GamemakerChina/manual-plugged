rh._.exports({"0":[[" ","sprite_get_speed_type"]],"1":[["sprite_get_speed_type,spritespeed_framespersecond,spritespeed_framespergameframe"]],"2":[[" ","sprite_get_speed_type"]],"3":[[" ","This function can be used to retrieve the sprite animation type as defined for the sprite resource in the ","Sprite Editor",". The value returned will be one of the following constants:"," ","Sprite Speed Constant"," ","Constant"," ","Description"," ","spritespeed_framespersecond"," ","The sprite was defined with animation in ","frames per second","."," ","spritespeed_framespergameframe"," ","The sprite was defined with in animation in ","frames per game frame","."," ","The following two examples illustrate the difference this can make when calculating animation speeds for the sprite:"," ","If you have a sprite that draws 1 frame per ","second"," and set the image speed to 0.5 it will draw at 0.5 frames per second. If your game frame rate is 60 frames per second then the sprite will draw 1 frame for every 120 game frames."," ","If you have a sprite that draws 1 frame per ","game frame"," and set the image speed to 0.5 it will draw 0.5 frames per game frame. If your game frame rate is 60 frames per second then the sprite will draw 30 frames for every 60 game frames."," ","You can find out what the speed value used for the sprite animation was using the function ","sprite_get_speed()",", and you can set the animation speed ","and"," type using the function ","sprite_set_speed()","."],[" ","sprite_get_speed_type(index)"," ","Argument"," ","Type"," ","Description"," ","index"," ","Sprite Asset"," ","The index of the sprite to get the animation type of"],[" ","Sprite Speed Constant"," (see above)"],[" ","s_speed = sprite_get_speed(sprite_index);","\n    s_type = sprite_get_speed_type(sprite_index);"," ","The above code gets the sprite speed and the sprite animation type and stores them in instance variables for future use."," ","Back: ","Sprite Information"," ","Next: ","sprite_get_width"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["sprite_get_speed_type,spritespeed_framespersecond,spritespeed_framespergameframe"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2169"})