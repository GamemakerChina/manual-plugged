rh._.exports({"0":[[" ","Get Buffer Position"]],"1":[["Get Buffer Position"]],"2":[[" "," Get Buffer Position"]],"3":[[" ","This action can be used to retrieve the current position for reading/writing to the buffer. When you create a buffer, the read/write position is set at 0 bytes, and as you add data to the buffer this position will move along sequentially, meaning that\n    you can use this action to get the number of bytes into the buffer that it is set to at any time. You supply the unique buffer ID value as returned by the action ","Create Buffer"," and then give a target variable to return\n    the position value to. The target variable can be flagged as being a temporary local variable, in which case it will be created for you and removed from memory again at the end of the current action script or event."],[" ","Argument"," ","Description"," ","Buffer"," ","The buffer index (stored in a variable)"," ","Position"," ","The read/write position (in bytes) within the buffer"],[" ","The above action block code gets the read/write position for the given buffer\n    and if it is not 0 (ie: at the start of the buffer) it is set to the start of the buffer."," ","Back: ","Buffer Actions"," ","Next: ","If Buffer Exists"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Get Buffer Position"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"1328"})