rh._.exports({"0":[[" ","camera_set_end_script"]],"1":[["camera_set_end_script"]],"2":[[" ","camera_set_end_script"]],"3":[[" ","This function can be used to set a ","script function"," that will be called at the end of every game frame that the camera is assigned to a visible and active view port, after everything for that view camera has been rendered. You give the unique camera ID value (as returned by the different ","camera_create"," functions) and the ID of the function to be called. The order in which functions attached to cameras and the actual rendering of the camera view is as follows:"," ","The cameras for all visible and active view ports have their ","update function ","called"," ","Then for each view:\n      "," ","The ","begin function ","for the camera for that view is called"," ","The draw events are executed for that view"," ","The ","end function ","for the camera is called"," ","Move to the next active visible view and repeat..."],[" ","camera_set_end_script","(camera_id, script);"," ","Argument"," ","Type"," ","Description"," ","camera_id"," ","Camera ID"," ","The unique camera ID value returned when you created the camera."," ","script"," ","Script Function"," ","The script to run each game frame (or -1 to set no end script)"],[" ","N/A"],[" ","camera_set_end_script","(view_camera[0], endCamera);"," ","The above code sets the end script for the camera assigned to view port [0]."," ","Back: ","Cameras And View Ports"," ","Next: ","camera_set_view_pos"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["camera_set_end_script"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1977"})