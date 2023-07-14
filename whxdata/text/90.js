rh._.exports({"0":[[" ","timeline_position"]],"1":[["timeline_position"]],"2":[[" ","timeline_position"]],"3":[[" ","This variable holds the current position (moment) a time line is currently at. You can change this value to skip parts of the time line, or to repeat parts or to start the time line again from the beginning."],[" ","timeline_position;"],[" ","Real"," (single precision floating point value)"],[" ","if !timeline_running","\n    {","\n        timeline_position = 0;","\n        timeline_running = true;","\n    }"," ","The above code will check to see if the instance is running a time line, and if it is not then it resets the assigned time line to start at the first moment and then starts it."," ","Back: ","Timelines"," ","Next: ","timeline_loop"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["timeline_position"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"90"})