rh._.exports({"0":[[" ","array_resize"]],"1":[["array_resize"]],"2":[[" ","array_resize"]],"3":[[" ","With this function you can resize an existing array dimension to a new size. You supply the array to be resized as well as the new number of indices for the array, and the function will resize that array. Note that this function is designed for resizing an array ","down"," to a smaller length as you can resize up by simply setting a new index in the array. That said, if you do use it to size up an array, any new indices will be set to the default value of 0."," ","This function can also be used for multi-dimension arrays, as long as you specify which dimension you want to resize when you supply the array index, following this pattern:"," ","// Resize the first dimension of the array","\n    array_resize(my_array, 10);"," ","\n    // Resize the second dimension of the array (only for the first slot)","\n    array_resize(my_array[0], 10);"," ","\n    // Resize the third dimension of the array (only for the first slots)","\n    array_resize(my_array[0][0], 10);"," ","\n    // ...and so on.\n  "," ","The code states that only the first slot of the second dimension is resized, since the slots in any given array dimension are ","not"," interconnected and can have different sizes; for example:"," ","array_resize(my_array[0], 10);","\n    array_resize(my_array[1], 22);"," ","In the above code, the length of the array's second dimension is 10 in the first slot but 22 in the second slot."],[" ","array_resize(array_index, new_size);"," ","Argument"," ","Type"," ","Description"," ","array_index"," ","Array"," ","The index of the array to resize."," ","new_size"," ","Real"," ","The new size for the array (an integer, starting from 0)."],[" ","N/A"],[" ","if array_length(a) > 10","\n    {","\n        array_resize(a, 10);","\n    }"," ","The above code checks the length of an array and if it has more than 10 indices, it is resized."," ","Back: ","Array Functions"," ","Next: ","array_length_1d"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["array_resize"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1985"})