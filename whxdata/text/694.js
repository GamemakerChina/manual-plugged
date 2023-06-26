rh._.exports({"0":[[" ","show_error"]],"1":[["show_error"]],"2":[[" ","show_error"]],"3":[[" ","This function will show a custom string as an error message."," ","IMPORTANT"," The second argument only exists for backwards compatibility with older projects and will have no effect on the error dialog shown."," ","NOTE"," This function is for debug use ","only","."],[" ","show_error(str, abort);"," ","Argument"," ","Type"," ","Description"," ","str"," ","String"," ","The string to show in the pop-up message."," ","abort"," ","Boolean"," ","UNUSED"," Whether the error should abort the game (true) or allow the player to ignore it (false)."],[" ","N/A"],[" ","if (room != rm_Dungeon)","\n    {","\n        show_error(\"Error: Went to wrong area. Aborting game.\", true);","\n    }"," ","The above code will check if the current room is ","rm_Dungeon",", and if it's not, it will show an error message."," ","Back: ","Debugging"," ","Next: ","show_message"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["show_error"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"694"})