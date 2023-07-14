rh._.exports({"0":[[" ","ds_queue_head"]],"1":[["ds_queue_head"]],"2":[[" ","ds_queue_head"]],"3":[[" ","This function will only ","read"," the first value of the queue (that which is \"at the head\"). It will not ","dequeue"," the value, meaning that it can still be read in the future by this function or the ","ds_queue_dequeue()",". If the queue is empty then the function will return the constant ","undefined",", otherwise it will return the real or string value contained in the queue."],[" ","ds_queue_head(id);"," ","Argument","Type"," ","Description"," ","id","DS Queue ID"," ","The id of the data structure to read from."],[" ","Any"," (Data type value stored in the queue)"],[" ","num = ds_queue_head(control_queue);"," ","The above code will read the value from the queue indexed in the variable \"control_queue\" and store the return value in the variable \"num\"."," ","Back: ","DS Queues"," ","Next: ","ds_queue_tail"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_queue_head"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"530"})