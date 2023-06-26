rh._.exports({"0":[[" ","If Expression"]],"1":[["If Expression"]],"2":[[" "," If Expression"]],"3":[[" ","This action is used to check that an expression as either ","true"," or ","false",", and you can check any logical expression here as long as it evaluates to one or the other value. For example, any of the following expressions could be used:"," ","x < (room_width / 2)"," a == b"," ++val >= 100"," ","If you flag the \"Not\" argument, then the above will be negated expressions, for example \"","==","\" becomes \"","not","=","\". Also note that the ","expression"," is not limited to numeric values and you can check strings, pointers, resource IDs or anything else that a function can return or use (see the section on ","data types","    for more information), but you cannot compare two different data types without getting an error - for example if you try to use a string and an integer in the expression you will get an error. For more information on expressions, see ","here"," ."," ","IMPORTANT NOTE",": Due to ","floating point precision issues",", checking to see if two values are exactly equal may return ","false",", since one may be exactly 1, while\n    the other may be 1.00000000000001. This can be avoided by using the ","Decimal to Integer"," action before checking or using the \"greater than (>)\" or \"less than (<)\" expressions."," ","Note that to add actions into the \"","if","\" block, they should be dropped to the side of the action, as shown in the image below:"," ","These actions will now be run if the \"if\" evaluates to ","true",", while\n    any actions dropped elsewhere will be performed after the \"if\" block. Note that you can \"stack\" expressions in the same action by clicking the plus icon "," ","beside\n    the action, and giving another expression to check. This will check if ","all"," the expressions given return ","true"," in one check and only perform the added action code if they do (see the example given below)."],[" ","Argument"," ","Description"," ","Expression"," ","The expression to check."," ","Not"," ","Set to check if the expression does ","not"," evaluate to true."],[" ","The above action block code checks to see if the instance variable \"","player_score","\"\n    is greater than 1000 ","and"," that the instance variable \"","player_level","\" is less than 10. if both checks return ","true"," then the action code goes on to assign new values to these variables."," ","Back: ","Common Actions"," ","Next: ","If Undefined"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - If Expression"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"2299"})