rh._.exports({"0":[[" ","string_trim"]],"1":[["string_trim"]],"2":[[" ","string_trim"]],"3":[[" ","This function returns a new string with all leading and trailing white-space characters removed."," ","NOTE"," The following characters are white-space characters: space (\" \"), tab (\"\\t\"), carriage return (\"\\r\"), newline (\"\\n\"), form feed (\"\\f\") and vertical tab (\"\\v\"). See ","White-space Characters"," for the full list, including Unicode characters."],[" ","string_trim","(str);"," ","Argument"," ","Type"," ","Description"," ","str"," ","String"," ","The string to trim"],[" ","String"],[" ","clean_string = ","string_trim","(\"     Text somewhere in the middle.    \");"," ","The above code calls the function ","string_trim"," on a string that contains both leading and trailing spaces. The result is assigned to a local variable named ","clean_string","."],[" ","var _string_from_literal = @\"","\n    The first line ","\n    is followed by the second line","\n    \";","\n    clean_string = ","string_trim","(_string_literal);"," ","The above code first defines a string literal that contains newlines by prefixing it with the ","@"," character. It assigns the new string to the temporary variable ","_string_from_literal",". This string is then trimmed using ","string_trim"," and the result is stored in a new variable ","clean_string","."," ","Back: ","Strings"," ","Next: ","string_trim_start"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["string_trim"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1:"],[" ","Example 2:"]],"id":"1777"})