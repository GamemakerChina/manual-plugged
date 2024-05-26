rh._.exports({"0":[[" ","texturegroup_get_names"]],"1":[["texturegroup_get_names"]],"2":[["texturegroup_get_names"]],"3":[[" ","texturegroup_get_names"]],"4":[[" ","This function returns an array containing the names of all ","Texture Groups"," contained in the game."," ","NOTE"," The texture group that ","GameMaker"," adds the fallback texture to is included. Empty texture groups may not be included as they're filtered by the asset compiler."],[" ","texturegroup_get_names","();"],[" ","Array"," of ","String"],[" ","var _arr_names = ","texturegroup_get_names","();","\n    show_debug_message(\"Texture Groups:\\n--------------\");","\n    array_foreach(_arr_names, show_debug_message);"," ","The above code gets the names of all texture groups using ","texturegroup_get_names"," and lists them in the debug output."," ","Back: ","Textures"," ","Next: ","texturegroup_load"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"990"})