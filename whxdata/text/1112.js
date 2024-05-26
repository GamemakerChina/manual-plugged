rh._.exports({"0":[[" ","xboxlive_stats_setup"]],"1":[["xboxlive_stats_setup"]],"2":[["xboxlive_stats_setup"]],"3":[[" ","xboxlive_stats_setup"]],"4":[[" ","This function needs to be called before you can use any of the other Xbox Live stat functions, and simply initialises the required libraries on the system. The \"user_id\" argument is the raw user ID as returned by the function ","xboxlive_get_user()",", while the \"service_config\" and \"title_id\" is the unique ID for your game on the Xbox Live Dev Center."," ","This function is only for use with Event-Based (2013) stats."],[" ","xboxlive_stats_setup(user_id, service_config_id, title_id);"," ","Argument"," ","Type"," ","Description"," ","user_id"," ","Xbox User ID"," ","The ID pointer of the user to check."," ","service_config_id"," ","String"," ","This is the config_id string for the game."," ","title_id"," ","String"," ","The unique ID for your game on the Xbox Dev Center."],[" ","N/A"],[" ","var user = xboxlive_get_user(0);","\n    xboxlive_stats_setup(user, \"4d61a1aa-61ac-4541-badd-31f91244fea6\", $1244FEA6);"," ","The above code initialises the stats system for the given user ID."," ","Back: ","Stats And Leaderboards"," ","Next: ","xboxlive_stats_add_user"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1112"})