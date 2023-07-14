rh._.exports({"0":[[" ","struct_get_from_hash"]],"1":[["struct_get_from_hash"]],"2":[[" ","struct_get_from_hash"]],"3":[[" ","This function gets the value of a struct member using the hash returned by ","variable_get_hash","."," ","Accessing a variable through a hash allows for faster access when using a string, compared to using the ","struct[? \"string\"]"," syntax."],[" ","struct_get_from_hash","(struct, hash);"," ","Argument"," ","Type"," ","Description"," ","struct"," ","Struct"," ","The struct reference to use"," ","hash"," ","Real"," ","The hash of the variable to get (as returned by ","variable_get_hash",")"],[" ","Any"],[" ","var _the_struct = {a: 77, b: 88, c: 99};","\n    var _hash = variable_get_hash(\"a\");","\n    var _value = ","struct_get_from_hash","(_the_struct, _hash);"," ","The above code creates a temporary struct ","_the_struct"," with three member variables: ","a",", ","b"," and ","c",". It then gets the hash of a variable ","a",". This hash is then used in ","struct_get_from_hash"," to retrieve the value of the struct member with the corresponding name. The returned value is assigned to another temporary variable ","_value","."," ","Back: ","Variable Functions"," ","Next: ","struct_set_from_hash"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["struct_get_from_hash"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2012"})