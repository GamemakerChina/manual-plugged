rh._.exports({"0":[[" ","sprite_set_speed"]],"1":[["sprite_set_speed,spritespeed_framespergameframe,spritespeed_framespersecond"]],"2":[[" ","sprite_set_speed"]],"3":[[" ","This function can be used to set the base animation speed and type as for the sprite resource. This is normally set in the ","Sprite Editor",", but there may be moments when you are required to set this manually for a given sprite resource. You need to supply the sprite index to set, the animation speed and the type of animation speed to apply. The animation speed type can be any one of the following constants:"," ","Constant"," ","Description"," ","spritespeed_framespersecond"," ","The sprite was defined with animation in ","frames per second","."," ","spritespeed_framespergameframe"," ","The sprite was defined with in animation in ","frames per game frame","."," ","Selecting the type of speed to use to calculate animations is very important as there is a huge difference between the two options. The following two examples illustrate this difference:"," ","If you have a sprite that draws 1 frame per ","second"," and set the image speed to 0.5 it will draw at 0.5 frames per second. If your game frame rate is 60 frames per second then the sprite will draw 1 frame for every 120 game frames."," ","If you have a sprite that draws 1 frame per ","game frame"," and set the image speed to 0.5 it will draw 0.5 frames per game frame. If your game frame rate is 60 frames per second then the sprite will draw 30 frames for every 60 game frames."," ","You can find out what the speed value used for the sprite animation was using the function ","sprite_get_speed()",", and you can get the animation speed type using ","sprite_get_speed_type()","."," ","IMPORTANT!"," This function will affect the sprite ","resource"," so any changes you make with this function will affect ","all"," instances that are using the sprite and all future instances too."],[" ","sprite_set_speed(index, speed, type)"," ","Argument"," ","Type"," ","Description"," ","index"," ","Sprite Asset"," ","The index of the sprite to set the animation speed of"," ","speed"," ","Real"," ","The speed value to set"," ","type"," ","Sprite Speed Constant"," ","The speed type to use"],[" ","Constant"," (see above)"],[" ","sprite_set_speed(sprite_index, 10, spritespeed_framespersecond);"," ","The above code sets the base animation speed for the sprite assigned to the instance to 10 frames per second."," ","Back: ","Sprite Manipulation"," ","Next: ","sprite_delete"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["sprite_set_speed"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2290"})