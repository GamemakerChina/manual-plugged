rh._.exports({"0":[[" ","try / catch / finally"]],"1":[["try,catch,finally"]],"2":[[" ","try / catch / finally"]],"3":[[" ","The ","try",", ","catch"," and ","finally"," statements can be used in your game for error checking and permit you to test out blocks of code and control what happens if any ","runtime exceptions"," occur. Using these will prevent the exception ending the game and showing the standard error message to the user, but this means that you will have to handle what happens next in that case, like saving out log files - for example - and ending the game gracefully (note that if you choose to do nothing, your game may become unstable and not perform correctly)."," ","At it's most basic the ","try"," syntax is as follows:"," ","try","\n    {","\n        <statement1>;","\n        <statement2>;","\n        ...","\n    }"," ","However, having a ","try"," without anything to actually handle any exceptions the code may produce will not be very helpful, so we usually pair it with a ","catch",", with the following syntax:"," ","try","\n    {","\n        <statement1>;","\n        <statement2>;","\n        ...","\n    }","\n    catch(<variable>)","\n    {","\n        <statement1>;","\n        <statement2>;","\n        ...","\n    }"," ","What ","catch"," does is permit you to run extra code supplied in the following block when an exception from the previous ","try"," has been caught. If this is a runtime exception, then the supplied variable can be used to access a ","struct"," which will contain the following information:"," ","{","\n    message : \"\",               // a string that is a short message for this exception","\n    longMessage : \"\",           // a string that is a longer message for this exception","\n    script : \"\",                // a string that describes where the exception came from","\n    stacktrace : [ \"\", \"\" ],    // an array of strings that is the stack frame the exception was generated","\n    }"," ","A simple example of use is shown below:"," ","var a = 0, b = 0, c = 0;","\n    try","\n    {","\n        c = a div b;","\n    }","\n    catch( _exception)","\n    {","\n        show_debug_message(_exception.message);","\n        show_debug_message(_exception.longMessage);","\n        show_debug_message(_exception.script);","\n        show_debug_message(_exception.stacktrace);","\n    }"," ","It may be that you want to run some code regardless of whether an exception was thrown or not, and so for that you can add in a ","finally"," block. The ","finally"," syntax is:"," ","finally","\n    {","\n        <statement1>;","\n        <statement2>;","\n        etc...","\n    }"," ","It is worth noting that you can have any combination of these together, ie:"," ","try"," / ","finally"," ","try"," / ","catch"," ","try"," / ","catch"," / ","finally"," ","Note that within the ","finally"," block you ","cannot ","use ","break",", ","continue",", ","exit"," or ","return"," statements as they have no meaning in this context and the compiler will generate an error if they are used."," ","Finally, you can also nest various ","try"," / ","catch"," / ","finally"," within each other, for example:"," ","var a = 0, b = 0, c = 0;","\n    try","\n    {","\n        try","\n        {","\n            c = a div b;","\n        }","\n        finally","\n        {","\n            ++a;","\n        }","\n    }","\n    catch(_exception)","\n    {","\n        ++a;","\n        show_debug_message(_exception.message);","\n        show_debug_message(_exception.longMessage);","\n        show_debug_message(_exception.script);","\n        show_debug_message(_exception.stacktrace);","\n    }","\n    finally","\n    {","\n        show_debug_message(\"a = \" + string(a));","\n    }"," ","It is worth noting that you can take over the default GML error message and use your own handler code by calling the function ","exception_unhandled_handler()",". This ","runtime function"," permits you to supply a custom ","method"," to use that will be called whenever any unhandled exceptions occur in your game."," ","Back: ","Language Features"," ","Next: ","throw"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["try,catch,finally"]],"id":"2449"})