rh._.exports({"0":[[" ","Get Gamepad Axis"]],"1":[["Get Gamepad Axis"]],"2":[[" "," Get Gamepad Axis"]],"3":[[" ","You can use this action to get the value of the different axes from a given gamepad. You supply the gamepad index (this is the number of \"slot\" that a gamepad occupies) and select the axis to check from either the left or right stick, horizontal\n    or vertical. The value returned will be between -1 and 1 for each of the available horizontal and vertical axes: -1 is left and 1 is right for horizontal axis, and -1 is up and 1 is down for the vertical axis. This returned value will be stored in\n    the target variable that you supply for future use, which you can flag as a \"Temp\" variable, meaning that the action will create a new temporary (local) variable to hold the return value for you, as shown in the example below."," ","It is worth noting that ","setting the deadzone"," for the stick axis will ","not"," affect the returned value, which will always be between -1 and 1. For example, setting the deadzone to 0.2 will mean that pushing\n    the stick right will only start returning a value from 0 - 1 when the ","raw"," axis value is over 0.2 - so when the raw value is 0.2, the return value will be 0, when the raw value is at 0.5, the return value will be 0.375, or if the raw value\n    is 0.9, then the return value would be 0.875."],[" ","Argument"," ","Description"," ","Gamepad"," ","The gamepad index."," ","Axis"," ","The axis to check (left stick/right stick, horizontal/vertical)"," ","Target"," ","The target variable to store the returned value in."],[" ","The above action block code creates two local (temporary) variables and then stores the current\n    values for the horizontal and vertical axis of the gamepad left stick. These values are then used to set the direction of the instance."," ","Back: ","Gamepad Actions"," ","Next: ","Gamepad Get Trigger"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Get Gamepad Axis"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"1855"})