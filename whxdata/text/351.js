rh._.exports({"0":[[" ","room_persistent"]],"1":[["room_persistent"]],"2":[[" ","room_persistent"]],"3":[[" ","This variable can be used to get and to set the persistent flag for the current room. If set to ","true"," the room is considered persistent, in which case each time you leave the room and come back again the state of the instances within that room will have been maintained. However if it is flagged as ","false",", each time you return to the room it will be reset to its initial state. You should note that a persistent room uses considerably more memory than a normal room and it is not recommended to have too many of them in your game."],[" ","room_persistent;"],[" ","Boolean"],[" ","if lives < 1","\n    {","\n        room_persistent = false;","\n        room_goto(rm_start);","\n    }"," ","The above code checks the variable \"lives\" and if it is less than 1, it will set the room persistence to ","false"," and then change rooms."," ","Back: ","Rooms"," ","Next: ","room_get_name"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["room_persistent"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"351"})