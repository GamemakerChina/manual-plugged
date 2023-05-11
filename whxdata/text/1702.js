rh._.exports({"0":[[" ","timeline_moment_add_script"]],"1":[["timeline_moment_add_script"]],"2":[["timeline_moment_add_script"]],"3":[[" ","timeline_moment_add_script"]],"4":[[" ","With this function you can dynamically add a ","script function"," to Timelines at any given \"moment\" within that time line, where a \"moment\" is the equivalent of one game tick (or step). In this way you can create a new time line using the ","timeline_add()"," function and add different behaviours at any point, or simply modify a previously created time line resource with new behaviours. Note that the function cannot require any additional arguments when using this function, and if you use it to modify a Timeline asset present in the Asset Browser, then all instances that use this timeline will be affected, and the change will last until the end of the game (calling ","game_restart()"," will not reset the change either)."],[" ","timeline_moment_add_script(ind, step, script);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Timeline Asset"," ","The index of the timeline to add a moment to."," ","step"," ","Real"," ","The moment (step) to add to."," ","script"," ","Script Function"," ","The index of the script function to add into the moment."],[" ","N/A"],[" ","global.tl = timeline_add();","\n    var i = room_speed * 60;","\n    repeat(3)","\n    {","\n        timeline_moment_add_script(global.tl, i, choose(Attack_1, Attack_2, Attack_3);","\n        i += room_speed * 60;","\n    }"," ","The above code will create a new time line and store its index in the variable \"global.tl\". It will then add three scripts to the time line, chosen at random, at one minute intervals."," ","Back: ","Timelines"," ","Next: ","timeline_moment_clear"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1702"})