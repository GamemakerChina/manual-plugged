rh._.exports({"0":[[" ","Set Alarm"]],"1":[["Set Alarm"]],"2":[[" "," Set Alarm Countdown"]],"3":[[" ","This action block sets a given alarm to countdown, and when the alarm reaches zero the associated ","Alarm Event"," will be triggered. You supply the alarm number from 0 to 11, and\n    then the value to set the alarm to. The value used is the number of \"game steps\" that you want to pass before the alarm event is triggered, and you can set this to be relative to the current alarm value (adding or subtracting to the current\n    value). Note that the value must be an integer value, and you can set it to -1 to stop the alarm. Note that when an alarm counts down, the event is run when it reaches 0, but the alarm then counts down to -1 to show that it has finished. Setting an\n    alarm to 0 will ","not"," run the event, since it will then count down to -1 next step, so to run an alarm immediately it should be set to 1. Note that you can set additional alarms in the same action by clicking the plus icon "," beside the action."],[" ","Argument"," ","Description"," ","Alarm"," ","The alarm to set (the corresponding Alarm Event will be triggered when it reaches 0)."," ","Countdown"," ","The count down value in game steps."],[" ","The above action block code creates a local (temporary) variable and stores the current value of\n    the alarm[0]. This is then checked and if it is less than 0, the alarm is set to 60."," ","Back: ","Instance Actions"," ","Next: ","Get Alarm Countdown"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Set Alarm"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"1669"})