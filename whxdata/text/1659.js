rh._.exports({"0":[[" ","ds_priority_read"]],"1":[["ds_priority_read"]],"2":[["ds_priority_read"]],"3":[[" ","ds_priority_read"]],"4":[[" ","With this function you can recreate a saved DS priority (one that has previously been written as a string using ","ds_priority_write()","). You must first create a new DS priority to read the string into, and if the DS priority already exists and has information stored in it, then this will be cleared before reading. This function is of vital importance when creating save/load mechanisms for your game."," ","Note that if the specified DS string was written by the GameMaker: Studio 1.2.x runtime (or older), you should specify the optional argument \"legacy\", setting it to ","true"," as the string format changed after that."],[" ","ds_priority_read(id, str, [legacy]);"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS Priority"," ","The id of the data structure to write."," ","str"," ","String"," ","The string to read from."," ","legacy"," ","Boolean"," ","OPTIONAL"," Can be either ","true"," or ","false"," or omitted completely."],[" ","N/A"],[" ","p_queue = ds_priority_create();","\n    ini_open(\"save.ini\");","\n    var str = ini_read_string(\"P_Queues\", \"0\", \"\");","\n    if (str != \"\")","\n    {","\n        ds_priority_read(p_queue, str);","\n    }","\n    ini_close();"," ","The above code creates a priority queue and stores the index in the variable \"p_queue\". It then opens an ","ini"," file and reads a string from that, checking to make sure that the string is not returned as empty first. This string is then read into the newly created DS priority."," ","Back: ","DS Priority Queues"," ","Next: ","ds_priority_write"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1659"})