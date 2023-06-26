rh._.exports({"0":[[" ","font_get_first"]],"1":[["font_get_first"]],"2":[[" ","font_get_first ","DEPRECATED"]],"3":[[" ","When defining a font in ","GameMaker",", you can define a range of characters to include. This is because the font itself is not actually included with your game (for legal reasons) but an ","image"," of the font is included on a texture page and that is what your game will use (just like any other graphics asset). This means that you will want to keep the number of characters that you use to a minimum and specify only the range of characters that your game will need so as to keep texture memory as optimised as possible. This function can be used to find the starting character (as an ASCII value) that was used when your font asset was added to your game."," ","NOTE"," ","Due to changes in the way fonts are handled, this function will ","always"," return 32, as ","GameMaker"," enforces the space character (32) into the font and doesn't allow characters with codes lower than 32 either. New functions to do similar tasks will be added in a future update."],[" ","font_get_first(ind);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Font Asset"," ","Index of the font to check."],[" ","Real"],[" ","num = font_get_first(fnt_Main);"," ","The above code will store the ASCII value of the first letter of the font range for the font indexed in \"fnt_Main\"."," ","Back: ","Fonts"," ","Next: ","font_get_last"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["font_get_first"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1411"})