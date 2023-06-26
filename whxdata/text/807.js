rh._.exports({"0":[[" ","xboxlive_set_savedata_user"]],"1":[["xboxlive_set_savedata_user"]],"2":[[" ","xboxlive_set_savedata_user"]],"3":[[" ","This function specifies that future file operations which operate in the save game area (i.e. all file writes, and reads from files that aren't in the bundle area) will be associated with the specified user ID pointer. This can be called as often as necessary to redirect save data to the appropriate user, or you can use the constant ","pointer_null"," to save to the generic machine storage area."],[" ","xboxlive_set_savedata_user(user_id);"," ","Argument"," ","Type"," ","Description"," ","user_id"," ","Xbox User ID"," or ","pointer_null"," ","The user ID (a pointer) to set for saving, or ","pointer_null"],[" ","N/A"],[" ","if (xboxlive_get_savedata_user() != user_id[0])","\n    {","\n        xboxlive_set_savedata_user(user_id[0]);","\n    }"," ","The above code checks to see if a user is currently assigned as the save target, and if they are not then they are assigned."," ","Back: ","Saving Data"," ","Next: ","xboxlive_get_savedata_user"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["xboxlive_set_savedata_user"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"807"})