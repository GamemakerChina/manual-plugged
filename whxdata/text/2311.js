rh._.exports({"0":[[" ","Audio Playback"]],"1":[["Objects - Async Audio Playback Event"]],"2":[["Audio Playback,ev_audio_playback"]],"3":[[" ","Audio Playback"]],"4":[[" ","This event can only be triggered by the ","audio queue","    play functions and will return a ","DS Map"," stored in the variable "," ","async_load",",\n    containing different key/value pairs relating to the audio queue that has triggered the event. The event is triggered by a ","callback"," when you have selected an audio queue to playback and a\n    buffer in that audio queue is finished playing."," ","The following keys will be available in the DS map:"," ","\"","queue_id","\" - the queue index for the queue that has finished playing, as returned by the function ","audio_create_play_queue()","."," ","\"","buffer_id","\" - the buffer ID for the ","buffer"," that is no longer being played from."," ","\"","queue_shutdown","\" - this is set to 0 during normal playback and 1 when the event is received because ","audio_free_play_queue()"," has\n      been called. When this is set to 1, you don't want to queue up any further data."," ","Since an audio queue can be created from multiple buffers, this event can be triggered multiple times for one queue as the end of each section of buffered audio is reached, hence the \"buffer_id\" key."," ","NOTE",": The variable ","async_load","  is only valid in the asynchronous events, as the DS map that is points to is created at the start of the event, then deleted again at the end, with this\n    variable being reset to a value of -1. However, all further data-structures created from the event must be cleaned up using the appropriate functions."," ","In the example of use given below we will create an audio queue with 10 buffered audio sounds added to it and then play the queue:"," ","audio_queue = audio_create_play_queue(buffer_s16, 11052, audio_mono);"," for (var i = 0; i < 10; i++;)","    {","    audio_queue_sound(audio_queue, audio_buffer[i], 0, buffer_get_size(audio_buffer[i]));","    }"," audio_play_sound(audio_queue,\n    0, true);"," ","Every game step now that the recording is detected will trigger an asynchronous Audio Recording event where you can deal with the recorded input something like this:"," ","var queue = async_load[? \"queue_id\"];"," var num = 0;"," if queue = audio_queue","    {","    for (var i = 0; i < 10; i++;)","       {","       if async_load[? \"buffer_id\"] == audio_buffer[i]","          {","  buffer_seek(audio_buffer[i],\n    buffer_seek_start, 0);","          num = i;","          }","       }","    if num == 9","       {","       audio_stop_sound(audio_queue);","       audio_free_play_queue(audio_queue);","       }","  }\n  "," ","Here we check the queue ID and if it's the one we want, we then check the buffer ID to see which buffer has finished being played. We also then set a local var to that index value for checking later and set the buffer back to the start for that\n    sound. Once our local variable reaches 9, indicating that the queue has finished, we stop the sound playing and free the queue."," ","Back: ","Async Events"," ","Next: ","Audio Recording"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2311"})