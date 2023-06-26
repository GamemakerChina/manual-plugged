rh._.exports({"0":[[" ","debug_event"]],"1":[["debug_event"]],"2":[[" ","debug_event"]],"3":[[" ","This function generates a custom debug event that will be shown in the Graph View of ","The Debugger"," when a game is being run in ","Debug Mode",". If you require messages to be displayed when ","not"," in debug mode, use ","show_debug_message","."," ","The function will also take five reserved strings to help perform debugging using external applications like Visual Studio. These strings are:"," ","\"","OutputDebugOn","\" - This enables a call to ","OutputDebugString"," for the ","Windows"," target, which means that all debug output - everything you see in ","The Output Window"," - can be viewed by Visual Studio or by 3rd party apps."," ","\"","OutputDebugOff","\" - Disables the behaviour described above."," ","\"","BreakOnError","\" - This option is for ","Windows YYC"," builds only, and means that projects will ","not"," display the usual code error screen if the runtime detects an error, but instead just carry on and crash. This allows you to see the stack trace within Visual Studio if debugging."," ","\"","ResourceCounts","\" - Lists all the currently active resources, such as Data Structures, Time Sources, Surfaces, etc. Also returns a struct (info given below). Set the optional ","silent"," argument to ","true"," to only return the struct."," ","\"","DumpMemory","\" - Gives information on the current memory usage. Also returns a struct (info given below). Set the optional ","silent"," argument to ","true"," to only return the struct."," "," ","ResourceCounts"," "," ","When you call ","debug_event"," with the ","\"ResourceCounts\""," argument, it returns a struct with information about all the active resources in your game."," ","Each resource is represented with three properties:"," ","\"<resource>Count\"",": The number of resources of this type that exist when the function is called"," ","\"<resource>MaxIndex\"",": The maximum valid integer index that exists for the resource"," ","\"<resource>ArrayAllocatedSize\"",": The highest number of resources that were ever created for the given resource type"," ","The struct has the following members:"," ","listCount"," ","listMaxIndex"," ","listArrayAllocatedSize"," ","mapCount"," ","mapMaxIndex"," ","mapArrayAllocatedSize"," ","queueCount"," ","queueMaxIndex"," ","queueArrayAllocatedSize"," ","gridCount"," ","gridMaxIndex"," ","gridArrayAllocatedSize"," ","priorityCount"," ","priorityMaxIndex"," ","priorityArrayAllocatedSize"," ","stackCount"," ","stackMaxIndex"," ","stackArrayAllocatedSize"," ","mpGridCount"," ","mpGridMaxIndex"," ","mpGridArrayAllocatedSize"," ","bufferCount"," ","bufferMaxIndex"," ","bufferArrayAllocatedSize"," ","surfaceCount"," ","audioEmitterCount"," ","audioEmitterMaxIndex"," ","audioEmitterArrayAllocatedSize"," ","partSystemCount"," ","partSystemMaxIndex"," ","partSystemArrayAllocatedSize"," ","partEmitterCount"," ","partTypeCount"," ","partTypeMaxIndex"," ","partTypeArrayAllocatedSize"," ","timeSourceCount"," ","spriteCount"," ","pathCount"," ","fontCount"," ","roomCount"," ","timelineCount"," "," ","DumpMemory "," "," ","When you call ","debug_event"," with the ","\"DumpMemory\""," argument, it returns a struct with information about your game's memory usage."," ","The members of the struct will differ based on the platform, however all platforms will at least have the following values in the struct (in bytes):"," ","totalUsed",": How much memory your game is using at the moment"," ","free",": How much allocated memory is unused"," ","peakUsage",": The highest amount of memory your game used since it was started"," ","The way these values are measured is different on each platform."],[" ","debug_event","(string, [silent]);"," ","Argument"," ","Type"," ","Description"," ","string"," ","String"," ","The custom debug event string to use or one of the five reserved strings."," ","silent"," ","Boolean"," ","OPTIONAL"," This parameter makes the function silently return the result to the runner in a struct rather than printing the value to the console. Defaults to ","false","."],[" ","Struct"," (for some options) or ","N/A"],[" ","if !surface_exists(global.EffectsSurface)","\n    {"," ","debug_event","(\"Recreating Effects Surface\");","\n        global.EffectsSurface = surface_create(room_width, room_height);","\n    }"," ","The above code checks to see if a surface exists and if it does not, a debug event is triggered in the graph view of the debugger (the game must have been run in Debug Mode for this to be visible) and the surface is recreated."],[" ","var _counts = ","debug_event","(\"ResourceCounts\");"," ","The above code triggers a debug event with the message \"ResourceCounts\". As this is a reserved string, resource counts are output to the console and also returned in a struct. This struct is stored in a temporary variable ","_counts",". To suppress the output to the console, set the second parameter to ","true",": "," ","var _counts = ","debug_event","(\"ResourceCounts\", true);"," ","Back: ","Debugging"," ","Next: ","debug_get_callstack"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["debug_event"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1: Custom String"],[" ","Example 2: Reserved Strings"]],"id":"2680"})