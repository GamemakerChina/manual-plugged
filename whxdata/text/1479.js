rh._.exports({"0":[[" ","string_set_byte_at"]],"1":[["string_set_byte_at"]],"2":[[" ","string_set_byte_at"]],"3":[[" ","This function sets a byte directly in a string (based on the UTF8 format) and returns a copy of the string with the changes."," ","NOTE"," This function is incredibly slow so consider carefully whether it is necessary and where you use it."],[" ","string_set_byte_at(str, pos, byte);"," ","Argument"," ","Type"," ","Description"," ","str"," ","String"," ","The string to change the byte of."," ","pos"," ","Real"," ","The position within the string (starting at 1) to change the byte of."," ","byte"," ","Real"," ","The new byte value."],[" ","String"],[" ","str = string_set_byte_at(\"hello\", 2, 97);"," ","The above code would change the byte value of the second letter in the string, and so set the variable ","str"," to hold \"hallo\"."," ","Back: ","Strings"," ","Next: ","string_char_at"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["string_set_byte_at"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1479"})