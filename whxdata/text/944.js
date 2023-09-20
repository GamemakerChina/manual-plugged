rh._.exports({"0":[[" ","ds_list_set"]],"1":[["ds_list_set"]],"2":[[" ","ds_list_set"]],"3":[[" ","This function can be used to set a previously added list entry. You give the list ID (as returned when you created the list) and the position within the list to set as well as the value to set it to. Note that if the entry being set is outside the bounds of the list (ie, you set list entry 20 but the current list only contains 10 entries) then the list will be filled to the given position and each entry will be set to 0. This function is the same as using the ","DS list accessor","."],[" ","ds_list_set(id, pos, val);"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS List"," ","The id of the list to add to."," ","pos"," ","Any"," ","The position within the list to set."," ","[val2, ... max_val]"," ","Any"," ","The value to set in the list."],[" ","N/A"],[" ","for (var i = 0; i < ds_list_size(list); i++;)","\n    {","\n        ds_list_set(list, i, -1);","\n    }"," ","The above code will add the value stored in the \"score\" variable into the list indexed in the variable \"sc_list\"."," ","Back: ","DS Lists"," ","Next: ","ds_list_delete"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_list_set"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"944"})