rh._.exports({"0":[[" ","layer_sprite_y"]],"1":[["layer_sprite_y"]],"2":[[" ","layer_sprite_y"]],"3":[[" ","This function controls the position along the y-axis of the room of the asset sprite element on the layer. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()","    or when you use the function ","layer_sprite_get_id()","), and then set the y value to use (based on the room coordinates)."],[" ","layer_sprite_y(sprite_element_id, y);"," ","Argument","Type"," ","Description"," ","sprite_element_id","Sprite Element ID"," ","The unique ID value of the sprite element to change"," ","y","Real"," ","The y position for the sprite"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Asset_sky\");"," var spr_id = layer_sprite_get_id(lay_id, \"Clouds\");"," layer_sprite_y(spr_id, 50 + irandom(room_height - 200));"," ","The above code gets the ID value of the sprite asset \"Clouds\" assigned to the layer \"Asset_sky\" and then sets its y position to a random value between 50 and the height of the room minus 200."," ","Back: ","Sprite Layers"," ","Next: ","layer_sprite_get_sprite"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_sprite_y"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"889"})