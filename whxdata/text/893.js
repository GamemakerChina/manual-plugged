rh._.exports({"0":[[" ","tilemap_y"]],"1":[["tilemap_y"]],"2":[[" ","tilemap_y"]],"3":[[" ","This function controls the position along the y-axis of the room of the asset tile map element on the layer. You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","), and then set the y value to use (based on the room coordinates)."],[" ","tilemap_y(tilemap_element_id, y);"," ","Argument"," ","Type"," ","Description"," ","tilemap_element_id"," ","Tile Map Element ID"," ","The unique ID value of the tile map element to change"," ","y"," ","Real"," ","The y position for the tile map"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Asset_sky\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    tilemap_y(map_id, irandom(room_height));"," ","The above code gets the ID value of the tile map asset assigned to the layer \"Asset_sky\" and then sets its y position to a random value between 0 and the height of the room."," ","Back: ","Tile Map Layers"," ","Next: ","tilemap_set"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["tilemap_y"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"893"})