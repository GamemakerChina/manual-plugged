rh._.exports({"0":[[" ","skeleton_animation_get"]],"1":[["skeleton_animation_get"]],"2":[["skeleton_animation_get"]],"3":[[" ","skeleton_animation_get"]],"4":[[" ","With this function you can get the current animation set being used by your skeletal animation sprite. The return value is a string, which will be the name of the set as you defined it in your skeletal animation program."],[" ","skeleton_animation_get();"],[" ","String"],[" ","if (keyboard_check_pressed(vk_space)) ","\n    {","\n        if (skeleton_animation_get() != \"jump\") ","\n        {","\n            skeleton_animation_set(\"jump\");","\n        }","\n    }"," ","The above code will change the animation set being used to the \"jump\" set when the space key is pressed, but only if the current set being used is not already \"jump\"."," ","Back: ","Animation"," ","Next: ","skeleton_animation_set"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"263"})