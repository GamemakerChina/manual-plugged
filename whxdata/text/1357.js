rh._.exports({"0":[[" ","layer_sequence_get_speedscale"]],"1":[["layer_sequence_get_speedscale"]],"2":[[" ","layer_sequence_get_speedscale"]],"3":[[" ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," - and it will return the current playback speed scale. This is the ","multiplier"," value used to slow down or speed up the playback speed. A value of 1 is the default value, and values lower than 1 mean that playback is slowed down and values greater than 1 mean that playback is sped up."],[" ","layer_sequence_get_speedscale(sequence_element_id)"," ","Argument"," ","Type"," ","Description"," ","sequence_element_id"," ","Sequence Element ID"," ","The unique ID value of the sequence element to target"],[" ","Real"],[" ","if layer_sequence_get_speedscale(title_sequence) != 1","\n    {","\n        layer_sequence_speedscale(title_sequence, 1);","\n    }"," ","The above code checks the current playhead speed scale of the sequence element ID stored in the variable \"title_sequence\", and if it's not set to 1 it is set to this value."," ","Back: ","Sequence Layers"," ","Next: ","layer_sequence_get_length"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_sequence_get_speedscale"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1357"})