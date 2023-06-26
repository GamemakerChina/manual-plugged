rh._.exports({"0":[[" ","part_emitter_exists"]],"1":[["part_emitter_exists"]],"2":[[" ","part_emitter_exists"]],"3":[[" ","With this function you can check to see if the given particle emitter indexed exists in the given system or not. Note that if the variable being checked is an uninitialised variable (that a particle emitter would otherwise have its index assigned to) this will throw an error."],[" ","part_emitter_exists(ps, ind);"," ","Argument"," ","Type"," ","Description"," ","ps"," ","Particle System ID"," ","The particle system to check for an emitter."," ","ind"," ","Particle Emitter ID"," ","The index of the emitter to search for."],[" ","Boolean"],[" ","if part_emitter_exists(sname, p_emit1)","\n    {","\n        part_emitter_burst(sname, p_emit1, part_1, 30);","\n    }"," ","The above code will check for the emitter indexed in the variable \"permit\" and if it exists, it will burst 30 particles from it."," ","Back: ","Particle Emitters"," ","Next: ","part_emitter_create"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["part_emitter_exists"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"700"})