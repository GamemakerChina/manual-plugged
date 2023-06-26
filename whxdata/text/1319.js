rh._.exports({"0":[[" ","xboxlive_get_user"]],"1":[["xboxlive_get_user"]],"2":[[" ","xboxlive_get_user"]],"3":[[" ","With this function you can retrieve the user ID pointer for the indexed user. If the user does not exist, the function will return the constant ","pointer_null"," instead. You can find the number of users currently logged in with the function ","xboxlive_get_user_count()","."," ","IMPORTANT",": This function should only be used with ","xboxlive_get_user_count()"," - do not use this with gamepads. Use ","xboxlive_user_for_pad()"," "," instead."],[" ","xboxlive_get_user(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Real"," ","The index (an integer) to get the User ID from."],[" ","Xbox User ID"," or ","pointer_null"],[" ","for(var i = 0; i < xboxlive_get_user_count(); ++i;)","\n    {","\n        user_id[i] = xboxlive_get_user(i);","\n    }"," ","The above loops through all the signed in users and stores their unique ID pointer in an array."," ","Back: ","Users And Accounts"," ","Next: ","xboxlive_get_activating_user"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["xboxlive_get_user"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1319"})