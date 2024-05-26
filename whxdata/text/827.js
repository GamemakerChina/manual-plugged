rh._.exports({"0":[[" ","layer_sprite_x"]],"1":[["layer_sprite_x"]],"2":[["layer_sprite_x"]],"3":[[" ","layer_sprite_x"]],"4":[[" ","This function controls the position along the x-axis of the room of the asset sprite element on the layer. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()","    or when you use the function ","layer_sprite_get_id()","), and then set the x value to use (based on the room coordinates)."],[" ","layer_sprite_x(sprite_element_id, x);"," ","Argument","Type"," ","Description"," ","sprite_element_id","Sprite Element ID"," ","The unique ID value of the sprite element to change"," ","x","Real"," ","The x position for the sprite"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Asset_sky\");"," var spr_id = layer_sprite_get_id(lay_id, \"Clouds\");"," layer_sprite_x(spr_id, irandom(room_width));"," ","The above code gets the ID value of the sprite asset \"Clouds\" assigned to the layer \"Asset_sky\" and then sets its x position to a random value between 0 and the width of the room."," ","Back: ","Sprite Layers"," ","Next: ","layer_sprite_y"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"827"})