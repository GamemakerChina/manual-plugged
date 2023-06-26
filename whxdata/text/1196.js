rh._.exports({"0":[[" ","ds_map_find_last"]],"1":[["ds_map_find_last"]],"2":[[" ","ds_map_find_last"]],"3":[[" ","This function returns the last key stored in the DS map. ","This is not the last key in the order that you have added them!"," DS maps are not stored in a linear form, for that use ","DS lists",", so all this does is find the last key as stored by the computer. This can be useful if your have to iterate through the DS map looking for something, but should be avoided if possible as it can be slow."," ","Note that this function will return ","undefined"," if the given DS map is empty."],[" ","ds_map_find_last(id);"," ","Argument","Type"," ","Description"," ","id","DS Map ID"," ","The id of the map to use."],[" ","Any"," or ","undefined"],[" ","var size = ds_map_size(inventory);","\n    var key = ds_map_find_last(inventory);","\n    for (var i = size; i > 0; i--;)","\n    {","\n        if (key != \"gold\")","\n        {","\n            key = ds_map_find_previous(inventory, key);","\n        }","\n        else break;","\n    }"," ","The above code creates some temporary variables and then gets the DS map size and finds the last key as stored by the computer in the map. It then uses a ","for"," loop to iterate back through the DS map looking for the key value \"gold\". If it finds it, it breaks out the loop."," ","Back: ","DS Maps"," ","Next: ","ds_map_find_next"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_map_find_last"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1196"})