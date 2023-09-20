rh._.exports({"0":[[" ","tile_get_rotate"]],"1":[["tile_get_rotate"]],"2":[[" ","tile_get_rotate"]],"3":[[" ","This function can be used to check whether in a given set of tile-data the tile has been rotated 90 degrees or not. You give the tile-data, which can be retrieved using the function ","tilemap_get()",", and the function will return ","true"," if the tile is rotated, or ","false"," if not."],[" ","tile_get_rotate(tiledata)"," ","Argument"," ","Type"," ","Description"," ","tiledata"," ","Tile Data"," ","the tile-data to check"],[" ","Boolean"],[" ","var lay_id = layer_get_id(\"Tiles_sky\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    var mx = tilemap_get_cell_x_at_pixel(map_id, mouse_x, mouse_y);","\n    var my = tilemap_get_cell_y_at_pixel(map_id, mouse_x, mouse_y);","\n    var data = tilemap_get(map_id, mx, my);","\n    var bool = !tile_get_rotate(data);","\n    data = tile_set_rotate(data, bool);","\n    tilemap_set(map_id, data, mx, my);"," ","The above code gets the tile map ID from the given layer and then gets the x and y cell position for the tile under the mouse. This position is then used to get the tile-data which is rotated and then used to set the tile again."," ","Back: ","Tile Map Layers"," ","Next: ","tile_set_empty"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["tile_get_rotate"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1040"})