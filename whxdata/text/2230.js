rh._.exports({"0":[[" ","dbg_add_font_glyphs"]],"1":[["dbg_add_font_glyphs"]],"2":[["dbg_add_font_glyphs"]],"3":[[" ","dbg_add_font_glyphs"]],"4":[[" ","This function adds a range of characters from a TTF font to be used for text rendering in ","The Debug Overlay",". You supply a font name as a string, which must be present in the ","Included Files","."," ","IMPORTANT"," The glyphs that you want to add must be present in the given TTF font."," ","The following values can be used to specify the range:"," ","Font Range Constant"," "," Range"," ","Description"," ","-1"," ","Default Latin range"," ","0"," ","Greek"," ","1"," ","Korean"," ","2"," ","Japanese"," ","3"," ","Chinese Full"," ","4"," ","Chinese Simplified Common"," ","5"," ","Cyrillic"," ","6"," ","Thai"," ","7"," ","Vietnamese"],[" ","dbg_add_font_glyphs","(filename, [size], [font_range]);"," ","Argument"," ","Type"," ","Description"," ","filename"," ","String"," ","The filename of the TTF file to use"," ","size"," ","Real"," ","OPTIONAL"," The size of the font in pixels (default is 13)"," ","font_range"," ","Real"," ","OPTIONAL"," The range of characters to add (default is -1 for the Latin range)"],[" ","N/A"],[" ","dbg_add_font_glyphs","(\"korean_font.ttf\", 24, 1);"," ","The above code adds the glyphs of the Korean character range from the TTF font file ","\"korean_font.ttf\"",". The used font size is 24."," ","Back: ","The Debug Overlay"," ","Next: ","dbg_view"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2230"})