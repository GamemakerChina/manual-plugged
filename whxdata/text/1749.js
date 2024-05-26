rh._.exports({"0":[[" ","audio_sound_set_listener_mask"]],"1":[["audio_sound_set_listener_mask"]],"2":[["audio_sound_set_listener_mask"]],"3":[[" ","audio_sound_set_listener_mask"]],"4":[[" ","This function can be used to set the bit-mask for a sound so that it will play only from those listeners specified. You can create a bit-mask by using the ","audio_get_listener_info()"," and then using the bitwise ","or"," (\"|\") to create a custom mask with those listeners that you require the sound to play from, and then apply this custom mask to the sound after you have played it. This mask will over-ride the default mask or that which you may have set using the function ","audio_set_listener_mask()","."," ","This function can only be used on a sound after it has been set to play and requires the sound ID as returned by the function used to play the sound."],[" ","audio_sound_set_listener_mask","(soundID, mask);"," ","Argument"," ","Type"," ","Description"," ","soundID"," ","Sound Instance ID"," ","The unique ID of the sound to set the mask of"," ","mask"," ","Real"," ","The bitmask data to set for the sound"],[" ","N/A"],[" ","var snd = audio_play_sound(snd_PlayerDead, 10, false);"," ","audio_sound_set_listener_mask","(snd, global.PlayerMask);\n  "," ","The above code plays a sound then sets the listener(s) to play from using the mask data stored in a global variable."," ","Back: ","Audio"," ","Next: ","audio_sound_get_listener_mask"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1749"})