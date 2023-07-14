rh._.exports({"0":[[" ","audio_sound_get_listener_mask"]],"1":[["audio_sound_get_listener_mask"]],"2":[[" ","audio_sound_get_listener_mask"]],"3":[[" ","This function will return the bit-mask data that defines which audio listeners a sound should be played from. See the section on ","Audio Listeners"," for more information."],[" ","audio_sound_get_listener_mask","(soundID);"," ","Argument"," ","Type"," ","Description"," ","soundID"," ","Sound Instance ID"," ","The unique ID of the sound to get the mask of"],[" ","Real"],[" ","var snd = audio_play_sound(snd_PlayerDead, 10, false);","\n    if ","audio_sound_get_listener_mask","(snd) != global.PlayerMask","\n    {","\n        audio_sound_set_listener_mask(snd, global.PlayerMask);","\n    }"," ","The above code plays a sound then checks the listener mask data for the sound, and if it's not the same as that which is stored in a global variable, it sets the listener(s) to play from using the mask data stored in the global variable."," ","Back: ","Audio"," ","Next: ","audio_master_gain"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_sound_get_listener_mask"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1260"})