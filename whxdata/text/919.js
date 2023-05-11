rh._.exports({"0":[[" ","camera_get_view_mat"]],"1":[["camera_get_view_mat"]],"2":[["camera_get_view_mat"]],"3":[[" ","camera_get_view_mat"]],"4":[[" ","This function can be used to retrieve the view matrix. The function returns the matrix array which can then be used in other ","matrix functions"," or to set the view matrix of another camera (using ","camera_set_view_mat()","). Note that this function is generally for use with cameras created using ","camera_create()",", but it can also be used on those created in the room editor (or with ","camera_create_view()",") - in which case the returned matrix will only be valid after the given camera is used in a view port for the first time."],[" ","camera_get_view_mat(camera_id)"," ","Argument","Type"," ","Description"," ","camera_id","Camera ID"," ","The unique camera ID value returned when you created the camera"],[" ","Matrix Array"],[" ","mat = camera_get_view_mat(camera_view[0]);"," ","The above code gets the view matrix for the camera assigned to view port[0]."," ","Back: ","Cameras And View Ports"," ","Next: ","camera_get_proj_mat"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"919"})