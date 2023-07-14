rh._.exports({"0":[[" ","draw_text_ext_transformed"]],"1":[["draw_text_ext_transformed"]],"2":[[" ","draw_text_ext_transformed"]],"3":[[" ","This function is a combination of the base ","draw_text","()"," function with the ","draw_text_ext","()"," and ","draw_text_transformed","()","    functions, permitting you to scale and rotate text while maintaining a specific line spacing and maximum width per line. Note that the \"width\" argument is based on a scale of 1, so if the scale is different, this value should be changed\n    proportionally. For example, if the base width for a line break is 300 and you set the scale to 2, then the text will appear wrong, over-running the given width. Instead you should have set the width to 150 to compensate the scaling."],[" ","draw_text_ext_transformed(x, y, string, sep, w, xscale, yscale, angle);"," ","Argument","Type"," ","Description"," ","x","Real"," ","The x coordinate of the drawn string."," ","y","Real"," ","The y coordinate of the drawn string."," ","string","String"," ","The string to draw."," ","sep","Real"," ","The distance in pixels between lines of text."," ","w","Real"," ","The maximum width in pixels of the string before a line break."," ","xscale","Real"," ","The horizontal scale."," ","yscale","Real"," ","The vertical scale."," ","angle","Real"," ","The angle of the text."],[" ","N/A"],[" ","draw_set_halign(fa_center);"," draw_set_valign(fa_middle);\n    "," image_angle += 1;"," draw_text_ext_transformed(room_width / 2, room_height / 2, keyboard_string, 10, 300, 2, 2, image_angle);"," ","The above code will draw the given text in the middle of the room, with a maximum string length of 300 pixels, a spacing between each line of 10 pixels, spinning round and scaled to twice its original size."," ","Back: ","Text"," ","Next: ","draw_text_transformed_colour"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["draw_text_ext_transformed"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2065"})