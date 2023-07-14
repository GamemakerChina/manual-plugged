rh._.exports({"0":[[" ","display_get_sleep_margin"]],"1":[["display_get_sleep_margin"]],"2":[[" ","display_get_sleep_margin"]],"3":[[" ","This function can be used to get the current sleep margin value used for the render timing of your game, and will return a millisecond value. For more information on display timing, please see ","display_set_timing_method()","."],[" ","display_get_sleep_margin();"],[" ","Real"],[" ","if display_get_timing_method() != tm_sleep","\n    {","\n        display_set_timing_method(tm_sleep);","\n        if display_get_sleep_margin() != 20","\n        {","\n            display_set_sleep_margin(20);","\n        }","\n    }"," ","The above code will check the timing method and then if it's not set to ","tm_sleep"," it will be set to that and the sleep margin set to 20."," ","Back: ","Cameras And Display"," ","Next: ","display_get_frequency"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["display_get_sleep_margin"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"482"})