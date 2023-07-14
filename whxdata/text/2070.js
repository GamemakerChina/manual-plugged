rh._.exports({"0":[[" ","Function Call"]],"1":[["Function Call"]],"2":[[" "," Function Call"]],"3":[[" ","This action can be used to call any ","GML function"," or any ","user-defined function",". You give the function to call and then supply any additional\n    ","arguments"," that it requires, ie: any values (strings, integers, resource indices, etc...) that you wish to input into the function so that it can use them. You can add additional argument inputs by clicking the plus icon "," ","beside\n    the action, and you should ensure that your argument count matches that of the function being used (ie: if the function requires 3 arguments, you should supply 3 arguments). Some functions can also return a value for later use in the action block\n    list, and so you can also specify the ","target variable"," that should store this return value, which can have been created previously or can be a new temporary local one (if you check the \"","Temp","\" check-box). Both the target\n    and the argument fields can be left blank if they are not required."],[" ","Argument"," ","Description"," ","Function"," ","The GML function to call."," ","Argument","0"," ... Argument","X"," ","The different arguments (values) that are to be passed to the function."," ","Target"," ","The name of the variable that is to be targeted for any returned values (can be left blank)."],[" ","The above action block code checks to see if an instance of \"","obj_Player","\"\n    exists and if it does it calls the ","point_distance()"," ","function, passing in the current instances x and y position,\n    as well as the \"","obj_player","\" x and y position. It will return the distance between the two points to the (previously created) ","dist"," instance variable, or set the variable to 0 if there is no instance of\n    \"","obj_Player","\" in the room."," ","Back: ","Common Actions"," ","Next: ","Apply To..."]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Function Call"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"2070"})