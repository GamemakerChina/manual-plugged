rh._.exports({"0":[[" ","part_emitter_create"]],"1":[["part_emitter_create"]],"2":[["part_emitter_create"]],"3":[[" ","part_emitter_create"]],"4":[[" ","This function is used to create a new particle emitter in the given particle system. The function will return the index value for the new emitter which must be stored in a variable and used in all further functions that reference the emitter, and the emitter itself must be destroyed when no longer being used to prevent memory leaks (this can be achieved using the specific emitter destroy functions or by destroying the whole particle system that the emitter belongs to)."," ","NOTE"," Emitter IDs returned by this function are reused, e.g. if you first create three particle emitters they will have IDs 0, 1 and 2 assigned. If you then destroy the second emitter (which got an ID of 1) using ","part_emitter_destroy"," and then create another emitter, then this emitter will reuse the ID of 1. Since emitter ID 2 is in use, the next emitter will get an ID of 3, and so on."],[" ","part_emitter_create(ps);"," ","Argument"," ","Type"," ","Description"," ","ps"," ","Particle System ID"," ","The particle system to create the emitter in."],[" ","Particle Emitter ID"],[" ","p_emit1 = part_emitter_create(Sname);"," ","This will create a new particle emitter and store its index in the variable \"p_emit\"."," ","Back: ","Particle Emitters"," ","Next: ","part_emitter_clear"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1428"})