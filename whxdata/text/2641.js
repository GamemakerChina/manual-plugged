rh._.exports({"0":[[" ","Static Variables"]],"1":[["Static Variables,static"]],"2":[[" ","Static Variables"]],"3":[[" ","An interesting feature of ","script functions"," and ","method variables"," is that they can have ","static variables",". A static variable is one that is defined the first time that the function is called and that will maintain its value from then onward. To create a static variable you need to define it using the ","static"," keyword, as shown in this simple example:"," ","counter = function()","\n    {","\n        static num = 0;","\n        return num++;","\n    }"," ","In the above example, the variable ","num"," is a static variable, and so will be defined as ","0"," the first time the function is called, but every time the function is called after that, the variable initialisation will be ignored. So, if you then call this function like this:"," ","repeat (10)","\n    {","\n        show_debug_message(counter());","\n    }"," ","The output will be:"," ","0","\n    1","\n    2","\n    3","\n    4","\n    5","\n    6","\n    7","\n    8","\n    9"," ","If you didn't use the ","static"," keyword here then the output would simply be ","0"," for every iteration of the loop, since the variable ","num"," will be getting defined as ","0"," every time the function is called before being returned. Note that a static variable can only be changed inside the original function, and returning it will simply give you a copy of its value - essentially the shared static variable can only be changed by the function that contains it."],[" ","You can also use static variables in ","constructor functions",". These functions are used to create new structs that contain the variables defined within the function."," ","Static variables in constructors are only initialised once for that constructor, and ","they are not duplicated"," for each new struct made from the constructor."," ","This means that no matter how many structs you create from a constructor, they will all ","share the same value"," for each static variable they have."," ","function weapon() constructor","\n    {","\n        static number_of_weapons = 0;","\n        number_of_weapons++;","\n    }"," ","\n    var _weapon1 = new weapon();","\n    var _weapon2 = new weapon();"," ","\n    show_debug_message(_weapon1.number_of_weapons); // Prints 2\n  "," ","In the example above, the ","weapon"," constructor holds a static variable called ","number_of_weapons",", which is shared across all of its structs. With each new call to the ","weapon"," constructor, the ","number_of_weapons"," value goes up by 1."," ","After being called twice, the value of that variable becomes ","2",", which can be read from any of its structs, or from the constructor directly by writing ","weapon.number_of_weapons","."],[" ","You can read a static value for a function using the ","<function_name>.<static_variable>"," syntax."," ","Say, for a function called ","counter",", you have a static variable ","count",". You can access that by typing ","counter.count"," after its first call."," ","function counter() {","\n        static count = 0;","\n        return count ++;","\n    }"," ","\n    repeat (10) ","\n    {","\n        counter()","\n    }"," ","\n    show_debug_message(counter.count);\n  "," ","You can't access a static variable from a function that was never called, as static variables are initialised on the first call to a function. Trying to do so will give you an error and crash your game."," ","For constructors, you can access static variables from the constructor function directly, or from any of the structs created from the constructor:"," ","function weapon() constructor","\n    {","\n        static number_of_weapons = 0;","\n        number_of_weapons ++;","\n    }"," ","\n    var _weapon1 = new weapon();","\n    var _weapon2 = new weapon();"," ","\n    show_debug_message(weapon.number_of_weapons);   // Accessing from constructor directly","\n    show_debug_message(_weapon1.number_of_weapons); // Accessing from a struct","\n    show_debug_message(_weapon2.number_of_weapons); // Accessing from a struct\n  "," ","All three ","show_debug_message()"," calls above would print the same value, as they are reading the exact same variable."," ","Just like with regular functions, you can't access a static variable from a constructor if that constructor was never called."],[" ","All static variables belonging to a function are stored in a struct, which you can retrieve using ","static_get",". You can modify the static struct of a function to change the static variables it has using ","static_set",", however this function is only provided for use with structs for deserialisation purposes."," ","Static structs have most of their use with structs created from constructors. See: ","Static Struct"],[" ","A static variable is always initialised at the top of the function, so no matter where you define a static variable in the function, it will always be available to be read and changed throughout the function (even if it's used before being defined). See the following example:"," ","function add_health()","\n    {","\n        my_health++;","\n        show_debug_message(my_health);","\n        static my_health = 1;","\n    }"," ","Here the static variable \"","my_health","\" is being changed and printed to the compiler output ","before"," being initialised. While that looks wrong, it is perfectly fine because static variables are initialised ","before ","any function code is executed. Note that if there are multiple static variables in a function, the order in which they were defined will be kept when they are initialised at the top."," ","When using inheritance with constructors, any static variables in the child constructor will only be initialised once the parent constructor has been executed, so the child constructor's static variables will not override the parent's static variables. See the following example:"," ","function parent() constructor","\n    {","\n        show_debug_message(value);","\n        static value = 10;","\n    }"," ","\n    function child() : parent() constructor","\n    {","\n        show_debug_message(value);","\n        static value = 20;","\n    }"," ","\n    var _child = new child();\n  "," ","Calling the ","child()"," constructor prints this to the output log:"," ","10","\n    20"," ","The first value is from the parent constructor, and the second is from the child constructor. This shows that the child's static variable ","value"," was not initialised until the parent constructor was finished, and that in each constructor the static variable was initialised before the ","show_debug_message()"," call."],[" ","You can also use the ","static"," keyword within a function to create a ","static function",", which - like with variables - simply means that the function will only be defined once, which is the first time the function is called, for example:"," ","function(_x, _y) Vector2 constructor","\n    {","\n        x = _x;","\n        y = _y;"," ","\n        static Add = function( _other )","\n        {","\n            x += _other.x;","\n            y += _other.y;","\n        }","\n    }\n  "," ","In the above example, the ","constructor function"," ","Vector2"," can be used to create a struct, and the struct will have some variables, one of which is the method variable ","Add",". Since this variable has been defined as static, the function it contains will only be initialised ","once ","the first time the ","Vector2"," function is called, and all further structs created with this constructor will reference the function ","Add"," that was created initially, instead of creating a new function for each struct (for more information on structs and the ","constructor"," keyword please see ","here",")."," ","Back: ","GML Overview"," ","Next: ","Arrays"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["Static Variables"]],"7":[[" ","Statics with Constructors"],[" ","Accessing Static Variables"],[" ","Initialisation Order"],[" ","Static Methods"]],"8":[[" ","Static Struct"]],"id":"2641"})