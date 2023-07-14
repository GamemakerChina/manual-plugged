rh._.exports({"0":[[" ","xboxlive_user_is_guest"]],"1":[["xboxlive_user_is_guest"]],"2":[[" ","xboxlive_user_is_guest"]],"3":[[" ","This function will return ","true"," if the given user ID pointer is a guest user and ","false"," if they are not. You can get a User ID pointer with the function ","xboxlive_get_user()","."],[" ","xboxlive_user_is_guest(user_id);"," ","Argument","Type"," ","Description"," ","user_id","Xbox User ID"," ","The ID pointer of the user to check."],[" ","Boolean"],[" ","if xboxlive_user_is_guest(user_id[0])","\n    {","\n        global.user_name[0] = \"GUEST\";","\n    }","\n    else","\n    {","\n        global.user_name[0] = xboxlive_gamedisplayname_for_user(user_id[0]);","\n    }"," ","The above stores the activating user ID pointer in a global variable."," ","Back: ","Users And Accounts"," ","Next: ","xboxlive_user_is_active"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["xboxlive_user_is_guest"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"515"})