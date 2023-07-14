rh._.exports({"0":[[" ","place_meeting"]],"1":[["place_meeting"]],"2":[[" ","place_meeting"]],"3":[[" ","With this function you can check a position for a collision with another instance or all instances of an object using the collision mask of the instance that runs the code for the check. When you use this you are effectively asking ","GameMaker"," to move the instance to the new position, check for a collision, move back and tell you if a collision was found or not. This will work for precise collisions, but only if both the instance and the object being checked for have precise collision masks selected otherwise only bounding box collisions are applied. This function also accepts the special keywords ","all"," and ","other",". Please note that should you need to get the unique instance ","id"," of the object being collided with, you should use ","instance_place()","."," ","Note that the given x/y coordinates will be floored to the nearest integer before the check is performed."],[" ","place_meeting(x, y, obj);"," ","Argument"," ","Type"," ","Description"," ","x"," ","Real"," ","The x position to check."," ","y"," ","Real"," ","The y position to check."," ","obj"," ","Object Asset"," or ","Instance ID"," ","The instance or object to check for."],[" ","Boolean"],[" ","if keyboard_check(vk_left)","\n    {","\n        if !place_meeting(x - 5, y, obj_wall) x -=5;","\n    }"," ","The above code checks to see if there is ","not"," a collision to the left of the instance and moves the instance if there is none."," ","Back: ","Collisions"," ","Next: ","position_empty"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["place_meeting"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1708"})