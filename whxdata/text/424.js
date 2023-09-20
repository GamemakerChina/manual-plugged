rh._.exports({"0":[[" ","view_camera"]],"1":[["view_camera"]],"2":[[" ","view_camera"]],"3":[[" ","This array holds the unique camera ID assigned to the given view port, and can be set to a new camera or read to get the current camera, returning -1 if no camera is assigned. You can have up to 8 view ports active in a room (array values 0 through 7), and can assign a camera to any of them by simply setting this variable to the camera ID value (as returned by the functions ","camera_create()"," or ","camera_create_view()","). If you have set the camera to a view port through the Room Editor, this variable will hold the camera ID for that port."],[" ","view_camera[0 ... 7];"],[" ","Camera ID"," or -1 (if no camera is assigned)"],[" ","if view_camera[0] == -1","\n    {","\n        view_camera[0] = camera_create_view(0, 0, room_width, room_height);","\n    }"," ","The above code checks to see if the view port [0] has a camera attached to it and if it doesn't then one is created and set to it."," ","Back: ","Cameras And View Ports"," ","Next: ","view_current"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["view_camera"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"424"})