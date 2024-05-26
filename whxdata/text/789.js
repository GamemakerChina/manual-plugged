rh._.exports({"0":[[" ","move_contact_solid"]],"1":[["move_contact_solid"]],"2":[["move_contact_solid"]],"3":[[" ","move_contact_solid"]],"4":[[" ","This function will move the instance running the code a set number of pixels in the specified direction until it meets an instance with ","solid"," flagged as true. You can use -1 or 0 for the maxdist being a default 1000px, ie: ","GameMaker"," will move the instance continually up 1000 pixels until it is out of collision."],[" ","move_contact_solid( dir, maxdist );"," ","Argument","Type"," ","Description"," ","dir","Real"," ","The direction to move in."," ","maxdist","Real"," ","The maximum distance the object can travel (-1 or 0 a default value of 1000 pixels)."],[" ","N/A"],[" ","if (!place_meeting(x, y + 1, obj_Floor)) ","\n    {","\n        move_contact_solid(270, -1);","\n    }"," ","The above code will check beneath the instance for a collision with \"obj_Floor\", and if there is none, then it will move it down until there is a collision, or 1000 pixels have been covered."," ","Back: ","Movement"," ","Next: ","move_outside_all"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"789"})