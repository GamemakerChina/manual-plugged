rh._.exports({"0":[[" ","texturegroup_load"]],"1":[["texturegroup_load"]],"2":[["texturegroup_load"]],"3":[[" ","texturegroup_load"]],"4":[[" ","This function is used to load a ","Dynamic Texture Group"," from disk into RAM."," ","By default, it will also decompress and fetch the group into VRAM. This can be disabled by setting the second argument to ","false",", which will leave you to manually ","pre-fetch"," it later or have it fetched automatically when an image is drawn from it."," ","If the Texture Group was loaded successfully, the function returns 0, otherwise it returns -1."," ","For information on its use, see: ","Dynamic Textures"],[" ","texturegroup_load(groupname, [prefetch=true]);"," ","Argument"," ","Type"," ","Description"," ","groupname"," ","String"," ","The name of the Texture Group as a string. These are defined in the ","Texture Groups"," window."," ","prefetch"," ","Boolean"," ","OPTIONAL"," If ","true"," (default), the group is decompressed and fetched into VRAM. If ","false",", it's only loaded into RAM, remaining compressed."],[" ","Real"],[" ","var _loaded = texturegroup_load(\"tg_UI\");"," ","\n    if (_loaded < 0)","\n    {","\n        show_debug_message(\"tg_UI could not be loaded.\");","\n    }\n  "," ","This will attempt to load the Dynamic Texture Group with the name \"","tg_UI","\" into memory and also pre-fetch it."," ","If the Texture Group wasn't loaded, it prints a message to the output log."," ","Back: ","Textures"," ","Next: ","texturegroup_unload"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2018"})