rh._.exports({"0":[[" ","skeleton_animation_get_event_frames"]],"1":[["skeleton_animation_get_event_frames"]],"2":[["skeleton_animation_get_event_frames"]],"3":[[" ","skeleton_animation_get_event_frames"]],"4":[[" ","This function can be used to retrieve all the frames for the given event, in the given animation. You supply the skeleton animation name (as a string, as defined in the program used to make the animation, or as returned by using the function ","skeleton_animation_get()",") and an event name. The function returns an array with the frames for that event."," ","If the specified event name does not exist, the function will return an array with ","-1"," as its first (and only) element."],[" ","skeleton_animation_get_event_frames(anim_name, event_name);"," ","Argument"," ","Type"," ","Description"," ","anim_name"," ","String"," ","The animation name to get the frames of."," ","event_name"," ","String"," ","The event name to get the frames for."],[" ","Array"," of ","Real","s"],[" ","var _frames = skeleton_animation_get_event_frames(skeleton_animation_get(), \"Footstep\");"," ","\n    if (_frames[0] != -1)","\n    {","\n        var _count = array_length(_frames);","\n        var _current_frame = skeleton_animation_get_frame(0);"," ","\n        for (var i = 0; i < _count; i ++)","\n        {","\n            if (_frames[i] == _current_frame)","\n            {","\n                audio_play_sound(snd_footstep, 1, false);","\n                break;","\n            }","\n        }","\n    }\n  "," ","The above code gets the frames for the ","\"Footstep\""," event. If it returned an array with the valid frames, it loops through it, and checks if the current frame is equal to any of the frames in the array. In that case it plays the footstep sound effect and breaks (stops) the loop."," ","Back: ","Animation"," ","Next: ","skeleton_animation_is_looping"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1959"})