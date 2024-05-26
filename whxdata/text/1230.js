rh._.exports({"0":[[" ","tilemap_get_height"]],"1":[["tilemap_get_height"]],"2":[["tilemap_get_height"]],"3":[[" ","tilemap_get_height"]],"4":[[" ","Using this function you can retrieve the height (in cells) of the tile map element."," ","You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","), and the function will return the height (number of cells wide)."],[" ","tilemap_get_height","(tilemap_element_id)"," ","Argument"," ","Type"," ","Description"," ","tilemap_element_id"," ","Tile Map Element ID"," ","The unique ID value of the tile map element to get the height of"],[" ","Real"],[" ","var lay_id = layer_get_id(\"espadrilles\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    var _w = tilemap_get_width(map_id);","\n    var _h = tilemap_get_height(map_id);","\n    total_tiles = (_w * _h);"," ","The above code uses the retrieved tile map ID to get the tile width and height of the tile map and then uses those values to set an instance variable."," ","Back: ","Tile Map Elements"," ","Next: ","tilemap_get_x"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1230"})