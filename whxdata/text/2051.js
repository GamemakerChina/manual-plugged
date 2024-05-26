rh._.exports({"0":[[" ","ds_map_add"]],"1":[["ds_map_add"]],"2":[["ds_map_add"]],"3":[[" ","ds_map_add"]],"4":[[" ","This function should be used to add sets of key/value pairs into the specified DS map. You can check this function to see if it was successful or not (it will return ","true"," on success or ","false"," otherwise), as it may fail if there already exists the same key in the DS map or you specify a non-existent DS map as the ID of the map to add to. The keys and and values you supply can be made up of any combination of data types, so all of the following - and more - are acceptable (although, in practice, you would most commonly use a string for the key):"," ","ds_map_add(map, 5, undefined);","\n    ds_map_add(map, \"level\", 1);","\n    ds_map_add(map, 89.6, \"hello world\");","\n    ds_map_add(map, 5, buffer_get_address(buff));"," ","You can also add to a map using the ","accessor"," \"","?","\", as shown below:"," ","map[? 5] = undefined;","\n    map[? \"level\"] = 1;","\n    map[? 89.6] = \"hello world\";","\n    map[? 5] = buffer_get_address(buff);"," ","NOTE"," Unlike other data structures in ","GameMaker"," this key will not go to the start (nor the end) of the DS map, but rather it will just go into the DS map ","somewhere","."],[" ","ds_map_add(id, key, val);"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS Map"," ","The id of the map to add to."," ","key"," ","String"," ","The key of the value to add."," ","val"," ","Any"," ","The value to add to the map."],[" ","Boolean"],[" ","inventory = ds_map_create();","\n    ds_map_add(inventory, \"hp potion\", 1);","\n    ds_map_add(inventory, \"gold\", 100);"," ","This will create a new map, assigning its id to the variable \"inventory\". It then adds two new keys to the map, \"hp potion\" and \"gold\", and sets their initial values as 1 and 100."," ","Back: ","DS Maps"," ","Next: ","ds_map_clear"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2051"})