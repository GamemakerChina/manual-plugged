rh._.exports({"0":[[" ","object_is_ancestor"]],"1":[["object_is_ancestor"]],"2":[["object_is_ancestor"]],"3":[[" ","object_is_ancestor"]],"4":[[" ","This function can be used to check an object and see if it is an ancestor or not of another object. So, both arguments need to be object indices and ","not"," the instance ids, and the first one is always the object that you want to find out if it is a child of the second argument, which is always the object that want to check as the ancestor (parent)."],[" ","object_is_ancestor(obj, par);"," ","Argument"," ","Type"," ","Description"," ","obj"," ","Object Asset"," ","The object that is being checked as the child."," ","par"," ","Object Asset"," ","The object that is being checked as the ancestor (parent)."],[" ","Boolean"],[" ","if object_is_ancestor(object_index, obj_Enemy)","\n    {","\n        instance_destroy();","\n    }"," ","The above code checks to see if the instance running the code is a child of the object \"obj_Enemy\", and if so it is destroyed."," ","Back: ","Objects"," ","Next: ","object_set_mask"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"782"})