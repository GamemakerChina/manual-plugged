rh._.exports({"0":[[" ","array_any"]],"1":[["array_any"]],"2":[[" ","array_any"]],"3":[[" ","This function is used to check if any one element in the given array matches a condition. You check that by passing a ","Predicate Method"," that runs on each element of the given array, and returns ","true"," or ","false","."," ","This function returns ","true"," if the predicate function returns ","true"," for at least one of the elements in the given array range."," "," ","Predicate Function"," "," ","This function takes a ","Predicate Method"," that operates on the given array. The predicate function is passed the following arguments:"],[" ","function(element, index);"," ","Argument"," ","Type"," ","Description"," ","element"," ","Any"," ","The current array element's value"," ","index"," ","Real"," ","The current array index"," ","The predicate function should return a ","Boolean",", which affects how the original function modifies or reads the array","."," ","See information and examples on ","Predicate Method","."],[" ","array_any","(array, function, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array to use"," ","function"," ","Function"," ","The ","Predicate Method"," to run on each element"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length"],[" ","Boolean"," (","true"," if there is any element in the array for which the predicate returns ","true",", ","false"," if there isn't any)"],[" ","var _array =","\n    [","\n        \"apple\",","\n        \"banana\",","\n        \"coconut\",","\n        \"dragonfruit\"","\n    ]"," ","\n    var _contains_apple = array_any(_array, function(_val, _ind)","\n    {","\n        return _val == \"apple\"","\n    });"," ","\n    show_debug_message(_contains_apple); // prints 1 (true)\n  "," ","This creates an array containing strings of fruit names. We want to check if the array contains ","\"apple\""," anywhere."," ","The predicate function ","_contains_apple"," checks if ","_val == \"apple\""," and returns the result. When this is ","true"," for any one of the array's elements, ","array_any"," returns ","true","."," ","Back: ","Array Functions"," ","Next: ","array_all"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["array_any"]],"6":[[" ","Syntax:"],[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1531"})