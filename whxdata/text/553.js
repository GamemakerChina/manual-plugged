rh._.exports({"0":[[" ","draw_enable_swf_aa"]],"1":[["draw_enable_swf_aa"]],"2":[["draw_enable_swf_aa"]],"3":[[" ","draw_enable_swf_aa"]],"4":[[" ","With this function you can enable or disable anti-aliasing (AA) for SWF format vector sprites. AA simply smooths the edges of vector images to give them a nicer look. The amount of AA used will depend on the value set using the function ","draw_set_swf_aa_level()",". By default this is disabled."],[" ","draw_enable_swf_aa(enable);"," ","Argument","Type"," ","Description"," ","enable","Boolean"," ","Enable (","true",") or disable (","false",") AA for all SWF sprites."],[" ","N/A"],[" ","if draw_get_swf_aa_level() == 0","\n    {","\n        draw_enable_swf_aa(true);","\n        draw_set_swf_aa_level(0.5);","\n    }"," ","The above code will check the AA value for SWF format sprites, and if it is 0 it enables AA and sets the value to 0.5."," ","Back: ","Sprites And Tiles"," ","Next: ","draw_set_swf_aa_level"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"553"})