rh._.exports({"0":[[" ","weak_ref_any_alive"]],"1":[["weak_ref_any_alive"]],"2":[["weak_ref_any_alive"]],"3":[[" ","weak_ref_any_alive"]],"4":[[" ","With this function you can check the ","weak reference"," to various ","structs"," to see if it they are still \"alive\" or not. You supply an array of weak references to check (each weak reference should have been created using the function ","weak_ref_create","), and the function will return ","true"," if ","any ","of the structs are still being referenced somewhere or ","false"," if they are not and have been garbage collected. Note that if you supply an array where any of the values are not a weak references, the function will return ","undefined","."," ","Note that the function also takes two optional arguments, where the first permits you to supply an initial index into the array to check from, as well as an argument to set the number of positions (length) from that index to check. If specified, only the array indices within those parameters will be checked."],[" ","weak_ref_any_alive","(array, [index], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," of ","Struct Weak Reference","s"," ","Array containing weak references to the structs that you want to check."," ","index"," ","Real"," ","OPTIONAL"," The index into the array to start checking from"," ","length"," ","Real"," ","OPTIONAL"," The number of positions, starting from the given index, to check for"],[" ","Boolean"," (or undefined)"],[" ","if ","weak_ref_any_alive","(inventory_ref_array)","\n    {","\n        instance_destroy(obj_Inventory_Control);","\n    }"," ","The above code checks an array of weak references and if any are still alive then an instance is destroyed."," ","Back: ","Garbage Collection"," ","Next: ","gc_collect"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2218"})