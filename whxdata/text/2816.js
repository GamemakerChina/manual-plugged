rh._.exports({"0":[[" ","Guide To Using JSON"]],"1":[["Guide To Using JSON"]],"2":[["json"]],"3":[[" ","Guide To Using JSON"]],"4":[[" ","This page describes how to work with JSON in ","GameMaker","."," ","Contents"," ","JSON","JSON in ","GameMaker","Which Functions to Use","Data Conversions","Filter Function","Writing JSON","Prettify","Usage Notes","Reading JSON","Usage Notes","Serialisation"],[" ","JSON (JavaScript Object Notation) is a lightweight data-interchange format which is easy to read and write, for both people and machines. It is built on two basic structures:"," ","A collection of name/value pairs, known as a \"map\", \"dictionary\" or \"object\" in programming languages. It is represented in ","GameMaker"," by a ","Struct"," or a ","DS Map","."," ","An ordered list of values, known as a \"list\", \"array\" or \"sequence\" in other programming languages. It is represented in ","GameMaker"," by an ","Array"," or a ","DS List","."," ","IMPORTANT"," JSON is ","agnostic"," about numbers. In any programming language, there can be a variety of number types of various capacities and complements, fixed or floating, binary or decimal. That can make interchange between different programming languages difficult. JSON instead offers only the representation of numbers that humans use: a sequence of digits. All programming languages know how to make sense of digit sequences even if they disagree on internal representations. For more information see the ","ECMA JSON Standard","."],[" ","GameMaker"," has built-in support for reading and writing JSON through two sets of functions: "," ","json_parse"," and ","json_stringify"," which you use to convert a JSON string to a collection of ","Structs"," and ","Arrays"," and back."," ","json_encode"," and ","json_decode"," which you use to convert a JSON string to a collection of ","DS Maps"," and ","DS Lists"," and back. Encoding requires you to ","mark"," ","DS map keys"," and ","DS list items"," as such (so it is clear which map keys and list items should become nested JSON objects and arrays)."],[" ","json_parse"," and ","json_stringify"," are the main functions to use when working with JSON. If you're not using any ","Data Structures"," or when you start a new project, these are the functions to use."," ","Use ","json_encode"," and ","json_decode"," when working with ","Data Structures",". The item passed to ","json_encode"," (the \"root\") must always be a ","DS Map",". Similarly, ","json_decode"," always returns a DS map, no matter the data type that you pass it (anything you pass to the function that's not a DS map is wrapped in one)."," ","Use ","json_encode"," on a ","DS Map"," that contains nested ","structs"," and ","Arrays",". The structs and arrays will also be converted to JSON, i.e. ","json_encode"," allows you to convert a mixed hierarchy."," ","This guide focuses on the functions ","json_parse"," and ","json_stringify","."],[" ","The JSON standard has a limited number of values that it supports: an object, an array, a string, a number and the values ","true",", ","false"," and ","null",". ","GameMaker"," uses more ","Data Types"," than this and in order to store these in a way they can be read back later, it converts them to a string representation. Both the ","json_parse"," / ","json_stringify"," and ","json_decode"," / ","json_encode"," perform these conversions."," ","NOTE"," You can disable the automatic string conversion when parsing JSON by setting the ","inhibit_string_convert"," argument of ","json_parse"," to ","true","."," ","The following table lists the conversions that take place when converting between JSON data and ","GameMaker",": "," ","JSON Data Conversions"," ","JSON Type"," ","GM Type/Value"," ","Notes"," ","true"," / ","false"," ","true"," / ","false"," ","real / number"," ","Real"," ","\"@i64@hex_value$i64@\""," ","int64"," ","GameMaker"," will write it as:","\n          - an ","int"," if it's in the valid range for an int32.","\n          - a ","double"," if it can do so without losing precision.","\n          - a ","string"," with an identifier ","\"@i64@\""," before it and ","\"$i64$\""," after it if neither of those cases is applicable","."," ","\n          When you read the JSON again, ","GameMaker"," will pick up these identifiers and convert the value back into an int64 (unless conversion is disabled)."," ","WARNING"," If the JSON is intended for a server or some other non-","GameMaker"," target, these values will not be appropriate and so should be avoided.\n        "," ","null"," ","undefined"," ","pointer_null"," ","undefined"," and ","pointer_null"," are written as JSON ","null",". JSON ","null"," is always read back as ","undefined"," when ","parsing"," or ","decoding","."," ","string"," ","String"," ","\"@@infinity$$\"",", ","@@-infinity$$"," ","infinity",", ","-infinity"," ","infinity"," is written as a string"," ","\"@@nan$$\""," ","NaN"," ","NaN"," is written as a string"," ","object"," ","Struct"," (or ","DS Map",")"," ","array"," ","Array"," (or ","DS List",")"," ","\"ref <type> <id>\""," ","Handle"," ","Handles are stored in their string representation ","\"ref <type> <id>\""," when writing JSON and are converted back to runtime values when reading back the JSON."," ","\n          The exception is when using ","json_encode",": nested ","DS Maps"," and ","DS Lists"," that you've ","marked"," ","as such"," will be written as JSON objects and arrays respectively."," ","NOTE"," Relying on this behaviour will generally be of little use as the index will change between runs of the game.\n        "],[" ","If you want full control over how the contents of the JSON are read or written, you can optionally provide a filter function that runs for each element to ","json_stringify"," and ","json_parse",". See the function pages for more information."],[" ","Writing JSON is done with ","json_stringify",". For example, the following struct: "," ","my_struct =","\n    {","\n        test: \"this\",","\n        val: [\"that\", \"another thing\", {\"value\": \"a nested struct\"}]","\n    };"," ","Can be converted to a JSON string using ","json_stringify",": "," ","struct_json = json_stringify(my_struct);"," ","And then be written to a file using either the text file functions: "," ","var _file = file_text_open_write(\"struct_as_json.json\");","\n    file_text_write_string(_file, struct_json);","\n    file_text_close(_file);"," ","Or the buffer functions: "," ","var _buff = buffer_create(","16384",","," ","buffer_fixed, 1",");","\n    buffer_write(buffer_text, struct_json);","\n    buffer_save(\"struct_as_json.json\");","\n    buffer_delete(_buff);"," ","You can also send the JSON string over a network or store it somewhere else (e.g. in a text field in a database)."," ","The following text is the output: "," ","{\"test\":\"this\",\"val\":[\"that\",\"another thing\",{\"value\":\"a nested struct\"}]}"," ","By default, ","json_stringify"," writes the JSON ","linearised",". In this case everything is placed on the same line, with no space in between and no indentation added. This format is useful when every byte counts, though it is not particularly readable."],[" ","The ","prettify"," parameter can be set to ","true"," to add indentation to the generated JSON string to make it look \"pretty\", i.e. more human-readable."," ","The following code: "," ","struct_json = json_stringify(my_struct, true);"," ","outputs the following JSON: "," ","{","\n      \"test\":\"this\",","\n      \"val\":[","\n        \"that\",","\n        \"another thing\",","\n        {","\n          \"value\":\"a nested struct\"","\n        }","\n      ]","\n    }"," ","Compared to the linearised output, the JSON above shows at a glance how the data is constructed."],[" ","Care should be taken when writing a JSON string to an INI file, as the INI specification can cause issues when using quotes and escape characters. See ","ini_write_string()"," for more information."," ","Circular references in DS maps, such as references back to the main map itself (forming an infinite loop) or references to maps within the main map forming such infinite loops, will be serialised only on the first level where they're encountered, and converted to ","null"," for deeper references. In the case of structs such references are immediately converted to ","null"," upon stringifying."],[" ","To read data from a previously created JSON string, you turn it into a struct using ","json_parse",": "," ","my_struct = json_parse(struct_json);"," ","By default, string values in the JSON will be checked to see if they contain special values. If so, these values are converted to the internal ","GameMaker"," value. For example: "," ","json = json_stringify({ \"infinity\": infinity, \"NaN\": NaN});","\n    show_debug_message(json);                                    // {\"NaN\":\"@@nan$$\",\"infinity\":\"@@infinity$$\"}","\n    data_with_strings_converted = json_parse(json);","\n    show_debug_message(data_with_strings_converted);             // { NaN : NaN, infinity : inf }","\n    data_with_strings_unchanged = json_parse(json, , true);","\n    show_debug_message(data_with_strings_converted);             // { NaN : \"@@nan$$\", infinity : \"@@infinity$$\" }"],[" ","The maximum nesting limit of the JSON string to be parsed or decoded is ","128","."," ","While trailing commas are not part of the JSON standard, ","GameMaker"," parses JSON strings that contain them. For example: ","{\"name\": \"Level 1\", \"Description\": \"The first level\", }","."],[" ","Serialisation"," is described as follows: "," ","In computing, serialization (or serialisation) is the process of translating a data structure or object state into a format that can be stored (e.g. files in secondary storage devices, data buffers in primary storage devices) or transmitted (e.g. data streams over computer networks) and reconstructed later (possibly in a different computer environment)."," ","In ","GameMaker",", a struct is such a data structure. It can have both variables and functions as its members. When you stringify a struct's contents with ","json_stringify",", only the struct's variables are written, not its functions."," ","NOTE"," You can only serialise ","structs"," this way in ","GameMaker",", not ","Data Structures"," or ","Instances","."," ","By manually setting the ","Static Struct"," of the structs that ","json_parse"," returns with ","static_set"," you can restore those structs to their original state."," ","As an example, suppose you have a constructor ","Vector",": "," ","function Vector(_x=0, _y=0, _z=0) constructor","\n    {","\n        x = _x;","\n        y = _y;","\n        z = _z;"," ","\n        static add = function(_v2)","\n        {","\n            x += _v2.x;","\n            y += _v2.y;","\n            z += _v2.z;"," ","\n            return self;","\n        }","\n        static sum = function(_v1, _v2)","\n        {","\n            // Note: call using Vector.sum(v1, v2)","\n            return new Vector(_v1.x + _v2.x, _v1.y + _v2.y, _v1.z + _v2.z);","\n        }","\n        static dot = function(_v1, _v2)","\n        {","\n            // Note: call using Vector.sum(v1, v2)","\n            return dot_product_3d(_v1.x, _v1.y, _v1.z, _v2.x, _v2.y, _v2.z);","\n        }","\n        // Other","\n    }"," ","You then create a few of these vectors: "," ","v1 = new Vector();","\n    v2 = new Vector(100, 100);","\n    v3 = new Vector(200, 20, 50);","\n    v1.add(v2);","\n    v4 = Vector.sum(v2, v3);"," ","These four vectors can be stored in an array and converted to JSON using ","json_stringify",":"," ","json = json_stringify([v1, v2, v3, v4]);"," ","This JSON string can be saved or sent somewhere else."," ","At you point you might want to restore these vectors in another instance of the game, not just their values (","x",", ","y"," and ","z",") but also their behaviour (","add",", ","sum",", ","dot",", ...)."," ","To get the information back into structs you parse the JSON string using ","json_parse"," and then assign the individual array elements to the variable names used earlier: "," ","vectors = json_parse(json);","\n    v1 = vectors[0];","\n    v2 = vectors[1];","\n    v3 = vectors[2];","\n    v4 = vectors[3];"," ","The structs have now been read back from the JSON string, but they are entirely new structs that don't belong to a constructor anymore. The structs were ","Vector"," structs in the original instance of the game, but aren't anymore. At least, not \"officially\", as you'll see with a call to the function ","instanceof",": "," ","instanceof(v1, Vector);  // false","\n    instanceof(v2, Vector);  // false","\n    instanceof(v3, Vector);  // false","\n    instanceof(v4, Vector);  // false"," ","To tell ","GameMaker"," that each of these structs should, once again, belong to the ","Vector"," constructor, you can use the function ","static_set",": "," ","var _static_vec = static_get(Vector);","\n    static_set(v1, _static_vec);","\n    static_set(v2, _static_vec);","\n    static_set(v3, _static_vec);","\n    static_set(v4, _static_vec);"," ","By using ","static_set"," on the structs you first detach them from the static as a simple \"data\" struct and reattach them to the static chain as \"child\" structs of the static struct of ","Vector",". Since you can access all static members of the hierarchy of static structs (or constructors) a struct belongs to, this way you give the structs access to ","Vector","'s ","Static Chain",", restoring their behaviour."," ","From here on, ","v1"," to ","v4"," ","are"," instances of ","Vector","!"," ","instanceof(v1, Vector);  // true!","\n    instanceof(v2, Vector);  // true!","\n    instanceof(v3, Vector);  // true!","\n    instanceof(v4, Vector);  // true!"," ","And you can use them like any other ","Vector"," struct: "," ","v1.add(v2).add(v3);","\n    v5 = Vector.sum(v1, v1);"," ","IMPORTANT"," In order for this to work, the functions must be defined as static so they belong to the ","constructor",", rather than to the struct ","instance",". If you don't declare the functions as static, each struct instance should receive a copy of the function through execution of the constructor. However, setting the static struct with ","static_set"," doesn't call the constructor, rather it moves the struct to a different place in the ","Static Chain"," which enables it to access a different static struct's functions (see ","How the Dot Operator Looks Up a Variable Name",")."," ","Back: ","Additional Information"," ","Next: ","Project Format"]],"6":[[" ","© Copyright ","YoYo Games"," ","Ltd."," ","2024"," All Rights Reserved"]],"7":[[" ","Which Functions to Use"],[" ","Data Conversions"],[" ","Filter Function"],[" ","Prettify"],[" ","Usage Notes"],[" ","Usage Notes"]],"8":[[" ","JSON"],[" ","JSON in ","GameMaker"],[" ","Writing JSON"],[" ","Reading JSON"],[" ","Serialisation"]],"id":"2816"})