rh._.exports({"0":[[" ","view_set_camera"]],"1":[["view_set_camera"]],"2":[[" ","view_set_camera"]],"3":[[" ","This function will set a camera to a specific view port. You give the view port to set (from 0 to 7), and supply the unique camera ID value (as returned by the ","camera_create()"," functions or when you use ","view_get_camera()",").\n    If you give a value of -1 as the camera ID then you are removing a camera from the view port and note that if that view port is enabled and visible you may get some unpredictable results."],[" ","view_set_camera(view_port, camera_id)"," ","Argument","Type"," ","Description"," ","view_port","Real"," ","The view port to target (0 - 7)"," ","camera_id","Camera ID"," ","The unique camera ID value returned when you created the camera"],[" ","N/A"],[" ","var cam = camera_create_view(0, 0, 640, 480, 0, obj_Player, 5, 5, -1, -1);"," view_set_camera(0, cam);"," ","The above code will create a new camera and then assign it view port[0]."," ","Back: ","Cameras And View Ports"," ","Next: ","view_set_visible"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["view_set_camera"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"789"})