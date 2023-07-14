rh._.exports({"0":[[" ","time_source_exists"]],"1":[["time_source_exists"]],"2":[[" ","time_source_exists"]],"3":[[" ","This function returns whether the given ID is a valid ","Time Source","."," ","If the ","Time Source"," was ","destroyed",", this will return ","false",", however if the ","Time Source"," was ","stopped"," or it merely expired, it will continue to exist, meaning this function returns ","true","."],[" ","time_source_exists(id);"," ","Argument"," ","Type"," ","Description"," ","id"," ","Time Source ID"," ","The ","Time Source"," to check"],[" ","Boolean"],[" ","if (time_source_exists(global.spawn_time_source))","\n    {","\n        if (keyboard_check_pressed(vk_space))","\n        {","\n            time_source_destroy(global.spawn_time_source);","\n        }","\n    }"," ","This code checks if a ","Time Source"," exists. If it does, it checks if the Space key was pressed."," ","In that case, it destroys the ","Time Source","."," ","Back: ","Time Sources"," ","Next: ","time_source_get_children"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["time_source_exists"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1528"})