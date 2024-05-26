rh._.exports({"0":[[" ","draw_get_halign"]],"1":[["draw_get_halign,fa_left,fa_center,fa_right"]],"2":[["draw_get_halign,fa_left,fa_center,fa_right"]],"3":[[" ","draw_get_halign"]],"4":[[" ","This function is used to get the text alignment setting along the horizontal axis, and will return one of the constants listed below."],[" ","draw_get_halign();"],[" ","Constant"," ","Horizontal Alignment Constant"," ","Constant"," ","Alignment"," ","fa_left"," ","fa_center"," ","fa_right"],[" ","var _cur_halign = draw_get_halign();","\n    var _cur_valign = draw_get_valign();"," ","\n    draw_set_halign(fa_right);","\n    draw_set_valign(fa_bottom);"," ","\n    draw_text(100, 32, \"Score: \" + string(score));"," ","\n    draw_set_halign(_cur_halign);","\n    draw_set_valign(_cur_valign);\n  "," ","The above code saves the currently applied \"halign\" and \"valign\" values to local variables, and then changes the alignments to draw some text. After drawing it, it resets the alignments back to the values stored in the local variables."," ","Back: ","Text"," ","Next: ","draw_get_valign"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1661"})