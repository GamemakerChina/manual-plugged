rh._.exports({"0":[[" ","object_get_solid"]],"1":[["object_get_solid"]],"2":[[" ","object_get_solid"]],"3":[[" ","This function will tell you whether the object you are checking has been flagged as \"solid\" or not. A solid object generates a special collision event when using the traditional collision system (ie: the physics world is off). Please note that this is not an instance function! So, you can have a solid object and a normal instance of the same object and vice-versa. You can set an individual instances solid flag using the ","solid"," instance variable."],[" ","object_get_solid(obj);"," ","Argument","Type"," ","Description"," ","obj","Object Asset"," ","The index of the object to check."],[" ","Boolean"],[" ","if (!solid) && (object_get_solid(object_index))","\n    {","\n        solid = true;","\n    }"," ","The above code will check the instance running it to see if it is solid or not as well as check the object index of the instance to see if it is flagged as solid or not. If the instance is ","not"," solid yet the object index is flagged as solid, it will set \"solid\" to true for that instance."," ","Back: ","Objects"," ","Next: ","object_get_sprite"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["object_get_solid"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"865"})