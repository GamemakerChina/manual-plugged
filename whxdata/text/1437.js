rh._.exports({"0":[[" ","tile_set_mirror"]],"1":[["tile_set_mirror"]],"2":[[" ","tile_set_mirror"]],"3":[[" ","This function can be used to set a given set of tile-data to mirror the tile or not. You give the tile-data, which can be retrieved using the function ","tilemap_get()",", and then set the mirror argument to either ","true"," if you want the tile mirrored, or ","false"," if you want the tile to be in its default, un-mirrored state. The function will return a modified tile-data set which can then be applied using the ","tilemap_set()"," function."],[" ","tile_set_mirror(tiledata, mirror)"," ","Argument","Type"," ","Description"," ","tiledata","Tile Data"," ","the tile-data to set"," ","mirror","Boolean"," ","Set to ","true"," to mirror and ","false"," to leave it as-is"],[" ","Tile Data"],[" ","var lay_id = layer_get_id(\"Tiles_sky\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    var mx = tilemap_get_cell_x_at_pixel(map_id, mouse_x, mouse_y);","\n    var my = tilemap_get_cell_y_at_pixel(map_id, mouse_x, mouse_y);","\n    var data = tilemap_get(map_id, mx, my);","\n    var bool = !tile_get_mirror(data);","\n    data = tile_set_mirror(data, bool);","\n    tilemap_set(map_id, data, mx, my);"," ","The above code gets the tile map ID from the given layer and then gets the x and y cell position for the tile under the mouse. This position is then used to get the tile-data which is mirrored and then used to set the tile again."," ","Back: ","Tile Map Layers"," ","Next: ","tile_set_rotate"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["tile_set_mirror"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1437"})