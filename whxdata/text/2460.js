rh._.exports({"0":[[" ","General Layer Functions"]],"1":[["layer functions"]],"2":[[" ","General Layer Functions"]],"3":[[" ","The ","GameMaker"," ","Room Editor"," permits you to add ","layers"," of different assets to your room. These can be tile maps (using tile sets), backgrounds, sprites or sequences, particle systems and instances, but note that unlike the room editor, you are ","not"," limited to a single asset type per layer, and can add multiple asset types to the same layer - for example you can have a background and a tile map all on the same layer."," ","NOTE"," Each asset that is added to a layer is considered an ","element"," of that layer."," ","This section outlines the general functions used when working with room layers, as well as a few functions specific to working with ","instance layer"," ","elements:"," ","layer_exists"," ","layer_get_id"," ","layer_get_depth"," ","layer_get_id_at_depth"," ","layer_get_name"," ","layer_get_all"," ","layer_get_all_elements"," ","layer_get_element_layer"," ","layer_get_element_type"," ","layer_get_x"," ","layer_get_y"," ","layer_get_hspeed"," ","layer_get_vspeed"," ","layer_create"," ","layer_destroy"," ","layer_x"," ","layer_y"," ","layer_hspeed"," ","layer_vspeed"," ","layer_add_instance"," ","layer_has_instance"," ","layer_instance_get_instance"," ","layer_destroy_instances"," ","layer_element_move"," ","layer_set_visible"," ","layer_get_visible"," ","layer_depth"," ","layer_force_draw_depth"," ","layer_is_draw_depth_forced"," ","layer_get_forced_depth"," ","layer_script_begin"," ","layer_script_end"," ","layer_shader"," ","layer_get_script_begin"," ","layer_get_script_end"," ","layer_get_shader"," ","We also have a couple of extra functions relating to targeting layers in a different room. It may be that you want to change something in a room that is not the current room, or maybe you want to generate rooms procedurally, or any number of things. To enable this we use the following functions:"," ","layer_set_target_room"," ","layer_get_target_room"," ","layer_reset_target_room"," ","What you do here is set the target room using the appropriate function and then call the layer functions are normal. These layer functions will now apply ","only"," to the target room and not the current one. When you are finished you'd call the reset function to return the code scope back to the current room again."," ","WARNING"," While targeting another room, you can use all the regular layer functions ","except"," you cannot create instances using ","instance_create_layer()"," or ","instance_create_depth()",", nor will the layer function ","layer_add_instance()"," be available."," ","Finally, and this is exclusively for use with ","instances"," on layers (although the layer itself can have other elements, they will not be affected by the following functions), you have a couple of functions that can be used to deactivate or reactivate all instances:"," ","instance_deactivate_layer"," ","instance_activate_layer"," ","Back: ","Rooms"," ","Next: ","Tile Map Layers"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2460"})