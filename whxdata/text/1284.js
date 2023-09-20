rh._.exports({"0":[[" ","sprite_prefetch_multi"]],"1":[["sprite_prefetch_multi"]],"2":[[" ","sprite_prefetch_multi"]],"3":[[" ","This function can be used to prefetch (place into texture memory) a number of texture pages that contain the sprites given. You supply an array populated with the sprite indices (as defined when you created the sprite asset) and the texture pages that they are on will be loaded into memory. Note that the function will return ","-1"," if prefetch is not supported for the chosen resource or the target platform is HTML5, or it will return ","0"," if all worked correctly."," ","NOTE"," There is a performance hit as the texture is uploaded to texture memory on most devices, so it's recommended that you call ","sprite_prefetch_multi"," ","on any required graphics at the start of a level to avoid any stalls.\n  "],[" ","sprite_prefetch_multi"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," of ","Sprite Asset","s"," ","Array with the sprite indices to fetch"],[" ","Real"," (-1 or 0)"],[" ","spr_a[0] = spr_Player_Aura1;","\n    spr_a[1] = spr_Player_Aura2;","\n    spr_a[2] = spr_Player_Aura3;","\n    spr_a[3] = spr_Player_Aura4;","\n    sprite_prefetch_multi(spr_a);"," ","The above code creates an array where each element holds a sprite index. This array is then used to place those sprite textures into memory."," ","Back: ","Sprite Manipulation"," ","Next: ","sprite_index"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["sprite_prefetch_multi"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1284"})