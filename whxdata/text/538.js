rh._.exports({"0":[[" ","gravity"]],"1":[["gravity"]],"2":[[" ","gravity"]],"3":[[" ","gravity"," is one of the \"built in\" variables all instances have and, when set, will apply a constant force in the ","gravity_direction"," of the instance, influencing both the instance ","speed"," ","and ","direction",". Note that gravity is a cumulative force and will accelerate the object if you choose not to cap the final speed, and it's usual that you'd set this variable to small decimal values like 0.01. If you set the ","gravity"," to 0, then no gravity will be applied to the instance (this is the default value)."],[" ","gravity;"],[" ","Real"," (single precision floating point value)"],[" ","if !place_meeting(x, y + 1, obj_Ground)","\n    {","\n        gravity = 0.01;","\n    }","\n    else","\n    {","\n        gravity = 0;","\n    }"," ","The above code will only apply gravity if the instance does not find any instances of \"obj_Ground\" beneath it."," ","Back: ","Instance Variables"," ","Next: ","gravity_direction"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gravity"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"538"})