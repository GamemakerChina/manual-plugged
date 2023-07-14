rh._.exports({"0":[[" ","audio_emitter_get_listener_mask"]],"1":[["audio_emitter_get_listener_mask"]],"2":[[" ","audio_emitter_get_listener_mask"]],"3":[[" ","This function will return the bit-mask data that defines which audio listeners an emitter should play sounds from. For more information see the section on ","Audio Listeners","."],[" ","audio_emitter_get_listener_mask(emitterID);"," ","Argument"," ","Type"," ","Description"," ","emitterID"," ","Audio Emitter ID"," ","The unique ID of the emitter to get the mask of"],[" ","Real"],[" ","s_emit = audio_emitter_create();","\n    if audio_emitter_get_listener_mask(s_emit) != global.PlayerMask","\n    {","\n        audio_emitter_set_listener_mask(snd, global.PlayerMask);","\n    }"," ","The above code creates an emitter then checks the listener mask data for it, and if it's not the same as that which is stored in a global variable, it sets the listener(s) to play from using the mask data stored in the global variable."," ","Back: ","Audio Emitters"," ","Next: ","audio_emitter_bus"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_emitter_get_listener_mask"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1239"})