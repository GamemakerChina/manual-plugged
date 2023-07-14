rh._.exports({"0":[[" ","asset_clear_tags"]],"1":[["asset_clear_tags,asset_object,asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence"]],"2":[[" ","asset_clear_tags"]],"3":[[" ","With this function you can clear all the tags present on any asset from the asset browser. You supply either the asset name (as a string) or its asset index, and if you supply an asset index value, then you will need to supply the optional asset type argument (a constant), as assets of different types can have the same index, even though they cannot have the same name. The available asset types are listed in the table below:"," ","Asset Type Constant"," ","Constant"," ","Description"," ","asset_object"," ","The given name refers to an ","object","."," ","asset_sprite"," ","The given name refers to a ","sprite","."," ","asset_sound"," ","The given name refers to a ","sound","."," ","asset_room"," ","The given name refers to a ","room","."," ","asset_tiles"," ","The given name refers to a ","tile set","."," ","asset_path"," ","The given name refers to a ","path","."," ","asset_script"," ","The given name refers to a ","script","."," ","asset_font"," ","The given name refers to a ","font","."," ","asset_timeline"," ","The given name refers to a ","time line","."," ","asset_shader"," ","The given name refers to a ","shader","."," ","asset_animationcurve"," ","The given name refers to an ","Animation Curve","."," ","asset_sequence"," ","The given name refers to a ","Sequence","."," ","asset_particlesystem"," ","The given name refers to a ","Particle System","."," ","asset_unknown"," ","The given name refers to an asset that either does not exist, or is not one of the above listed."," ","If the function succeeds in clearing the tags it will return ","true"," otherwise it will return ","false","."],[" ","asset_clear_tags","(name,[asset_type]);"," ","Argument"," ","Type"," ","Description"," ","name_or_index"," ","String"," or ","Asset"," ","The name of the asset (a string) or its index value (an integer)."," ","[asset_type]"," ","Asset Type Constant"," ","OPTIONAL! The type of asset to clear the tags from, only used when supplying an index for the first argument."],[" ","Boolean"],[" ","asset_clear_tags","(obj_Enemy_Parent, asset_object);"," ","The above code will clear all tags from the given object asset."," ","Back: ","Assets And Tags"," ","Next: ","asset_get_index"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["asset_clear_tags,asset_object,asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1912"})