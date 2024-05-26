rh._.exports({"0":[[" ","audio_start_recording"]],"1":[["audio_start_recording"]],"2":[["audio_start_recording"]],"3":[[" ","audio_start_recording"]],"4":[[" ","This function will start recording audio from the recorder source indexed. You can get the number of recorder sources using the function ","audio_get_recorder_count()",", and once you start recording the audio will be stored in a temporary buffer and start triggering an ","Audio Recording Asynchronous Event",". This event is triggered every step that recording takes place and will create the special ","DS map"," in the variable ","async_load"," with the following key/value pairs:"," ","\"","buffer_id","\" - the ID of the temporary buffer you can use to retrieve the audio data"," ","\"","channel_index","\" - the recording channel index (as returned by the function) this data came from"," ","\"","data_len","\" - the length of data (in bytes) you've received"," ","Note that after the asynchronous event has been triggered, the audio in the temporary buffer will be wiped, so you should be copying it's data into a custom buffer that you have previously created."," ","NOTE"," ","Most platforms support recording audio in some form, but that does not mean that all devices will permit it, even if the platform does, so you should always check that the ","audio_get_recorder_count()"," function returns a value greater than 0 to verify that recording devices are available before using the rest of the recording functions."],[" ","audio_start_recording(recorder_index);"," ","Argument"," ","Type"," ","Description"," ","recorder_index"," ","Real"," ","The index of the recorder source to use."],[" ","Buffer"],[" ","audio_record = audio_start_recording(0);"," ","The above code starts recording from the recorder source 0, storing the channel index of the recording in the variable \"audio_record\" for use in the asynchronous ","Audio Recording"," event."," ","Back: ","Audio Buffers"," ","Next: ","Audio_stop_recording"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2083"})