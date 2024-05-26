rh._.exports({"0":[[" ","instance_create_depth"]],"1":[["instance_create_depth"]],"2":[["instance_create_depth"]],"3":[[" ","instance_create_depth"]],"4":[[" ","With this function you can create a new instance of the specified object at any given point within the room and at the depth specified. The depth can be any value, where the lower the depth the \"nearer\" to the camera things will be drawn and the higher the depth the further away, so an instance at depth -200 will be drawn over an instance at depth +300 (for example)."," ","Note that this function will actually create a room layer for the instance, since all instances ","must"," be on a layer in the room, but since this is a ","managed"," layer (i.e.: not one that you have created through code or in the room, but one that ","GameMaker"," has created automatically). You cannot access that layer, and the ","layer"," instance variable will return ","-1","."," ","IMPORTANT"," There is a minimum and maximum layer depth of ","-16000"," to ","16000",". Anything placed on a layer outside that range will not be drawn although all events will still run as normal for anything on the layer."," ","NOTE"," This function behaves differently when you call it after calling a room-changing function in the same event. See the note on ","room_goto"," for details."," ","This function returns the ","id"," of the new instance which can then be stored in a variable and used to access that instance. Note that this function will also call the ","Create Event"," of the instance being created ","before"," continuing with the code or actions for the event that called the function."],[" ","The last argument, ","var_struct",", is optional and takes a struct containing additional variables for the new instance."," ","Variables from this struct are applied to the new instance ","before"," its Create event runs, but ","after"," its ","Variable Definitions"," are set."," ","This means that the values from that struct are readable in the Create event of the new instance. See ","Example 2"," at the bottom."," ","Values applied to the new instance through this struct can be of any type, including ","method"," variables. ","Built-in variables"," can be changed as well."," ","NOTE"," Variables from the struct are \"shallow-copied\" to the new instance, meaning any arrays, structs, and other resources are copied by reference and not duplicated."],[" ","instance_create_depth","(x, y, depth, obj, [var_struct]);"," ","Argument"," ","Type"," ","Description"," ","x"," ","Real"," ","The x position the instance of the given object will be created at"," ","y"," ","Real"," ","The y position the instance of the given object will be created at"," ","depth"," ","Real"," ","The depth to assign the created instance to"," ","obj"," ","Object Asset"," ","The object index of the object to create an instance of"," ","var_struct"," ","Struct"," ","OPTIONAL"," A struct with variables to assign to the new instance"],[" ","Object Instance"],[" ","var inst = ","instance_create_depth","(x, y, -100, obj_Bullet);","\n    with (inst)","\n    {","\n        speed = other.shoot_speed;","\n        direction = other.image_angle;","\n    }"," ","The above code creates a new instance of the object ","obj_bullet"," at ","-100"," depth, and stores the instance ID in a variable. This variable is then used to assign ","speed"," and ","direction"," to the new instance."," ","This will first create the instance, run its Create event, and ","then"," assign values to its variables."," ","If you want to assign some variables ","before"," the Create event runs, see the example below."],[" ","var inst = instance_create_depth(x, y, -100, obj_bullet,","\n    {","\n        speed : shoot_speed,","\n        direction : image_angle","\n    });"," ","The above code creates an instance of ","obj_bullet",", and passes in a struct as the last argument."," ","That struct has variables for the speed and direction. It pulls its values from the calling instance, without the need to use ","other","."," ","These variables are applied to the new instance before its Create event runs."," ","You're not limited to a struct literal, as you can also pass in a variable that stores an existing struct, or create a ","new"," struct from a ","constructor","."," ","Back: ","Instances"," ","Next: ","instance_destroy"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1:"],[" ","Example 2:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"8":[[" ","Optional Struct"]],"id":"2624"})