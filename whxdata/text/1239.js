rh._.exports({"0":[[" ","ds_priority_find_max"]],"1":[["ds_priority_find_max"]],"2":[["ds_priority_find_max"]],"3":[[" ","ds_priority_find_max"]],"4":[[" ","With this function you can find the value stored in the priority queue with the highest priority, and if more than one value has the same priority then any one of them could be returned in any order. However, unlike ","ds_priority_delete_max()",", this function will not remove the value from the queue."," ","NOTE"," If the priority queue is empty, this function will return ","undefined","."],[" ","ds_priority_find_max(id);"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS Priority ID"," ","The id of the priority queue to use."],[" ","Any"," (Data type stored in the priority)"],[" ","if ai_move","\n    {","\n        script_execute(ds_priority_find_max(ai_priority));","\n    }"," ","The above code checks an instance variable and if it returns ","true"," it will execute a script function indexed in the priority queue with the highest priority value."," ","Back: ","DS Priority Queues"," ","Next: ","ds_priority_find_min"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1239"})