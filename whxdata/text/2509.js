rh._.exports({"0":[[" ","audio_play_sound"]],"1":[["audio_play_sound"]],"2":[[" ","audio_play_sound"]],"3":[[" ","With this function you can play any ","Sound Asset"," in your game."," ","You provide the sound asset and assign it a priority, which is then used to determine how sounds are dealt with when the number of sounds playing is over the limit set by the function ","audio_channel_num()",". Lower priority sounds will be stopped in favour of higher priority sounds, and the priority value can be any real number (the actual value is arbitrary, and can be from 0 to 1 or 0 to 100, as ","GameMaker"," will prioritise them the same). The ","higher"," the number the ","higher"," the priority, so a sound with priority 100 will be favoured over a sound with priority 1."," ","The third argument is for making the sound loop and setting it to ","true"," will make the sound repeat until it's stopped manually, and setting it to ","false"," will play the sound once only."," ","This function will also return a unique index for the sound being played, which can be stored in a variable so you can later ","pause it"," or ","stop it",". This means that if you have multiple instances of the same sound playing at any one time, you can target just one instance of that sound using the ","audio functions","."],[" ","There are four optional arguments that allow you to change the properties of the sound being played:"," ","... [gain], [offset], [pitch], [listener_mask]"," ","These parameters are applied to the sound immediately. This fixes the issues you would face when calling a separate function to change any of these values, which could cause an undesired delay in the change."," ","NOTE"," To change the value of any of these properties after playback of a sound has been started, see ","audio_sound_gain"," for gain, ","audio_sound_set_track_position"," for offset, ","audio_sound_pitch"," for pitch and ","audio_sound_set_listener_mask"," for listener mask."],[" ","audio_play_sound","(index, priority, loop, [gain], [offset], [pitch], [listener_mask]);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Sound Asset"," ","The index of the sound to play."," ","priority"," ","Real"," ","Set the channel priority for the sound."," ","loop"," ","Boolean"," ","Sets the sound to loop or not."," ","gain"," ","Real"," ","OPTIONAL"," Value for the gain."," ","offset"," ","Real"," ","OPTIONAL"," The time (in seconds) to set the start point to. Values beyond the end of the sound are clamped to its length."," ","pitch"," ","Real"," ","OPTIONAL"," The pitch multiplier (default 1)."," ","listener_mask"," ","Real"," ","OPTIONAL"," The bitmask data to set for the sound. On the HTML5 target  this will have no effect as the target does not support more than one listener."],[" ","Sound Instance ID"],[" ","if health <= 0","\n    {","\n        lives -= 1;","\n        audio_play_sound(snd_PlayerDead, 10, false);","\n    }"," ","The above code checks the \"health\" global variable and if it is less than or equal to 0, it will remove 1 from the \"lives\" global variable and play a sound."],[" ","if bbox_left > room_width","\n    {"," ","audio_play_sound","(snd_Goodbye, 10, false, 1.1, 0, 2);","\n    }"," ","The above code checks if the instance is past the right bound of the room and plays a sound with a gain of 1.1 and a pitch of 2 (twice the normal pitch)."," ","Back: ","Audio"," ","Next: ","audio_play_sound_ext"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_play_sound"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1:"],[" ","Example 2:"]],"7":[[" ","Optional Properties"]],"id":"2509"})