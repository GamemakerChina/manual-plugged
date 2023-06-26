rh._.exports({"0":[[" ","ds_queue_enqueue"]],"1":[["ds_queue_enqueue"]],"2":[[" ","ds_queue_enqueue"]],"3":[[" ","This function will add a value (real or string) onto the tail of the ","DS queue",". The function can take a further 14 optional arguments (making a total of 15 possible additions), permitting you to add multiple values\n    consecutively to the tail of the queue in a single call."],[" ","ds_queue_enqueue(id, val [, val2, ... val15]);"," ","Argument","Type"," ","Description"," ","id","DS Queue ID"," ","The id of the queue to add to."," ","val","Any"," ","The value to add to the queue."," ","[val2, ... val15]","Any"," ","Optional values to be added to the queue."],[" ","N/A"],[" ","move_queue = ds_queue_create();"," ds_queue_enqueue(move_queue, x + 200);"," ds_queue_enqueue(move_queue, y);"," ds_queue_enqueue(move_queue, x + 200);"," ds_queue_enqueue(move_queue, y + 200);"," ds_queue_enqueue(move_queue, x);"," ds_queue_enqueue(move_queue,\n    y + 200);"," ds_queue_enqueue(move_queue, x);"," ds_queue_enqueue(move_queue, y);"," ","The above code creates a new DS queue and stores its index in the variable \"move_queue\". It then pushes a number of values onto the queue for future use."," ","Back: ","DS Queues"," ","Next: ","ds_queue_head"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_queue_enqueue"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1066"})