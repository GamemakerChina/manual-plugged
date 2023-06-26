rh._.exports({"0":[[" ","Mouse And Keyboard Actions"]],"2":[[" ","Mouse And Keyboard Action Library"]],"3":[[" ","The ","Mouse and Keyboard"," action library is where you can find the actions required to poll and process input from the keyboard or mouse devices. The available actions are all listed below:"," ","If Mouse Pressed"," ","If Mouse Down"," ","If Mouse Released"," ","If Key Pressed"," ","If Key Down"," ","If Key Released"," ","The rest of the actions here refer to the ","virtual keyboard",". If you require text or numeric input in your game on a touchscreen device, then you can use the virtual keyboard actions provided to use the device OS keyboard. These actions will call up or hide the OS keyboard and accept input from it just the same as a physical keyboard, so the regular ","GameMaker"," keyboard actions should all work with virtual keyboards (for example, the \"If Key Released\" action), and any input from the virtual keyboard will be stored in the different keyboard variables, like ","keyboard_string"," or ","keyboard_last_char",", etc...)."," ","Opening or closing the virtual keyboard will generate ","System Asynchronous Events",", in which the ","async_load"," ","DS map"," will be populated with the following key/value pairs:"," ","\"","event_type","\" - the type of system event received, which will be \"","virtual keyboard status","\" for virtual keyboards."," ","\"","screen_height","\" - the height of the virtual keyboard (in pixels). This will be 0 if the keyboard is invisible."," ","\"","keyboard_status","\" - the current status of the keyboard, returned as one of the following strings:\n      "," ","\"hiding\""," ","\"hidden\""," ","\"showing\""," ","\"visible\""," ","The available virtual keyboard actions are:"," ","Show Virtual Keyboard"," ","Hide Virtual Keyboard"," ","Get Virtual Keyboard Height"," ","If Virtual Keyboard Is Showing"," ","Back: ","Index"," ","Next: ","Gamepad Actions"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Overview - Mouse And Keyboard Actions Library"]],"id":"2490"})