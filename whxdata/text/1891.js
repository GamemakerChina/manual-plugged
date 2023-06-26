rh._.exports({"0":[[" ","matrix_build_projection_perspective"]],"1":[["matrix_build_projection_perspective"]],"2":[[" ","matrix_build_projection_perspective"]],"3":[[" ","This function builds a perspective projection matrix based on the dimensions of the near clipping plane, using the specified parameters listed below."," ","Note that the field of view of the camera will vary depending on the ","width",", ","height"," and ","znear"," values specified, as the projection width and height are placed at the Z position specified in the ","znear"," argument."," ","For example, given a constant size of 640x480, the field of view will be wider if ","znear"," is closer to the camera, but it will be narrower if ","znear"," is far away from the camera. This behaviour is demonstrated in the following visual:"," ","Due to this, it is recommended to use a ","znear"," value that is identical to the width of the projection, resulting in the field of view being consistent with an equivalent orthographic projection."],[" ","matrix_build_projection_perspective(width, height, znear, zfar);"," ","Argument","Type"," ","Description"," ","w","Real"," ","The width of the projection at the near Z position."," ","h","Real"," ","The height of the projection at the near Z position."," ","znear","Real"," ","The near clipping plane."," ","zfar","Real"," ","The far clipping plane."],[" ","Matrix Array"],[" ","var projmat = matrix_build_projection_perspective(640, 480, 640.0, 32000.0);","\n    camera_set_proj_mat(view_camera[0], projmat);"," ","The above code creates a perspective projection and then uses the matrix returned to set the camera assigned to view port[0]."," ","Back: ","Matrix Functions"," ","Next: ","matrix_build_projection_perspective_fov"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["matrix_build_projection_perspective"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1891"})