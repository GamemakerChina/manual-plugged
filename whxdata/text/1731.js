rh._.exports({"0":[[" ","audio_sound_get_pitch"]],"1":[["audio_sound_get_pitch"]],"2":[[" ","audio_sound_get_pitch"]],"3":[[" ","This function can be used to get the get pitch of a given sound. The sound can either be one referenced from an index for an individual sound being played which has been stored in a variable when using the ","audio_play_sound()"," or ","audio_play_sound_at()"," functions, or an actual sound asset from ","The Asset Browser","."],[" ","audio_sound_get_pitch","(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Sound Asset"," or ","Sound Instance ID"," or ","Audio Queue ID"," ","The index of the sound to get the pitch of."],[" ","Real"],[" ","if ","audio_sound_get_pitch","(snd_Explode) != 1","\n    {","\n        audio_sound_pitch(snd_Explode, 1);","\n    }"," ","The above code will change the pitch of the audio played from the sound indexed as \"snd_Explode\" if its pitch is not equal to 1."," ","Back: ","Audio"," ","Next: ","audio_sound_set_track_position"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_sound_get_pitch"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1731"})