rh._.exports({"0":[[" ","tilemap_clear"]],"1":[["tilemap_clear"]],"2":[[" ","tilemap_clear"]],"3":[[" ","Using this function you can clear/set all the tiles on a given tile-map. You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","), and then supply the tile data that you wish to clear the layer with. A default value of 0 will clear all the tiles from the layer (essentially making all tiles \"empty\"), while you can use the dedicated ","tile_*"," functions to create your own tile data to clear the tile map with."],[" ","tilemap_clear(tilemap_element_id, tiledata)"," ","Argument"," ","Type"," ","Description"," ","tilemap_element_id"," ","Tile Map Element ID"," ","The unique ID value of the tile map element to change"," ","tiledata"," ","Tile Data"," ","The tile data to use to clear the layer"],[" ","N/A"],[" ","var layer_id = layer_get_id(\"Forest\");","\n    var tile_id = layer_tilemap_get_id(layer_id);","\n    tilemap_clear(tile_id, 0);"," ","The above code gets the ID value of a tile map created in the room editor, and then clears it using \"empty\" tiles."," ","Back: ","Tile Map Layers"," ","Next: ","tilemap_x"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["tilemap_clear"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1156"})