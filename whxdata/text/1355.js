rh._.exports({"0":[[" ","layer"]],"1":[["layer"]],"2":[["layer"]],"3":[[" ","layer"]],"4":[[" ","This ","built-in variable"," is created for every instance in a room and contains the layer ID value of the layer that the instance is assigned to. This value can then be used in other functions like ","layer_get_depth()"," or it can be changed to move the instance to another layer, but note that if the layer being assigned does not exist in the current room, then you will get an error that will force your game to close. When assigning a layer, you must supply the unique ","layer ID"," as returned by the function ","layer_get_id()"," (when using named room layers), or as returned by the function ","layer_create()"," (when you create your own layers at run time)."," ","IMPORTANT"," If you have created the instance using the ","instance_create_depth()"," function, or have manually changed the ","depth"," variable, the layer assigned to the instance becomes a \"managed\" layer, which is one that ","GameMaker"," controls and manages automatically. In these cases the ","layer"," variable will return -1."],[" ","layer;"],[" ","Layer"],[" ","layer = layer_create(-1000);"," ","The above code will create a new layer with a depth of -1000 and then set the instance ","layer"," variable to the returned layer ID, moving the instance from the layer it is currently on to the new layer being created."," ","Back: ","Instance Variables"," ","Next: ","alarm"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1355"})