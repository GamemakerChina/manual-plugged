rh._.exports({"0":[[" ","Broadcast Messages"]],"1":[["Sequences - Broadcast Messages"]],"2":[["broadcast,messages,broadcast messages"]],"3":[[" ","Broadcast Messages"]],"4":[[" ","Both ","Sequences"," and ","Sprites"," can generate what are called ","broadcast messages"," at any point along their length. These messages are simple strings that are added to specific frames along the animation timeline, and when that point in the timeline is reached, then the string will be broadcast out to all instances that listen for it. Any instance that has a ","Broadcast Message Event"," (found in the \"","Other","\" event category) will receive the message string when it is reached in the timeline, at which point it's up to you to have some code that will parse it and react accordingly. Note too that sequences can also listen for broadcast messages, but this requires you to first set up the listener method using code (see the GML section on ","Sequence Events And Moments"," for more information)."," ","NOTE"," Setting the ","image_index ","of an instance directly to a frame will ","not"," trigger any Broadcast Messages that may be present on that frame of the object's sprite."," ","To add a Broadcast Message to the sequence or sprite timeline you simply click the "," button. This will open a dialog where you can add the message to be broadcast:"," ","Once added, the message will be shown in the Dope Sheet (or in the sprite frame view). To edit it, you must click the right mouse button "," on the message icon to open a list of all the messages that overlap the frame (there can only be one message on a frame, but placing multiple messages on consecutive frames will cause them to overlap visually, making it harder to select the one you want and you can have a message and a ","moment"," on the same frame too), and then selecting one from this list will open the message dialog where you can edit it or remove it."," ","When a Broadcast Message event is triggered, there will be a special ","DS Map"," created and stored in the built-in variable ","event_data",". This variable ID is a built-in ","global ","scope variable, but will only contain DS map data in the event that triggered it - in this case the Broadcast Message event - and will return -1 at all other times. The keys that the event will have are as follows:"," ","Message Event Struct"," ","Variable"," ","Type"," ","Description"," ","event_type"," ","String"," ","This will be the string \"","sequence event","\" for a message sent from a Sequence and \"","sprite event","\" for a message sent from a Sprite."," ","message"," ","String"," ","This contains the message string that has been received."," ","element_id"," ","Layer Element ID"," ","This contains the ID of the layer element (sequence/sprite/instance) that fired the message. You can then use this ID value to find out what kind of element generated the message using the function ","layer_get_element_type()"," and to use the other relevant functions to target it, or perform an action like play a sound, as required."," ","Note that the broadcast message event of an instance will receive multiple strings for each of the times a broadcast message is sent. You do not need to act on all of them, and can have different instances listening for different broadcast strings. However, you may have an instance that is listening for messages that may be received at the same time. When this happens, the event will be triggered multiple times - ","once for each message string","."," ","Below is a brief example of how this event can be checked:"," ","if event_data[? \"event_type\"] == \"sequence event\" // or you can check \"sprite event\"","\n    {","\n        switch (event_data[? \"message\"])","\n        {","\n            case \"hit\":","\n                audio_play_sound(snd_hit, 0, false);","\n            break;"," ","\n            case \"destroy\":","\n                sequence_destroy(event_data[? \"element_id\"]);","\n            break;","\n        }","\n    }\n  "," ","Back: ","Sequences"," ","Next: ","The Sequence Canvas"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2477"})