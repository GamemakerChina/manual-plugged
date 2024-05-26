rh._.exports({"0":[[" ","audio_system_is_available"]],"1":[["audio_system_is_available"]],"2":[["audio_system_is_available"]],"3":[[" ","audio_system_is_available"]],"4":[[" ","This function can be used to check and see if the audio system has been initialised and the audio context is initialised and running."," ","On all platforms, this function will return ","true"," immediately after Game Start when the audio engine is ","initialised",", ","except on the ","HTML5"," target",". On HTML5, the audio context status can change at any time depending on user input, the browser being used, and its version, so this function can be used to check and see if audio can be played or not. If the function returns ","false"," (i.e. the audio context status is not running), then only unstreamed sounds ","may"," play (but it's not guaranteed, and you should assume that no audio can be played), while if it returns ","true"," then all audio will play."," ","NOTE"," To check if the audio system is ","initialised"," on HTML5, you should use ","audio_system_is_initialised"," instead. The audio system has to be initialised first before it can be available."],[" ","audio_system_is_available","();"],[" ","Boolean"],[" ","if ","audio_system_is_available","()","\n    {","\n        if audio_is_paused(global.Music)","\n        {","\n            audio_resume_sound(global.Music)","\n        }","\n        else","\n        {","\n            if !audio_is_playing(global.Music)","\n            {","\n                global.Music = audio_play_sound(snd_Music, 0, true);","\n            }","\n        }","\n    }","\n    else","\n    {","\n        if audio_is_playing(global.Music)","\n        {","\n            audio_pause_sound(global.Music);","\n        }","\n    }"," ","The above code will pause/unpause an audio track depending on whether the audio system is initialised and available or not."," ","Back: ","Audio"," ","Next: ","audio_system_is_initialised"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1968"})