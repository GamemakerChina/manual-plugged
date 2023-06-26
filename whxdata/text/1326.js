rh._.exports({"0":[[" ","tilemap_get_tileset"]],"1":[["tilemap_get_tileset"]],"2":[[" ","tilemap_get_tileset"]],"3":[[" ","Using this function you can retrieve the index value of the Tile Set asset assigned to a given tile map element on a layer. You give the Tile Map element ID (which you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","), and the function will return the Tile Set asset index."],[" ","tilemap_get_tileset(tilemap_element_id);"," ","Argument"," ","Type"," ","Description"," ","tilemap_element_id"," ","Tile Map Element ID"," ","The unique ID value of the Tile Map element to get the tile set from"],[" ","Tile Set Asset"],[" ","var lay_id = layer_get_id(\"Tiles_trees\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    if tilemap_get_tileset(map_id) != ts_Nighttime","\n    {","\n        tilemap_tileset(map_id, ts_Nighttime);","\n    }"," ","The above code checks the current tile set assigned to the layer \"Tiles_trees\" and if it is not \"ts_Nighttime\" then that tile set is assigned to the tile map."," ","Back: ","Tile Map Layers"," ","Next: ","tilemap_get_frame"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["tilemap_get_tileset"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1326"})