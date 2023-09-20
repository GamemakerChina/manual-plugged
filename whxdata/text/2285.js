rh._.exports({"0":[[" ","If Variable"]],"2":[[" "," If Variable"]],"3":[[" ","This action is used to check the state of a given variable against a given value using a specific expression. An \"if\" statement will always return either ","true"," or ","false"," and the expressions for checking can be any one of the following:"," ","Equals to"," - The variable and the value are both exactly equal"," ","Less than"," - The variable is less than the value"," ","Greater than"," - The variable is greater than the value"," ","Less than or Equal to"," - The variable is less than ","or"," equal to the value"," ","Greater than or Equal to"," - The variable is greater than ","or"," equal to the value"," ","If you flag the \"Not\" argument, then the above will be negated expressions, for example \"equals to\" becomes \"","not"," equals to\". Also note that neither the variable nor the value arguments are limited to numeric values and can be a string, a pointer, a resource ID or anything else that a function can return or use (see the section on ","data types"," for more information), but you cannot compare two different data types without getting an error - for example if the variable holds a string and you try to check if it is equal to a number then you will get a syntax error."," ","IMPORTANT"," Due to ","floating point precision issues",", checking to see if two values are exactly equal may return ","false",", since one may be exactly 1, while the other may be 1.00000000000001. This can be avoided by using the ","Decimal to Integer"," action before checking or using the \"greater than\" or \"less than\" expressions."," ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:"," ","These actions will now be run if the \"if\" evaluates to ","true",", while any actions dropped elsewhere will be performed after the \"if\" block."],[" ","Argument"," ","Description"," ","Variable"," ","The name of the variable to check."," ","Not"," ","Set to check if the expression does ","not"," evaluate to true."," ","Expression"," ","The type of expression to use for the check."," ","Value"," ","The value to check the variable against."],[" ","The above action block code checks a variable \"dir\" to see if it is equal to 10, and if it is it creates an instance of \"","obj_Squirrel","\" and if it isn't then it destroys the instance."," ","Back: ","Common Actions"," ","Next: ","If Expression"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - If Variable"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"2285"})