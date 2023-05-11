rh._.exports({"0":[[" ","Set Audio Volume"]],"1":[["GML Visual Action - Set Audio Volume"]],"2":[["Set Audio Volume"]],"3":[[" "," Set Audio Volume"]],"4":[[" ","With this action you can set the volume of a given sound. You select the sound from the asset explorer and then set the volume value. The volume can be between 0 (silent) and 1 (full volume) and the scale is linear, such that a value of 0.5 would be half volume. Note that this action will affect all instances of the sound that are playing currently in the room, and will affect all future instances of the sound played."," ","The \"Time\" field controls how long it takes for the volume change to take effect. A value of 0 results in an instant change, where a larger value will gradually change the volume over the given amount of milliseconds."],[" ","Argument"," ","Description"," ","Sound"," ","The sound resource to set the volume of"," ","Volume"," ","The new volume for the sound (from 0 to 1, default 1)"," ","Time"," ","The amount of time over which to fade the volume (in milliseconds)."],[" ","The above action block code checks a global variable to see if it is ","true"," or false. If it is ","true"," then the volume of the given sound is retrieved and stored in a temporary local variable. The value is then checked to see if it is not equal to 0.5, and if it is not, then the volume of the sound is set to fade to 0.5 in 1000 milliseconds (1 second). If the global variable evaluates to ","false",", then the sound has its volume set to 1. As the value for time is set to 0 here, the change in volume occurs immediately."," ","Back: ","Audio Actions"," ","Next: ","Get Audio Volume"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1738"})