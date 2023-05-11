rh._.exports({"0":[[" ","game_set_speed"]],"1":[["game_set_speed,gamespeed_fps,gamespeed_microseconds"]],"2":[["game_set_speed,gamespeed_fps,gamespeed_microseconds"]],"3":[[" ","game_set_speed"]],"4":[[" ","This function can be used to set the game speed. You can set this in one of two ways - as either game frames per second (FPS) or as microseconds per game frame (MPF) - using one of the following two constants:"," ","Constant"," ","Description"," ","gamespeed_fps"," ","Sets the game speed using frames per second."," ","gamespeed_microseconds"," ","Sets the game speed using microseconds per frame."," ","So, for example, a game speed of 30 frames per second would be 33333 microseconds per game game frame, which would then be expressed by this function as either:"," ","game_set_speed(30, gamespeed_fps);"," ","or:"," ","game_set_speed(33333, gamespeed_microseconds);"],[" ","game_set_speed(speed, type);"," ","Argument"," ","Type"," ","Description"," ","speed"," ","Real"," ","The new game speed (as either FPS or MPF)."," ","type"," ","Game Speed Constant"," ","The type of method used to set the game speed (see the constants above)."],[" ","N/A"],[" ","if os_browser == browser_not_a_browser","\n    {","\n        game_set_speed(60, gamespeed_fps);","\n    }","\n    else","\n    {","\n        game_set_speed(30, gamespeed_fps);","\n    }"," ","The above code checks to see if the game is running in a browser and sets the game speed accordingly as an FPS value."," ","Back: ","General Game Control"," ","Next: ","highscore_add"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1615"})