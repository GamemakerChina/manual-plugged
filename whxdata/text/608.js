rh._.exports({"0":[[" ","alarm_set"]],"1":[["alarm_set"]],"2":[[" ","alarm_set"]],"3":[[" ","This function can be used to set an alarm. You supply the alarm number from 0 to 11, and then the value to set the alarm to. The value must be an integer value, and you can set it to -1 to stop the alarm (non integer values will be rounded to the nearest integer). This is an alternative method to setting the ","alarm array"," directly."],[" ","alarm_set(index, value);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Real"," ","The alarm index to set, from 0 to 11."," ","value"," ","Real"," ","The value (an integer) to set the alarm to."],[" ","N/A"],[" ","for (var i = 0; i < 12; i++)","\n    {","\n        if alarm_get(i) > 0 alarm_set(i, -1);","\n    }"," ","The above code checks all the alarms in the calling instance and if they are greater than 0 it sets them to -1, stopping them from counting down any further."," ","Back: ","Instances"," ","Next: ","instance_find"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["alarm_set"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"608"})