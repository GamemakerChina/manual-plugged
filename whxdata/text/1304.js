rh._.exports({"0":[[" ","part_type_scale"]],"1":[["part_type_scale"]],"2":[["part_type_scale"]],"3":[[" ","part_type_scale"]],"4":[[" ","This function will set the horizontal and vertical scale of the particle before any other size changes are made. This function works on the ratio of the sprite size, so a value of 1 (the default value) is a 1:1 ratio, meaning that 0.5 would be half and 2 double."],[" ","part_type_scale(ind, xscale, yscale);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Particle Type ID"," ","The index of the particle type to change."," ","xscale"," ","Real"," ","The horizontal scaling of the base particle."," ","yscale"," ","Real"," ","The vertical scaling of the base particle."],[" ","N/A"],[" ","part_type_shape(particle1, pt_shape_flare);","\n    part_type_size(particle1, 2, 2, 0.10, 1);","\n    part_type_scale(particle1, 8, 0.50);","\n    part_type_colour3(particle1, 8388608, 4227327, 8454143);","\n    part_type_alpha3(particle1, 0.10, 0.10, 0);","\n    part_type_speed(particle1, 0, 1, 0.18, 20);","\n    part_type_direction(particle1, 0, 359, 0, 0);","\n    part_type_orientation(particle1, 0, 0, 0, 0, 1);","\n    part_type_blend(particle1, 1);","\n    part_type_life(particle1, 10, 40);"," ","The above code will set various particle values including the scale which sets the xscale to eight times the size and the yscale to half the size."," ","Back: ","Particle Types"," ","Next: ","part_type_speed"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1304"})