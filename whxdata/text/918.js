rh._.exports({"0":[[" ","gesture_get_tap_count"]],"1":[["gesture_get_tap_count"]],"2":[["gesture_get_tap_count"]],"3":[[" ","gesture_get_tap_count"]],"4":[[" ","This function is used to check whether tap counting is enabled or disabled. The function will return ","true"," if it is enabled, and ","false"," otherwise and you can enable or disable tap counting using the function ","gesture_tap_count()",". When enabled, each tap event will have an additional \"tapcount\" DS map entry which will have registered the number of taps, and when enabled it means that ","all"," tap events will be triggered, ie: two taps will trigger both the single tap event and the double tap event, with the single tap event tap count being 1 and the double tap event tap count being 2. The tap count value will be reset to 0 after the time set for a double-tap detection has passed (see the function ","gesture_double_tap_time()","). If tap counting is disabled, then the initial tap won't be registered until the double-tap time has passed and no second tap has been detected. Note that this is ","enabled"," by default."],[" ","gesture_get_tap_count();"],[" ","Boolean"],[" ","if (!gesture_get_tap_count()) ","\n    {","\n        getsure_tap_count(true);","\n    }"," ","The above code checks to see if tap counting is enabled and if it is not then it is switched on."," ","Back: ","Gesture Input"," ","Next: ","gesture_get_pinch_distance"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"918"})