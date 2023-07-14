rh._.exports({"0":[[" ","json_encode"]],"1":[["json_encode"]],"2":[[" ","json_encode"]],"3":[[" ","JSON (JavaScript Object Notation) is a lightweight data-interchange format which is easy for to read and write, for both people and machines. It is built on two basic structures:"," ","A collection of name/value pairs, called a ","DS Map"," in ","GameMaker"," but also known as a \"dictionary\" or \"object\" in other programming languages."," ","An ordered list of values, called a ","DS ","List"," in ","GameMaker"," but this can also be called an \"array\" or \"sequence\" in other programming languages."," ","json_encode()"," takes a DS map or array that you have previously created and encodes it as a JSON string which you can then use as (for example) part of an ","http_post_string()"," call, or - so it can be stored externally - it can be written to a file. If using an array as the top level structure, then the array can only contain valid values or other arrays, and ","not"," data structures. For that you should use the appropriate DS functions."," ","IMPORTANT!"," JSON is agnostic about numbers. In any programming language, there can be a variety of number types of various capacities and complements, fixed or floating, binary or decimal. That can make interchange between different programming languages difficult. JSON instead offers only the representation of numbers that humans use: a sequence of digits. All programming languages know how to make sense of digit sequences even if they disagree on internal representations. For more information see the ","ECMA JSON Standard","."," ","When using this function there are some important things to note:"," ","Note that care should be taken when writing JSON to an ini file, as the ini specifications can cause issues when using quotes and escape characters. See the function ","ini_write_string()"," for more information."," ","If the provided map contains any circular references, such as references back to the main map itself (forming an infinite loop) or references to maps within the main map forming such infinite loops, such references will be serialised only on the first level where they're encountered, and converted to ","\"null\""," for deeper references."," ","If you encode an int64 to JSON it will write it as an ","int"," if it is in the valid range for an int32, as a ","double"," if it can do so without losing precision or (if neither of those cases is applicable) as a ","string"," with an identifier \"","@i64@","\" before it and \"","$i64$","\" after it. When you come to decode the JSON to a map again ","GameMaker"," will pick these identifiers up and re-convert the value to an int64. This does mean that if the JSON is intended for a server or some other non-GameMaker target, these values will not be appropriate and so should be avoided."," ","infinity"," and ","NaN"," will be written into the JSON as ","\"@@infinity$$\""," (","\"@@-infinity$$\""," for negative) and ","\"@@nan$$\""," respectively. These values will be correctly loaded back into memory when the JSON is loaded with ","json_decode","."," ","NOTE",": The hierarchical functionality of JSON is available through special DS map and DS list functions (for example ","ds_map_add_list()"," or ","ds_list_mark_as_map()","), so you are able to encode sub-lists and maps."],[" ","json_encode(map)"," ","Argument"," ","Type"," ","Description"," ","map"," ","DS Map ID"," ","A DS map with the information to encode (or an array)"],[" ","String"],[" ","var hiscore_map, i, str;","\n    hiscore_map = ds_map_create();","\n    for (i = 0; i < 10; i ++;)","\n    {","\n        ds_map_add(hiscore_map, name[i], score[i]);","\n    }","\n    str = json_encode(hiscore_map);","\n    get[0] = http_post_string(\"http://www.angusgames.com/game?game_id=\" + string(global.game_id), str)","\n    ds_map_destroy(hiscore_map);"," ","The above code creates a DS map and then loops through the name and score arrays, adding each key/value pair to the new map. Next, this map is encoded using ","json_encode()"," and stored as a string in the variable \"str\". This string is then sent to a web server using ","http_post_string()"," and the DS map is destroyed to prevent a memory leak as it is no-longer needed."," ","Back: ","File Encoding"," ","Next: ","json_decode"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["json_encode"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"8":[[" ","IMPORTANT!"," This function - while still valid - has been superseded by the function ","json_stringify()",", and we recommend that you only use this function for legacy support."]],"id":"2530"})