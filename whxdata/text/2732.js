rh._.exports({"0":[[" ","Script Functions And Variables"]],"1":[["user defined functions,script functions,gmcallback_,gmcallback"]],"2":[[" ","Script Functions And Variables"]],"3":[[" ","Script assets are essentially a collection of one or more user defined functions or variables that you write yourself as snippets of code in the ","Script Editor",". The functions you define in a script can resolve expressions, return values or do anything else that the GameMaker Language permits, just like the built in ","runtime functions","."," ","Script functions should generally be used if you have a block of code that you use in more than one place or object, or when you want a block of code to be used across multiple objects in a modular fashion. Using scripts to define functions means that you can change the function just once when required and the change will be \"picked up\" by every object that has a call to the function."," ","Scripts can also be very handy from an organisational point of view, as they permit you to create groups of functions that belong to a certain category - for example, you might have several functions all related to collisions between instances in your game, so you would create a \"","Collision_Functions","\" script and store all these functions together in it."," ","Also see: ","Script Functions vs. Methods"],[" ","When creating a script with functions in it, the functions must be created using the following formats:"," ","function name( parameter1, parameter2, ... )","\n      {"," ","    statement1;"," ","    statement2;"," ","    ..."," ","}"," ","or:"," ","name = ","function( parameter1, parameter2, ... )"," ","{"," ","    statement1;"," ","    statement2;"," ","    ..."," ","}"," ","To create a function in GML Visual, use ","Declare A New Function",". Enable its \"Temp\" option to create a method variable (second syntax shown above)."," ","In general, however, you would use the ","first ","form for script functions as it will define the function as specifically being a script function, meaning that it will be ","global ","in ","scope",", be assigned a ","script index",", and not require the ","global"," prefix to identify it since the compiler will recognise it as a script function."," ","Using the second form will instead be generating a global scope ","method variable",", and as such it will ","not ","be recognised as a script function by the IDE and will require the use of the ","global"," prefix when being referenced in your code."," ","NOTE"," You can check this by using both forms in a script and then calling the runtime function ","typeof()"," on each of them. One will be classed as a \"number\" - since it returns a script index ID - and the other will be classed as a \"method\"."],[" ","You can define your own parameters/arguments for a function, which will be available to the function as local variables and can be used for any purpose within that function:"," ","function move(","spd, dir",")","\n    {","\n        speed = ","spd",";","\n        direction = ","dir",";","\n    }"," ","This function takes two arguments and applies their values to the instance's ","speed"," and ","direction"," variables. It can now be called like any runtime function and arguments can be passed into it:"," ","var _mouse_dir = point_direction(x, y, mouse_x, mouse_y);"," ","move(4, _mouse_dir);"],[" ","Arguments passed into a function can also be accessed through the ","argumentN"," variables (","argument0, argument1, etc.",") or the ","argument[]"," array (","argument[0], argument[1], etc.",")."," ","You can get the number of arguments passed into the function using ","argument_count",", thus allowing a variable number of arguments to be passed in."," ","function print(){","\n        var _str = \"\";"," ","\n        for (var i = 0; i < argument_count; i ++)","\n        {","\n            _str += string(argument[i]);","\n        }"," ","\n        show_debug_message(_str);","\n    }"," ","\n    // In an object","\n    print(\"Player : \", current_time, \" : \", id, \" : fired\");\n  "," ","This ","print()"," function loops through all the passed arguments, and adds them to a string variable. That string is then printed to the output log."," ","You can now call this function with as many strings as you like, which will all be joined together."],[" ","If an argument is not given to a function, its value will be ","undefined",". You can use this to define ","optional"," arguments, and check whether an argument is passed in or not by checking if it is equal to ","undefined",". However, you can also explicitly define a default value for an argument which will be used instead of ","undefined"," when it is not passed in."," ","You can assign such a default value to a parameter using the equal (","=",") sign, making it an optional variable:"," ","function move(spd, ","dir = 90",")","\n    {","\n        speed = spd;","\n        direction = dir;","\n    }"," ","If the ","dir"," argument is not passed in when calling the above function, then its value will default to ","90",", moving the instance in an upward direction."," ","TIP"," You can omit arguments from function calls and they will default to ","undefined"," (or the default value for that argument as defined by the function)."," ","\n    For example, writing ","my_func(0,,,1)"," is the same as writing ","my_func(0, undefined, undefined, 1)",".\n  "," ","The default value of an optional variable can be an expression, so for example, you can use variables and call functions while defining an optional variable. Note that such an expression will only be executed if its optional argument is not provided in the function call. See the following example of a logging function:"," ","function log(text = \"Log\", object = object_index, time = date_datetime_string(date_current_datetime()))","\n    {","\n        var _string = \"[\" + string(time) + \"] \";","\n        _string += object_get_name(object) + \": \";","\n        _string += text;"," ","\n        show_debug_message(_string);","\n    }"," ","This function takes three arguments, where the first argument defaults to a string constant, the second argument defaults to an instance variable (in the scope of the calling instance) and the third argument defaults to an expression calling a function to retrieve the current date and time. This function can now be called with up to three arguments, as seen in the following example:"," ","log();","\n    // Prints: [09-Jun-21 12:34:37 PM] Object1: Log"," ","\n    log(\"Player Shot\", obj_player, 10);","\n    // Prints: [10] obj_player: Player Shot\n  "],[" ","We also recommend that you add comments to define the properties of the function (see the section on ","JSDoc Comments"," for more details), such that a simple script would look like this:"," ","/// @function                 log(message);","\n    /// @param {string}  message  The message to show","\n    /// @description              Show a message whenever the function is called."," ","\n    function log(message)","\n    {","\n        show_debug_message(message);","\n    }\n  "," ","Additional functions for the script can be added using the same format as shown above, one after the other within the script asset."],[" ","Functions in scripts can also return a value, just as runtime functions can, and as such they can be used in expressions. For this you would use the ","return"," statement:"," ","return <expression>"," ","It should be noted that the ","execution of the function ends at the return statement",", meaning that any code which comes after ","return ","has been called ","will not be run",". Here is a short example function from a function called \"","sqr_calc","\" which calculates the square of whatever value is passed to it, and in case the given value is not a real number, it uses ","return"," to end the function early so the actual calculation never runs:"," ","/// @function           sqr_calc(val);","\n    /// @param {real}  val  The value to calculate the square of","\n    /// @description        Calculate the square of the given value"," ","\n    function sqr_calc(val)","\n    {","\n        if !is_real(val)","\n        {","\n            return 0;","\n        }"," ","\n        return (val * val);","\n    }\n  "," ","Note that if you create a script function with ","no"," return value then in your code check for one, you will get the value ","undefined"," by default."," ","To call a script function from within a piece of code, just use it the same way as when calling any runtime function - that is, write the function name with the parameter values in parentheses. So, the above script would be called like this:"," ","if keyboard_check_pressed(vk_enter)","\n    {","\n        val = scr_sqr(amount);","\n    }"," ","NOTE",": When using your own functions from scripts in the code editor, you can press"," "," or click the middle mouse button "," ","on the function name to open the script that contains it for editing directly."],[" ","It is important to understand that script ","names"," are ","independent of the functions that they contain",", so you can name your scripts in a more \"common sense\" way, ie: all your AI functions could go in a script \"","Enemy_AI","\" (following the standard asset naming conventions of alpha-numeric characters and the under-bar \"_\" only). However, you can still call scripts in your game - and you can name scripts the same as a function that you define in them - which can give rise to a issues due to the way that ","GameMaker"," stores asset references. To give an example consider this code, called from an instance:"," ","function indirectCall(func, arg)","\n    {","\n        func(arg);","\n    }"," ","\n    indirectCall(myscript, arg);\n  "," ","The above code is attempting to call a script called \"myscript\" within a method, which in this case will fail. This is because the in-line function is actually using the ","index"," for the script asset and ","not ","actually calling the script function - eg: if the script index resolves to \"4\", essentially the function is calling ","4(arg);",", which makes no sense. The code should instead be structured in one of the following two ways:"," ","function indirectCall(func, arg)","\n    {","\n        func(arg);","\n    }"," ","\n    indirectCall(method(undefined, myscript), arg);"," ","\n    // OR"," ","\n    function indirectCall(func, arg)","\n    {","\n        script_execute(func, arg);","\n    }"," ","\n    indirectCall(myscript, arg);\n  "," ","This is important to note, especially when working with legacy projects where scripts contain one single function, and the function is named the same as the script. However, you really should ","never"," do this, and your scripts should be named independently of the functions they contain."," ","NOTE"," Keep in mind that if your script is ","completely empty",", it will not be loaded into the compiled game and will become non-existent; meaning that trying to reference such a script asset will crash your game. Note that this only applies to scripts that are completely empty, so even if your script only contains comments, it will still be included in the compiled game."],[" ","This leads us to the final and most important thing to know about scripts and the functions they contain: scripts are parsed on a ","global"," level and will be ","compiled at the very start of the game",". This means that ","technically"," all functions in a script are \"unbound\" ","method variables",", and any variables declared outside of a function in the script will be considered ","global variables",". For example, consider this script:"," ","function Foo()","\n    {","\n        // Do something","\n    }","\n    blah = 10;","\n    function Bar()","\n    {","\n        // Do something else","\n    }"," ","In the above case, not only have we defined the functions ","Foo"," and ","Bar"," but also the variable ","blah"," and all of them are considered to have been created in the ","global"," scope. The functions don't need the ","global"," keyword to be recognized as the compiler understands that these functions are part of the script, but if you wanted to access ","blah"," then you would need to do:"," ","val = global.blah;"," ","That said, we recommend that you ","always explicitly type global variables"," when creating them in scripts to prevent any issues later. Scripts are also an ideal place to define any ","Macros"," or ","Enums"," (","constants","), as adding them to a script outside of a function also means that they will be created for use before the game code actually starts running. Below is an example of a script that is creating different global scope values for a game:"," ","/// Initialise All Global Scope Values And Constants","\n    global.player_score = 0;","\n    global.player_hp = 100;","\n    global.pause = false;","\n    global.music = true;","\n    global.sound = true;"," ","\n    enum rainbowcolors","\n    {","\n        red,","\n        orange,","\n        yellow,","\n        green,","\n        blue,","\n        indigo,","\n        violet","\n    }"," ","\n    #macro weapon_num 3","\n    #macro weapon_gun 0","\n    #macro weapon_bomb 1","\n    #macro weapon_knife 2\n  "," ","Note how all these constants are set up outside of any function call, meaning they will be initialised before everything else and at a ","global ","scope. This means that if you want to use a script to initialise variables on an ","instance ","scope then you must wrap them in a function, for example:"," ","/// @function                init_enemy();","\n    /// @description             Initialise enemy instance vars"," ","\n    function init_enemy()","\n    {","\n        hp = 100;","\n        dmg = 5;","\n        mana = 50;","\n    }\n  "," ","So, scripts can be used to generate macros, enums and global variables before the game starts so they are ready for use at any time, and they can also be used to create \"unbound\" methods (user-defined functions) that can be used in your game like GML runtime functions."," ","One final thing to note about script functions is that if you are developing for ","Web ","(ie: targeting ","HTML5","), then there is an additional function protocol that you can use when adding functions to scripts, which is to prefix a function name with ","gmcallback_",", for example:"," ","gmcallback_create_button"," ","Using the above function name would mean that the function ","gmcallback_create_button()"," will not be obfuscated and so can be used in JavaScript extensions and other areas of your game, for example, when using the ","clickable_*"," functions."],[" ","Functions can also make use of static variables, which maintain their values throughout every function call. Please ","read this page"," for more information."," ","Back: ","GML Overview"," ","Next: ","Method Variables"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["Script Functions And Variables"]],"7":[[" ","Creating Functions"],[" ","Parameters/Arguments"],[" ","Index-Based Arguments"],[" ","Optional Arguments"],[" ","JSDoc"],[" ","Return Value"],[" ","Script Names vs. Function Names"],[" ","Script Scope"],[" ","Static Variables"]],"id":"2732"})