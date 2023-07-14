rh._.exports({"0":[[" ","variable_clone"]],"1":[["variable_clone"]],"2":[[" ","variable_clone"]],"3":[[" ","This function clones the value you pass it and returns the new clone."," ","It clones nested structs and arrays up to a given depth (128 by default), which you can override by providing the optional ","depth"," parameter."," ","NOTE"," The built-in ","Data Structures"," and ","Instances"," are ","not"," cloned; for this type of variable the actual value (data structure ID or instance ID, respectively) is written."],[" ","variable_clone","(value[, depth]);"," ","Argument"," ","Type"," ","Description"," ","value"," ","Any"," ","The value to clone"," ","depth"," ","Real"," ","OPTIONAL"," The maximum depth level to clone the variable, in case this is e.g. a nested struct. The default is 128, the maximum possible value."],[" ","Any"],[" ","var _the_original = {a: \"some text\", b: [1, 2, 3, 4, 5], c: 6};","\n    var _the_clone = ","variable_clone","(_the_original);"," ","The above code first defines a temporary struct variable ","_the_original",". A clone is then created from this variable using ","variable_clone",". The new variable is stored in another variable ","_the_clone","."," ","Back: ","Variable Functions"," ","Next: ","is_string"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["variable_clone"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2013"})