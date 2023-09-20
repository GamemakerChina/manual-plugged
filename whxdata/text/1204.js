rh._.exports({"0":[[" ","ds_map_is_list"]],"1":[["ds_map_is_list"]],"2":[[" ","ds_map_is_list"]],"3":[[" ","With this function you can check to see if a ","DS list"," is stored in the given map key. If the given key contains a DS list ID, then the function will return ","true"," otherwise it will return ","false","."," ","Note that this will only detect lists that were added using the"," ","ds_map_add_list()"," ","function."],[" ","ds_map_is_list(id, key)"," ","Argument","Type"," ","Description"," ","id","DS Map"," ","The id of the map to use."," ","key","String"," ","The key to check."],[" ","Boolean"],[" ","var size = ds_map_size(inventory);","\n    var key = ds_map_find_first(inventory);","\n    for (var i = 0; i < size; i++)","\n    {","\n        if ds_map_is_list(inventory, key)","\n        {","\n            ds_list_destroy(inventory[? key]);","\n        }","\n        key = ds_map_find_next(inventory);","\n    }","\n    ds_map_destroy(inventory);"," ","The above code loops through a DS map and checks to see if any of the keys within it are for a DS list. If they are, then the DS list is destroyed, and the at the end of the loop the DS map is destroyed too."," ","Back: ","DS Maps"," ","Next: ","ds_map_is_map"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_map_is_list"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1204"})