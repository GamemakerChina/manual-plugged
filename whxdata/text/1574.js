rh._.exports({"0":[[" ","ds_map_add_map"]],"1":[["ds_map_add_map"]],"2":[["ds_map_add_map"]],"3":[[" ","ds_map_add_map"]],"4":[[" ","With this function you can assign a (previously created) DS map to a key within the given DS map . This function is designed for creating JSON compatible maps which you would then encode using ","json_encode()"," and should only be used in conjunction with that functionality. If a DS map has another map added in this way, then destroying the parent map will also destroy the contained maps and free their memory, and calling ","ds_map_clear()"," on the parent map will also destroy and clean up any flagged maps."],[" ","ds_map_add_map(id, key, value)"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS Map ID"," ","The id of the map to use."," ","key"," ","String"," ","The key for the added map."," ","value"," ","DS Map ID"," ","The id of the map to add."],[" ","N/A"],[" ","var j_map = ds_map_create();","\n    var j_list = ds_list_create();","\n    var sub_map = ds_map_create();","\n    ds_map_add_list(sub_map, \"list\", j_list);","\n    ds_map_add(sub_map, \"array\", j_array);","\n    ds_map_add_map(j_map, \"map\", sub_map);","\n    var j = json_encode(j_map);","\n    ds_map_destroy(j_map);"," ","The above code will create two DS maps, and then populate one with a list and an array before adding it into the second, which is then encoded into a JSON string. The map is then destroyed to remove it, and any other maps or lists that it contains, from memory."," ","Back: ","DS Maps"," ","Next: ","ds_map_replace_list"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1574"})