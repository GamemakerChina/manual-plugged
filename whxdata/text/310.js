rh._.exports({"0":[[" ","gc_collect"]],"1":[["gc_collect"]],"2":[[" ","gc_collect"]],"3":[[" ","With this function you can trigger the garbage collector, forcing it to run at the end of the current frame (step). It is worth noting that the garbage collector does ","not ","need to be active for this to work. Calling this function after disabling the garbage collector (using the function ","gc_enable()",") will enable the garbage collector for one frame in which all objects that have been flagged for collection will be removed from memory before the garbage collector is disabled again."],[" ","gc_collect();"],[" ","N/A"],[" ","if (global.debug == true && keyboard_check_pressed(vk_f1))","\n    {","\n        gc_collect();","\n    }"," ","The above code checks a global variable and a key being pressed and if those are ","true"," then garbage collection is triggered for the end of the frame (step)."," ","Back: ","Garbage Collection"," ","Next: ","gc_target_frame_time"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gc_collect"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"310"})