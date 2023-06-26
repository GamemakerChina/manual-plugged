rh._.exports({"0":[[" ","Time Sources"]],"1":[["Time Sources"]],"2":[[" ","Time Sources"]],"3":[[" ","A \"","Time Source","\" is a custom timer you create. It runs for a given period of time, and at the end, it expires."," ","A ","Time Source"," (TS) has the ability to call a custom method (\"callback\") on expiring."," ","It's also able to repeat a certain of amount of times, or forever. Each repetition of a ","Time Source"," is known as a \"rep\"."],[" ","Create and start a ","Time Source"," that calls a custom method:"," ","Call ","time_source_create()"," / ","Create Time Source"," to create a ","Time Source"," ","Specify whether this inherits from the Global ","Time Source",", the Game ","Time Source"," or a custom ","Time Source"," ","Specify the period of time it runs for, and the units used (seconds or frames)"," ","Specify a custom method or script function, with an argument array to pass into that method"," ","Optionally, specify the number of times it should repeat\n          "," ","By default it runs only once"," ","Call ","time_source_start()"," / ","Start Time Source"," to start that ","Time Source"," immediately, or call it later when you need it to start"," ","Doing this will cause the ","Time Source"," to run, and after the specified period, it will expire and call your specified method."," ","IMPORTANT"," Even though ","Time Sources"," can expire at any moment, ","GameMaker"," will only \"know\" about this when the ","Time Sources"," are updated/\"ticked\", which happens between the Begin Step and Step event for all ","Time Sources",". At this moment the callback functions will also be executed for those ","Time Sources"," that have expired or are about to expire (depending on their ","expiry type","). See ","Event Order"," for more details."],[" ","A ","Time Source"," can inherit from either of the two built-in ","Time Source","s, or from a custom ","Time Source","."," ","See: ","Built-In Time Sources"],[" ","While setting up a time source doesn't take many lines of code, it can be convenient to quickly set up and manage a timer using a single function."," ","The following two functions provide a simpler, shorthand way of creating a ","Time Source"," and stopping it: "," ","call_later"," ","call_cancel"," ","NOTE"," You cannot use the ","Time Source"," functions with the ","Time Source"," IDs used by these functions. See ","call_later"," for more information."],[" ","The following functions are used to create and modify ","Time Source","s:"," ","time_source_create"," ","time_source_destroy"," ","time_source_start"," ","time_source_stop"," ","time_source_pause"," ","time_source_resume"," ","time_source_reconfigure"," ","time_source_reset"," ","time_source_get_children"," ","time_source_get_parent"," ","time_source_get_period"," ","time_source_get_reps_completed"," ","time_source_get_reps_remaining"," ","time_source_get_state"," ","time_source_get_time_remaining"," ","time_source_get_units"," ","time_source_exists"," ","Each ","get_*"," function will return ","undefined"," if the specified ","Time Source"," doesn't exist."," ","The following helper functions are provided for converting time periods:"," ","time_seconds_to_bpm"," ","time_bpm_to_seconds"," ","Also see: ","GML Visual - Time Sources"],[" ","The following constants are used with ","Time Source"," functions:"," ","Built-In Time Sources"," ","Time Source Units"," ","Time Source Expiry Types"," ","Time Source States"," ","Back: ","GML Code Reference"," ","Next: ","Physics"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["Time Source"]],"7":[[" ","How to Use Time Sources?"],[" ","Built-In Time Sources"],[" ","Simple Timers"],[" ","Function List"],[" ","Constants"]],"id":"2649"})