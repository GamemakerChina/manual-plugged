rh._.exports({"0":[[" ","timeline_delete"]],"1":[["timeline_delete"]],"2":[[" ","timeline_delete"]],"3":[[" ","With this function you can delete any time line from your game. if this time line was created in the ","GameMaker"," Asset Browser, please note that it is removed completely from the game and trying to call the indexed time line again after using this function will cause an error. If the time line was created dynamically using the ","timeline_add()"," function, then this function should be used the moment that the time line is no longer needed to prevent any memory leaks that could slow down (and eventually crash) your game."],[" ","timeline_delete(ind);"," ","Argument","Type"," ","Description"," ","ind","Timeline Asset"," ","The index of the time line to delete."],[" ","N/A"],[" ","if timeline_exists(global.tl)","\n    {","\n        timeline_delete(global.tl);","\n    }"," ","The above code checks to see if a time line exists and is indexed in the global variable \"tl\" and if so it then deletes that time line."," ","Back: ","Timelines"," ","Next: ","timeline_moment_add_script"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["timeline_delete"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"704"})