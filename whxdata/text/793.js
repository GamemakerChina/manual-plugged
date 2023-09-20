rh._.exports({"0":[[" ","xboxlive_user_is_remote"]],"1":[["xboxlive_user_is_remote"]],"2":[[" ","xboxlive_user_is_remote"]],"3":[[" ","This function will check the given user ID and return ","true"," if the player is a remote player, or ","false"," otherwise."],[" ","xboxlive_user_is_remote(user_id);"," ","Argument","Type"," ","Description"," ","user_id","Xbox User ID"," ","The ID pointer of the user to check."],[" ","Boolean"],[" ","global.PlayerNum = 0;","\n    global.Player_ID = array_create();","\n    for(var i = 0; i < xboxlive_get_user_count(); ++i;)","\n    {","\n        var _uid = xboxlive_get_user(i);","\n        if xboxlive_user_is_active(_uid)","\n        {","\n            if !xboxlive_user_is_remote(_uid)","\n            {","\n                global.Remote_Player_ID[global.PlayerNum++] = _uid;","\n            }","\n        }","\n    }"," ","The above code loops through the user accounts and then checks to see if any of them are active. If they are, their user ID is added into a global array, only if they are not remote users."," ","Back: ","Users And Accounts"," ","Next: ","xboxlive_user_id_for_user"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["xboxlive_user_is_remote"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"793"})