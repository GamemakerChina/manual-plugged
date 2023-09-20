rh._.exports({"0":[[" ","array_height_2d"]],"1":[["array_height_2d"]],"2":[[" ","array_height_2d ","DEPRECATED"]],"3":[[" ","WARNING!"," This function is deprecated (and replaced by ","array_length()",") as arrays are no longer limited to only 1 or 2 dimensions, and as such this function is only supplied for support of legacy projects. All new projects should use the current way of creating and accessing multi-dimension arrays (see ","here"," for more information)."," ","With this function you can get the height (number of entries) of a the first dimension of a 2D array. You supply the array to check and the output from the function tells you how many initial entries it contains. You can get the number of entries for the second dimension of the array using the function ","array_length_2d","."],[" ","array_height_2d(array_index);"," ","Argument"," ","Type"," ","Description"," ","array_index"," ","Array"," ","The index of the array to check."],[" ","Real"],[" ","for (var i = 0; i < array_height_2d(a); ++i;)","\n    {","\n        for (var j = 0; j < array_length_2d(a, i); ++j;)","\n        {","\n            a[i, j] = -1;","\n        }","\n    }"," ","The above code will loop through a 2D array and set each entry to -1."," ","Back: ","Array Functions"," ","Next: ","array_first"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["array_height_2d (Deprecated)"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1486"})