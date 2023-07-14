rh._.exports({"0":[[" ","audio_emitter_velocity"]],"1":[["audio_emitter_velocity"]],"2":[[" ","audio_emitter_velocity"]],"3":[[" ","This function can be used to give an emitter ","Doppler ","effects and simulate audio motion based on the vector that is resolved from the given relative x, y and z positions. If the emitter itself is not ever going to move you would normally not need to set these values, but, for example, if you are making a scrolling shooter game where the enemies come from the right and scroll to the left, you would set this to have a velocity of (hspeed, 0, 0) in the create event of the enemies (and update the emitter of each instance in the step event using ","audio_emitter_position()",") to give any sounds emitted by the enemy instances the correct Doppler as they pass the player instance (which in turn would be using the function ","audio_listener_position()"," to set the ","listener"," to the correct position)."],[" ","audio_emitter_velocity(emitter, vx, vy, vz);"," ","Argument"," ","Type"," ","Description"," ","emitter"," ","Audio Emitter ID"," ","The index of the emitter to change."," ","vx"," ","Real"," ","The x vector value (default 0)."," ","vy"," ","Real"," ","The y vector value (default 0)."," ","vz"," ","Real"," ","The z vector value (default 0)."],[" ","N/A"],[" ","s_emit = audio_emitter_create();","\n    audio_emitter_position(s_emit, room_width, 0, 0);","\n    audio_emitter_velocity(s_emit, -5, 0, 0);"," ","The above code creates an audio emitter and assigns its index to the variable \"s_emit\". This emitter is then placed at a position within the room and given a velocity of 5 pixels per step along the x axis (it will Doppler correctly in relation to the listener as if it had a horizontal speed of 5 pixels per step)."," ","Back: ","Audio Emitters"," ","Next: ","audio_emitter_falloff"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_emitter_velocity"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1861"})