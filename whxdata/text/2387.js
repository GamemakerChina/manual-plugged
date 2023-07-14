rh._.exports({"0":[[" ","Static Struct"]],"1":[["Static Structs, static_get, static_set, is_instanceof"]],"2":[[" ","Static Struct"]],"3":[[" ","Every function has a \"static struct\", where its static variables are stored. You can get that struct using ","static_get",":"," ","function counter() {","\n        static count = 0;","\n        return count ++;","\n    }"," ","\n    repeat (10) counter()"," ","\n    // Get static struct of counter()","\n    var _static_counter = static_get(counter);"," ","\n    // Both of these read the same variable","\n    show_debug_message(counter.count); // 10","\n    show_debug_message(_static_counter.count); // 10\n  "," ","This is also true for ","constructor functions",". Each constructor has a static struct, where its static variables and static methods are stored."," ","Every struct created from the constructor accesses its static variables from that static struct."],[" ","When you use constructor inheritance, those constructors form a \"static chain\" - a chain of static structs where each child links to its parent."," ","For example, let's say you have a constructor ","item",", and a constructor ","potion"," which is a child of ","item",":"," ","function item() constructor {}"," ","\n    function potion() : item() constructor {}"," ","\n    var _potion = new potion();\n  "," ","You can get the static struct of ","potion"," using ","static_get(potion)"," - this is where the static variables for ","potion"," are stored. Let's call this ","static_potion","."," ","Now, if you call ","static_get(static_potion)",", you will get the static struct for ","item","! This is the same struct you would get from ","static_get(item)","."," ","function item () constructor {}","\n    function potion () : item () constructor {}"," ","\n    var _potion = new potion();","\n    var _static_potion = static_get(potion);"," ","\n    show_debug_message(static_get(item) == static_get(_static_potion)); // true (1)\n  "," ","This is because ","item"," is the parent of the ","potion"," constructor, so the static struct for ","item"," is linked to the static struct for ","potion","."],[" ","You can use ","is_instanceof"," to check if a struct belongs to the given constructor, or has the constructor as a parent."," ","This is done by checking if your struct has the given constructor's static struct anywhere in its static chain."," ","function item() constructor {}"," ","\n    function potion() : item() constructor {}"," ","\n    function enemy() constructor {}"," ","\n    var _potion = new potion();"," ","\n    show_debug_message(is_instanceof(_potion, potion)); // true (1)","\n    show_debug_message(is_instanceof(_potion, item)); // true (1)","\n    show_debug_message(is_instanceof(_potion, enemy)); // false (0)\n  "," ","The above code shows three constructors: ","item",", ","potion"," which is a child of ","item",", and ","enemy",", which is a separate constructor."," ","It creates a struct from the ","potion"," constructor. Using ","is_instanceof()",", we can check that the new struct:"," ","is a ","potion"," ","is an ","item"," ","is not an ","enemy"," ","This way you can check whether a struct \"is\" something, as ","a potion is an item",", so it returns ","true"," for both constructors. However if wouldn't be true the other way around: ","an item is not a potion","."],[" ","The function ","static_set"," is provided to let you change the static struct of a function (constructor or not). This way you can change what static variables are available to a constructor and its structs, and also change the \"static chain\" that a constructor belongs to."," ","The recommended use-case for this function is deserialisation. If you're loading structs from JSON, those structs won't belong to any constructors, however you can change that by using ","static_set"," to \"apply\" a constructor to a struct, so that that struct receives its shared static variables and you can run ","is_instanceof"," to check its kind."," ","var _potion = json_parse(_json_string);"," ","\n    show_debug_message(is_instanceof(_potion, potion)); // false (0)"," ","\n    var _static_potion = static_get(potion);","\n    static_set(_potion, _static_potion);"," ","\n    show_debug_message(is_instanceof(_potion, potion)); // true (1)\n  "," ","In the code above, upon loading the potion struct from a JSON string, it's only created as a simple struct and doesn't belong to a constructor, nor does it have any static variables."," ","After applying the static struct for ","potion"," to it (which is a constructor), it becomes an instance of ","potion"," (as tested with ","is_instanceof()",") and also gets any static variables and static methods contained in the ","potion"," constructor."," ","Back: ","Structs"," ","Next: ","Struct Forbidden Variables"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["Static Structs"]],"7":[[" ","Static Chain"],[" ","Checking Inheritance"],[" ","Changing The Static Struct"]],"id":"2387"})