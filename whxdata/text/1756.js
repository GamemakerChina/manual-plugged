rh._.exports({"0":[[" ","asset_get_type"]],"1":[["asset_get_type,asset_object,asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence,asset_unknown"]],"2":[["asset_get_type,asset_object,asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence,asset_unknown"]],"3":[[" ","asset_get_type"]],"4":[[" ","This function gets the type of asset being referenced from its name or handle."," ","One of the ","constants"," listed below will be returned."],[" ","asset_get_type","(name_or_ref);"," ","Argument"," ","Type"," ","Description"," ","name_or_ref"," ","Asset"," or ","String"," ","The name of or a reference to the game asset to get the type of."],[" ","Asset Type Constant"," ","Asset Type Constant"," ","Constant"," ","Description"," ","asset_object"," ","The given name refers to an ","object","."," ","asset_sprite"," ","The given name refers to a ","sprite","."," ","asset_sound"," ","The given name refers to a ","sound","."," ","asset_room"," ","The given name refers to a ","room","."," ","asset_tiles"," ","The given name refers to a ","tile set","."," ","asset_path"," ","The given name refers to a ","path","."," ","asset_script"," ","The given name refers to a ","script","."," ","asset_font"," ","The given name refers to a ","font","."," ","asset_timeline"," ","The given name refers to a ","time line","."," ","asset_shader"," ","The given name refers to a ","shader","."," ","asset_animationcurve"," ","The given name refers to an ","Animation Curve","."," ","asset_sequence"," ","The given name refers to a ","Sequence","."," ","asset_particlesystem"," ","The given name refers to a ","Particle System","."," ","asset_unknown"," ","The given name refers to an asset that either does not exist, or is not one of the above listed."],[" ","if ","asset_get_type","(\"pth_Path_\" + string(global.Game)) == asset_unknown","\n    {","\n        show_debug_message(\"Path doesn't exist!!!\");","\n    }","\n    else","\n    {","\n        path_index = asset_get_index(\"pth_Path_\" + string(global.Game));","\n    }"," ","The above code checks a dynamically created asset name to see if the asset is of the correct type. If it is not, then a debug message will be shown, otherwise the asset name is used to assign the asset to the instance."," ","Back: ","Assets And Tags"," ","Next: ","tag_get_asset_ids"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1756"})