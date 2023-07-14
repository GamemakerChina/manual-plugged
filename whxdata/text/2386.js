rh._.exports({"0":[[" ","layer_sequence_destroy"]],"1":[["layer_sequence_destroy"]],"2":[[" ","layer_sequence_destroy"]],"3":[[" ","With this function you can destroy (remove from the room) a sequence element and its corresponding sequence instance."," ","You supply the sequence element ID as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," and the sequence will be destroyed."," ","The function frees the ","sequence instance struct"," and all the structs under it. Any structs under the sequence instance struct that have been assigned to a variable are ","not"," freed at that point, e.g. if you assigned one of the track structs under ","activeTracks"," to a variable then that struct will only be freed when the variable no longer references it.","\n    The function also destroys all instances that were created for the sequence's object tracks. This also applies to instances created from an override object defined with ","sequence_instance_override_object",".","\n    Already existing instances that were provided as a replacement for an object index using ","sequence_instance_override_object"," are ","not"," destroyed automatically."],[" ","layer_sequence_destroy","(sequence_element_id)"," ","Argument"," ","Type"," ","Description"," ","sequence_element_id"," ","Sequence Element ID"," ","The unique ID value of the sequence element to target"],[" ","N/A"],[" ","var a = layer_get_all_elements(layer);","\n    for (var i = 0; i < array_length(a); i++;)","\n    {","\n        if layer_get_element_type(a[i]) == layerelementtype_sequence","\n        {"," ","layer_sequence_destroy","(a[i]);","\n        }","\n    }"," ","The above code gets the IDs for all the elements assigned to the layer of the instance running the code. The code then checks to see if any of the returned elements are sequence assets and if they are then they are destroyed."],[" ","var a = layer_get_all_elements(layer);","\n    var track_struct;","\n    for (var i = 0; i < array_length(a); i++;)","\n    {","\n        if layer_get_element_type(a[i]) == layerelementtype_sequence","\n        {","\n            var ins = layer_sequence_get_instance(a[i]);","\n            track_struct = ins.activeTracks[0];"," ","layer_sequence_destroy","(a[i]);","\n        }","\n    }","\n    show_debug_message(track_struct);"," ","The above code gets the IDs for all the elements assigned to the layer of the instance running the code. The code then checks to see if any of the returned elements are sequence assets. If they are, it then gets the instance struct using ","layer_sequence_get_instance",". Next it assigns the first element of the ","activeTracks"," array to a temporary variable ","track_struct"," and it destroys the sequence afterwards."," ","After going through all the sequence elements and destroying them it shows a debug message with the contents of the variable ","track_struct",". While the sequences were destroyed, ","track_struct"," still contains the struct of the first track of the last encountered sequence instance."," ","Back: ","Sequence Layers"," ","Next: ","layer_sequence_x"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_sequence_destroy"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1:"],[" ","Example 2:"]],"id":"2386"})