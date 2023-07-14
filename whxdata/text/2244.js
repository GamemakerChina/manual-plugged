rh._.exports({"0":[[" ","array_map_ext"]],"1":[["array_map_ext"]],"2":[[" ","array_map_ext"]],"3":[[" ","This function is similar to ","array_map",", but instead of returning a new array, it modifies the original array that was passed as an argument."," ","You supply a ","Callback Method"," which runs for all elements in the array. It can return any value which is applied back to the original array, starting"," at the index given by ","offset",", in the direction given by the sign of the ","length"," parameter."," ","This function returns the new number of valid elements, starting at the given offset position and in the direction set by the length argument. For this function, it's the number of elements modified in the given range."," "," ","Callback Function"," "," ","The callback function you pass into this function should take the following arguments:"],[" ","function(element, index);"," ","Argument"," ","Type"," ","Description"," ","element"," ","Any"," ","The current array element"," ","index"," ","Real"," ","The current array index"," ","This callback function should return a value of ","Any"," type that will be applied back to the array element."," ","IMPORTANT"," This function ","mutates"," the input array, i.e. changes it directly. Existing array elements in the range given by the offset and length parameter might be overwritten. For performance reasons the array is ","not"," resized and the new number of ","valid"," elements is returned instead."],[" ","array_map_ext","(array, function, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array to use"," ","function"," ","Function"," ","The callback function to run on each element"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length"],[" ","Real"," (the number of valid elements in the array)"],[" ","var _values = [7, 4, 11, 9, 12, 21, 17, 1, 2, 3];","\n    elements = array_map_ext(_values, sqr, 2, 5);"," ","The above code first creates an array ","values"," with a set of numbers. It then applies the built-in ","sqr"," function to a range of the array using ","array_map_ext","."," ","After the function has executed the array ","values"," will hold in indices 2 to 6 the square of the values that were originally there."," ","Back: ","Array Functions"," ","Next: ","array_unique_ext"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["array_map_ext"]],"6":[[" ","Syntax:"],[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2244"})