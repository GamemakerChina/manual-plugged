rh._.exports({"0":[[" ","physics_fixture_set_edge_shape"]],"1":[["physics_fixture_set_edge_shape"]],"2":[[" ","physics_fixture_set_edge_shape"]],"3":[[" ","This function defines an \"edge\" fixture shape. An edge shape is simply a line that will generate a collision when other fixtures over lap it, and can be very useful for generating (for example) terrain, or for creating borders around a room. The position of the edge is defined using ","local"," space, ie: the x/y position of the instance is considered (0,0), so this should be taken into consideration when creating them (in the code example below, the instance would have been placed at (0,0) in the room to avoid complications)."],[" ","physics_fixture_set_edge_shape(fixture, local_x1, local_y1, local_x2, local_y2)"," ","Argument","Type"," ","Description"," ","fixture","Physics Fixture ID"," ","the index of the fixture"," ","local_x1","Real"," ","start x position for the edge"," ","local_y1","Real"," ","start y position for the edge"," ","local_x2","Real"," ","end x position for the edge"," ","local_y2","Real"," ","end y position for the edge"],[" ","N/A"],[" ","var xx = 0;","\n    var y1 = room_height - 100;","\n    var y2 = room_height - 50 - irandom(100);","\n    for (var i = 0; i < 10; i++;)","\n    {","\n        var fix = physics_fixture_create();","\n        physics_fixture_set_edge_shape(fix, xx, y1, xx + 50, y2);","\n        physics_fixture_bind(fix, id);","\n        physics_fixture_delete(fix);","\n        xx += 50;","\n        y1 = y2;","\n        y2 = room_height - 50 - irandom(100);","\n    }"," ","The above code will create a line of \"edge\" fixtures with a variety of heights over the length of the room."," ","Back: ","Fixtures"," ","Next: ","physics_fixture_set_chain_shape"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["physics_fixture_set_edge_shape"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1712"})