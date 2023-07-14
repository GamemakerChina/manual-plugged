rh._.exports({"0":[[" ","room_set_camera"]],"1":[["room_set_camera"]],"2":[[" ","room_set_camera"]],"3":[[" ","With this function you can assign a camera to a specific viewport in a room other than the current one. You supply the room index, the view index (from 0 to 7) and then the index of the camera to use."],[" ","room_set_camera(rm, vind, camera);"," ","Argument"," ","Type"," ","Description"," ","rm"," ","Room Asset"," ","The index of the room to set the view camera of"," ","vind"," ","Real"," ","The index of the view port to assign the camera to"," ","camera"," ","Camera ID"," ","The index of the camera to assign"],[" ","N/A"],[" ","global.myroom = room_add();","\n    room_set_camera(global.myroom, 0, global.MainCam);"," ","The above code assigns a camera in a newly created room to view port [0]."," ","Back: ","Rooms"," ","Next: ","room_get_camera"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["room_set_camera"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"577"})