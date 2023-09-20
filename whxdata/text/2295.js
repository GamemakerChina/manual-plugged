rh._.exports({"0":[[" ","Start Following Path"]],"1":[["Start Following Path"]],"2":[[" "," Start Following Path"]],"3":[[" ","This action will start an instance following along a path that has been created in the Asset Browser. You would then use this action to tell your instance which path to follow, what speed to follow the path (measured in pixels per game frame), how to\n    behave when it reaches the end of the path, and whether to follow the absolute or relative path position. When setting the speed you can use negative values to signify that the instance should follow the path in reverse and it's worth noting that\n    the speed you set here can be modified by the speed modifier set in the path editor for each path point, so if you set the path speed to 2 and in the path one of the points has a speed modifier of 200%, then the actual speed at that point will be\n    4 pixels per game frame."," ","Once you've set the initial path speed you can set how the instance should behave when it reaches the end of the path from the following options (note that when an instance reaches the end of a path this will also trigger an ","Other - Path Ended Event","):"," ","Stop",": End the path, stopping the instance on the last path point."," ","Restart",": Continue the path from the start, jumping to the start position again if the path is not marked as closed in the Path Editor."," ","Loop",": Continue from the current position to run the path again."," ","Reverse",": Go backwards along the path again (achieved by reversing the path follow speed), and when it reaches the start of the path, it will reverse again, etc..."," ","Finally, you can flag the path as being ","Absolute ","or not. By default the instance will start following the path from its current position (the relative position), but if you flag the ","Absolute"," checkbox then it will start following the\n    path exactly as you designed and placed it in the Path Editor (the absolute position). The image below illustrates this:"," ","As you can see in the image above, the two instances are following the ","same"," path started\n    with this action, but one of the instances is following the ","absolute"," path while the other is following the ","relative"," path. It should be noted that when ","Absolute ","is flagged the instance will \"jump\" to the start of the\n    path no matter where in the room it is placed."],[" ","Argument"," ","Description"," ","Path"," ","The path asset to start following"," ","Speed"," ","The speed (in pixels per game frame) to follow the path"," ","On End"," ","The response to reaching the end of the path"," ","Absolute"," ","Whether to start at absolute or relative position"],[" ","The above action block will make the calling instance follow a path (starting at its absolute\n    position and continuing at end) when a key is pressed."," ","Back: ","Path Actions"," ","Next: ","Stop Following Path"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Start Following Path"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"2295"})