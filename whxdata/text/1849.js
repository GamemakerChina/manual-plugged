rh._.exports({"0":[[" ","instance_deactivate_all"]],"1":[["instance_deactivate_all"]],"2":[[" ","instance_deactivate_all"]],"3":[[" ","This function will deactivate ","all"," instances that are in the room at the moment that the code is run. This may include the instance running the code if the \"notme\" flag is set to ","false",", but normally you would want that instance to be active, in which case the \"notme\" flag should be set to ","true",". Note that deactivation is not instantaneous, and an instance that has been deactivated in this way will not be considered to be inactive until the end of the event in which the function was called."," ","NOTE",": If you deactivate an instance on room start (ie:from the room creation code, or from an instance create event of an instance within the room) all instances that are placed within the room from the room editor ","will still run their create event"," before being deactivated."," ","WARNING",": Deactivating instances that have physics enabled will ","NOT"," stop their fixtures from interacting within the physics simulation. For that you should set their ","phy_active"," variable to ","true"," or ","false"," as you activate/deactivate the instances."],[" ","instance_deactivate_all(notme);"," ","Argument"," ","Type"," ","Description"," ","notme"," ","Boolean"," ","Whether to keep the calling instance activated (true) or not (false)."],[" ","N/A"],[" ","instance_deactivate_all(true);","\n    var _vx = camera_get_view_x(view_camera[0]);","\n    var _vy = camera_get_view_y(view_camera[0]);","\n    var _vw = camera_get_view_width(view_camera[0]);","\n    var _vh = camera_get_view_height(view_camera[0]);","\n    instance_activate_region(_vx - 64, _vy - 64, _vw + 128, _vh + 128, false);"," ","The above code deactivates all instances except the one that is running the code and then activates a region within the room."," ","Back: ","Deactivating Instances"," ","Next: ","instance_deactivate_object"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["instance_deactivate_all"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1849"})