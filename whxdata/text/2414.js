rh._.exports({"0":[[" ","time_source_reconfigure"]],"1":[["time_source_reconfigure"]],"2":[["time_source_reconfigure"]],"3":[[" ","time_source_reconfigure"]],"4":[[" ","This function is used to modify the core properties of a ","Time Source",", without having to create an entirely new one."," ","You specify an existing ","Time Source",", and then set the properties that are also set in ","time_source_create()",", except the parent. Read that page for detailed information on these properties."," ","The specified ","Time Source"," will be reset and deactivated, and will need to be ","started"," again."],[" ","time_source_reconfigure(id, period, units, callback, [args, repetitions, expiry_type]);"," ","Argument"," ","Type"," ","Description"," ","id"," ","Time Source ID"," ","The ","Time Source"," to reconfigure"," ","period"," ","Real"," ","The period that the ","Time Source"," runs for, in the given units"," ","units"," ","Time Source Unit Constant"," ","The units that the given period is in"," ","callback"," ","Method"," ","The method to call when the ","Time Source"," expires"," ","args"," ","Array"," ","OPTIONAL"," An array containing the arguments to pass into the method"," ","repetitions"," ","Real"," ","OPTIONAL"," The number of times the ","Time Source"," should repeat, or -1 for indefinite repetition"," ","expiry_type"," ","Time Source Expiry Constant"," ","OPTIONAL"," Whether the ","Time Source"," expires on the frame nearest to its expiry, or on the next frame"],[" ","N/A"],[" ","function change_spawn_delay(new_delay)","\n    {","\n        time_source_reconfigure(obj_game.spawn_time_source, new_delay, time_source_units_frames, obj_game.spawn_method, [], -1);","\n        time_source_start(obj_game.spawn_time_source);","\n    }"," ","This creates a new function that changes the spawn delay used for in-game enemies."," ","Assuming the game uses a ","Time Source"," called ","obj_game.spawn_time_source"," to spawn enemies, that ","Time Source"," will need to be updated once the spawn delay changes."," ","This function does exactly that, reconfiguring the ","Time Source"," with the new delay and then ","starting it"," again."," ","Back: ","Time Sources"," ","Next: ","time_source_reset"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2414"})