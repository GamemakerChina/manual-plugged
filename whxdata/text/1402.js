rh._.exports({"0":[[" ","clickable_change"]],"1":[["clickable_change"]],"2":[[" ","clickable_change"]],"3":[[" ","With this function you can change the sprite and position of a clickable icon previously created with ","clickable_add()",". Please note that the position is based on the window, ","not"," the canvas, (0,0) position and that the sprite must be referenced directly from the texture page (see: ","sprite_get_tpe()",")."],[" ","clickable_change(index, tpe, x, y)"," ","Argument"," ","Type"," ","Description"," ","index"," ","Clickable ID"," ","The index of the clickable icon to change."," ","tpe"," ","Texture Page Entry"," ","The texture page entry for the sprite to be used."," ","x"," ","Real"," ","The new x position within the ","window","."," ","y"," ","Real"," ","The new y position within the ","window","."],[" ","N/A"],[" ","switch (room)","\n    {","\n        case rm_Menu: clickable_change(global.Help_Icon, sprite_get_tpe(spr_MS_Help, 1), 32, 32); break;","\n        case rm_Game: clickable_change(global.Help_Icon, sprite_get_tpe(spr_MS_Help, 0), 200, 32); break;","\n    }"," ","The above code will change the image index and position of the clickable icon indexed in the variable \"global.Help\" depending on the current room."," ","Back: ","Web And HTML5"," ","Next: ","clickable_change_ext"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["clickable_change"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1402"})