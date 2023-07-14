rh._.exports({"0":[[" ","array_foreach"]],"1":[["array_foreach"]],"2":[[" ","array_foreach"]],"3":[[" ","This function loops through an array (or a range of it) and executes the ","Callback Method"," ","for each"," element."," ","IMPORTANT"," You ","cannot"," use this function to change array elements directly, i.e. by writing "," ","element = value;"," "," in the function. You ","can"," make changes if the array element ","references"," something else (e.g. when the array element itself is an ","array"," or ","struct",")."," "," ","Callback Function"," "," ","The callback function you pass into this function should take the following arguments:"],[" ","function(element, index);"," ","Argument"," ","Type"," ","Description"," ","element"," ","Any"," ","The current array element"," ","index"," ","Real"," ","The current array index"," ","This callback function should not return a value. It simply executes the function on all elements in the given range."],[" ","array_foreach","(array, function, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array to use"," ","function"," ","Function"," ","The callback function to run on each element"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length"],[" ","N/A"],[" ","var _array =","\n    [","\n        { x: 4,  y: 5  },","\n        { x: 12, y: 8  },","\n        { x: 75, y: 23 }","\n    ];"," ","\n    var _set_x_to_index = function(_element, _index)","\n    {","\n        _element.x = _index;","\n    }"," ","array_foreach","(_array, _set_x_to_index);\n  "," ","The above code first creates a temporary array of structs ","array"," where each struct stores and ","x"," and ","y"," value."," ","It then defines a temporary function ","x_to_index"," that takes in an element and an index, and sets the element's ","x"," to that index."," ","It expects the ","element"," parameter to be a struct. Finally ","array_foreach"," is called with the array and the function as the arguments. After the code has executed all structs will have their ","x"," value set to their array index."," ","Back: ","Array Functions"," ","Next: ","array_reduce"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["array_foreach"]],"6":[[" ","Syntax:"],[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2368"})