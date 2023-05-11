rh._.exports({"0":[[" ","show_question_async"]],"1":[["show_question_async"]],"2":[["show_question_async"]],"3":[[" ","show_question_async"]],"4":[[" ","This function opens a window and displays the question you define in the function to the user. This is an asynchronous function, and as such ","GameMaker"," does ","not"," block the device it is being run on while waiting for an answer, but rather keeps on running events as normal. The function has two buttons that show \"Yes\" and \"No\", and once the user has pressed one, an asynchronous ","Dialog"," event is triggered which, for the duration of that event ","only",", will have a DS map stored in the variable ","async_load","."," ","This map will contain the two keys, \"","id","\", and \"","status","\". \"id\" is the value that was returned by the function when called, while the \"status\" will be either ","true"," or ","false"," for \"Yes\" and \"No\" respectively."," ","NOTE"," This function is ","for ","debugging and testing use only"," and should not be used in released games. For that purpose you should create a custom user interface to receive input from players so that you have complete control over how the dialogs look and behave."],[" ","show_question_async(string);"," ","Argument"," ","Type"," ","Description"," ","string"," ","String"," ","The question to ask to the user."],[" ","Async Request ID"],[" ","The ","left mouse press event"," (for example) of the object that is showing the message would have the following code:"," ","msg = show_question_async(\"Do you want to buy some armour for \" + string(armour[0, 5]) + \"coins?\");"," ","The above will show a question with the given string, requesting that the user press either \"yes\" or \"No\". The function id is stored in the variable \"msg\" and will be used in the ","Asynchronous Dialog event"," as shown below:"," ","var i_d, stat;","\n    i_d = ds_map_find_value(async_load, \"id\");","\n    if i_d == msg","\n    {","\n        if ds_map_find_value(async_load, \"status\")","\n        {","\n            coins -= armour[0,5];","\n            global.protection += armour[0,0];","\n        }","\n    }"," ","The above code checks the \"id\" key of the returned ","DS Map"," against the value stored in the variable \"msg\". If they are the same, it then checks to see if one of the two buttons were pressed and if it returns ","true"," it will then deduct a value from a variable and add a value to a global variable too."," ","Back: ","Dialog"," ","Next: ","shop_leave_rating"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Extended Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2140"})