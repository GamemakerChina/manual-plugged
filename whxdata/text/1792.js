rh._.exports({"0":[[" ","matrix_get"]],"1":[["matrix_get,matrix_view,matrix_projection,matrix_world"]],"2":[["matrix_get,matrix_view,matrix_projection,matrix_world"]],"3":[[" ","matrix_get"]],"4":[[" ","This function returns an ","array"," of 16 values, corresponding to the given 4x4 matrix type, where row 1 is elements [0 - 3], row 2 is elements [4 -7], etc... (see the image on the ","main page","). The available matrices are ","view",", ","projection"," and ","world",", for which you would use one of the following constants:"," ","Matrix Type Constant"," ","Constant"," ","Description"," ","matrix_view"," ","The current view matrix"," ","matrix_projection"," ","The current projection matrix"," ","matrix_world"," ","The current world matrix"],[" ","matrix_get(type);"," ","Argument"," ","Type"," ","Description"," ","type"," ","Matrix Type Constant"," ","The type of matrix to get (see the ","constants"," listed above)"],[" ","Matrix Array"],[" ","v_array = matrix_get(matrix_view);"," ","The above code will get the values of the current view matrix and populate the array \"v_array\" with them."," ","Back: ","Matrix Functions"," ","Next: ","matrix_set"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1792"})