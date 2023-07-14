rh._.exports({"0":[[" ","array_contains"]],"1":[["array_contains"]],"2":[[" ","array_contains"]],"3":[[" ","This function checks if the given value exists in the array, or in a part of it. It returns ","true"," if the value exists, or ","false"," if not."," ","TIP"," To check if an array not just ","contains"," a value but rather contains a value ","that satisfies a certain condition",", use ","array_any","."],[" ","array_contains","(array, value, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array in which to look for the value"," ","value"," ","Any"," ","The value to look for in the array"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length"],[" ","Boolean"],[" ","var _digits_decimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];","\n    var _contains = ","array_contains","(_digits_decimal, 3);","\n    show_debug_message(\"The array contains the digit 3: {0}\", _contains);"," ","The above code first defines an array ","_digits_decimal"," containing the decimal digits from 0 to 9. It then calls ","array_contains"," to check if the value 3 is in the array. Finally it shows a debug message with the result."],[" ","var _a = [0, 1, 2];","\n    var _b = _a;","\n    var _array_of_arrays = ","\n    [","\n        [","\n            \"this\", \"that\", \"another thing\"","\n        ],","\n        _a","\n    ];","\n    show_debug_message(","array_contains","(_array_of_arrays, _a));","\n    show_debug_message(","array_contains","(_array_of_arrays, _b));","\n    show_debug_message(","array_contains","(_array_of_arrays, [0, 1, 2]));","\n    show_debug_message(","array_contains","(_array_of_arrays, [\"this\", \"that\", \"another thing\"]));"," ","The above code first defines three temporary variables: an array ","_a",", a variable ","_b"," referring to ","_a"," and an array ","_array_of_arrays","."," ","It then shows four debug messages with the result of calling ","array_contains"," in 4 different situations. ","_array_of_arrays"," contains ","_a"," because it has been added to it as an element. It also contains ","_b"," because ","_b"," refers to ","_a",". The remaining checks return ","false"," because even though the arrays contain the same values, they aren't the same arrays."," ","Back: ","Array Functions"," ","Next: ","array_contains_ext"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["array_contains"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1:"],[" ","Example 2: array of arrays"]],"id":"2542"})