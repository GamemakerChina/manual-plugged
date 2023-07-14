rh._.exports({"0":[[" ","external_call"]],"1":[["external_call"]],"2":[[" ","external_call"]],"3":[[" ","If you have created an external function call to a ","dll"," or ","dylib"," using ","external_define()",", you can use this function to then call it. You supply the name of the previously defined function as well as each of the arguments it requires (each argument must be of the correct type, either real or string) and the function returns the result of the external call."],[" ","external_call(id, args[0...15]);"," ","Argument"," ","Type"," ","Description"," ","id"," ","External Function"," ","The name of the function that you want to call"," ","args[0...10]"," ","Real"," or ","String"," ","The different arguments that you want to pass through to the external function"],[" ","Any"," (the type of value returned will depend on the defined function)"],[" ","my_function = external_define(\"MyDLL.dll\", \"MyMin\", dll_cdecl, ty_real, 2, ty_real, ty_real);","\n    var _a = external_call(my_function, x, y);"," ","The above example code calls a previously defined external function and stores the returned value in a local variable."," ","Back: ","OS And Compiler"," ","Next: ","external_free"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["external_call"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1053"})