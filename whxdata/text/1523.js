rh._.exports({"0":[[" ","time_source_pause"]],"1":[["time_source_pause"]],"2":[["time_source_pause"]],"3":[[" ","time_source_pause"]],"4":[[" ","This function pauses the given ","Time Source",". The ","Time Source"," must be active when this function is called."," ","To resume it, call ","time_source_resume()","."],[" ","time_source_pause(id);"," ","Argument"," ","Type"," ","Description"," ","id"," ","Time Source ID"," ","The ","Time Source"," to pause"],[" ","N/A"],[" ","if (keyboard_check_pressed(vk_space))","\n    {","\n        var _state = time_source_get_state(time_source);"," ","\n        if (_state == time_source_state_active)","\n        {","\n            time_source_pause(time_source);","\n        }","\n        else if (_state == time_source_state_paused)","\n        {","\n            time_source_resume(time_source);","\n        }","\n    }\n  "," ","When the Space key is pressed, this code will get a ","Time Source","'s state."," ","When the state is active, it will pause the ","Time Source",", and when it's paused, it will resume it."," ","Back: ","Time Sources"," ","Next: ","time_source_resume"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1523"})