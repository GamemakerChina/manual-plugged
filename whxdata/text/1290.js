rh._.exports({"0":[[" ","tilemap_get_frame"]],"1":[["tilemap_get_frame"]],"2":[[" ","tilemap_get_frame"]],"3":[[" ","Since tiles can be animated, it can sometimes be useful to know which frame is currently being drawn and react accordingly, so with this function you can retrieve the current frame index for a given tile map. You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","), and the function will return the frame index."],[" ","tilemap_get_frame(tilemap_element_id)"," ","Argument"," ","Type"," ","Description"," ","tilemap_element_id"," ","Tile Map Element ID"," ","The unique ID value of the tile map element to get the frame index of"],[" ","Real"," (between 0 (inclusive) and the maximum number of frames of animation (exclusive))"],[" ","var lay_id = layer_get_id(\"Tiles_Traps\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    if tilemap_get_frame(map_id) >= 2 && tilemap_get_frame(map_id) < 4","\n    {","\n        global.activate = true;","\n    }","\n    else","\n    {","\n        global.activate = false;","\n    }"," ","The above code checks the current animation frame for the given tile map on the given layer, and sets a global variable based on the return value."," ","Back: ","Tile Map Layers"," ","Next: ","tilemap_get_tile_width"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["tilemap_get_frame"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1290"})