rh._.exports({"0":[[" ","part_emitter_delay"]],"2":[[" ","part_emitter_delay"]],"3":[[" ","This functi","on sets the delay bef","ore the particle emitter creates particles f","or the first time"," when it is in stream m","ode."," ","The value for the delay is chosen t","o be a rand","om value between ","delay_min"," and ","delay_max","."," ","NOTE"," The countdown timer is paused when the emitter is disabled using ","part_emitter_enable","."],[" ","part_emitter_delay","(ps, ind, delay_min, delay_max, delay_unit);"," ","Argument"," ","Type"," ","Description"," ","ps"," ","Particle System Instance"," ","The index of the particle system containing the emitter"," ","ind"," ","Particle Emitter ID"," ","The emitter index"," ","delay_min"," ","Real"," ","The minimum possible value for the delay, expressed in ","delay_unit"," ","delay_max"," ","Real"," ","The maximum possible value for the delay, expressed in ","delay_unit"," ","delay_unit"," ","Time Source Unit Constant"," ","The unit in which ","delay_min"," and ","delay_max"," are expressed"],[" ","N/A"],[" ","Create Event"," ","ps = part_system_create();","\n    part_system_position(ps, x, y);"," ","\n    pe = part_emitter_create(ps);","\n    part_emitter_region(ps, pe, 100, 200, 100, 200, ps_shape_ellipse, ps_distr_linear);","\n    part_emitter_delay(ps, pe, 1, 1, time_source_units_seconds);","\n    part_emitter_interval(ps, pe, 0.4, 1.1, time_source_units_seconds);"," ","\n    pt = part_type_create();"," ","\n    part_emitter_stream(ps, pe, pt, 20);\n  "," ","Cleanup Event"," ","part_emitter_destr","oy(pe);","\n      part_system_destr","oy(ps);","\n        part_type_destr","oy(pt);"," ","The c","ode ab","ove sets up a particle system ","ps"," with a single emitter ","pe"," in the Create event. The emitter is c","onfigured t","o emit particles in a circle shape ","of 100x100 pixels and t","o wait f","or ","1 sec","ond"," t","o start streaming (","using ","part_emitter_delay",")"," after being \"turned ","on\" with"," ","part_emitter_stream",". Using ","part_emitter_interval"," it is c","onfigured"," t","o keep emitting particles every 0.4 t","o 1.1 sec","onds"," (i.e. the interval between ","tw","o \"bursts\" in stream m","ode is at least 0.4 sec","onds"," and at m","ost"," 1.1 sec","onds","."," ","A new particle type ","pt"," is then created and the emitter set t","o create 20 ","of them at a time ","using ","part_emitter_stream","."," ","Finally, since they're dynamic res","ources, ","the particle emitter, the system and the type are all destr","oyed in the Cleanup event."," ","Back: ","Particle Emitters"," ","Next: ","part_emitter_interval"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2164"})