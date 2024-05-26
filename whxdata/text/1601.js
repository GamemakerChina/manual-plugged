rh._.exports({"0":[[" ","Hide Virtual Keyboard"]],"1":[["GML Visual Action - Hide Virtual Keyboard"]],"2":[["Hide Virtual Keyboard"]],"3":[[" ","Hide Virtual Keyboard"]],"4":[[" ","This action can be used to hide the virtual keyboard on the device running the game. Calling this action will generate a ","System Asynchronous Event",", in which the ","async_load"," ","DS map"," will be populated with the following key/value pairs:"," ","\"","event_type","\" - this will be \"","virtual keyboard status","\" when triggered by virtual keyboard actions."," ","\"","screen_height","\" - the height of the virtual keyboard (in pixels). This will be 0 if the keyboard is invisible."," ","\"","keyboard_status","\" - the current status of the keyboard, returned as one of the following strings:\n      "," ","\"hiding\""," ","\"hidden\""," ","\"showing\""," ","\"visible\""],[" ","The above action block code checks for a mouse down action, and if one is\n    detected, then a check is performed to see if the OS virtual keyboard is showing. If it isn't then it is set to show - using a numeric keypad type - and if is already showing then it is hidden."," ","Back: ","Mouse And Keyboard Actions"," ","Next: ","Get Virtual Keyboard Height"]],"5":[[" ","Action Syntax:"," ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1601"})