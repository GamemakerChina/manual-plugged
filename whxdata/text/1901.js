rh._.exports({"0":[[" ","display_set_sleep_margin"]],"1":[["display_set_sleep_margin"]],"2":[[" ","display_set_sleep_margin"]],"3":[[" ","This function can be used to set the sleep margin value used for the render timing of your game, and requires a millisecond value. The default values are as follows:"," ","Platform"," ","Milliseconds"," ","Windows"," ","10"," ","macOS"," ","10"," ","Ubuntu"," ","10"," ","HTML5"," ","10"," ","Android"," ","4"," ","iOS"," ","4"," ","Xbox"," ","10"," ","PS4"," ","10"," ","Nintendo Switch"," ","10"," ","Note that even if the timing method is set to use vsync timing, the sleep margin will have some effect over the rendering of the game, and so you should take care when setting this value. For more information on display timing, please see ","display_set_timing_method()","."," ","NOTE",": In addition to the Sleep Margin, you can further control your performance and power consumption on Windows by adjusting the ","thread scheduler's resolution"," at runtime."],[" ","display_set_sleep_margin(milliseconds);"," ","Argument"," ","Type"," ","Description"," ","milliseconds"," ","Real"," ","The number of milliseconds for the sleep margin"],[" ","N/A"],[" ","if display_get_timing_method() != tm_sleep","\n    {","\n        display_set_timing_method(tm_sleep);","\n        if display_get_sleep_margin() != 20","\n        {","\n            display_set_sleep_margin(20);","\n        }","\n    }"," ","The above code will check the timing method and then if it's not set to ","tm_sleep"," it will be set to that and the sleep margin set to 20."," ","Back: ","Cameras And Display"," ","Next: ","screen_save"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["display_set_sleep_margin"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1901"})