rh._.exports({"0":[[" ","physics_fixture_set_restitution"]],"1":[["physics_fixture_set_restitution"]],"2":[[" ","physics_fixture_set_restitution"]],"3":[[" ","In physics, restitution is defined as \"the return of an object or system to its original state after elastic deformation\", but as the fixtures in the ","GameMaker"," are really rigid bodies and cannot be deformed, restitution is\n    really a way of saying how \"bouncy\" the fixture is. This setting will affect how much an object \"bounces\" when it collides with other objects and is co-dependent on other forces that act on the instance like gravity and friction,\n    and is usually a value between 0 and 1 (higher values can be used but may give unpredictable results). Here is an illustration of how it works:"],[" ","physics_fixture_set_restitution(fixture, restitution)"," ","Argument","Type"," ","Description"," ","fixture","Physics Fixture ID"," ","The index of the fixture"," ","restitution","Real"," ","The restitution of the fixture (usually between 0 and 1)"],[" ","N/A"],[" ","physics_fixture_set_restitution(fix_Ball, 0.9);"," ","The code above will set the restitution of the fixture indexed in \"fix_ball\" to 0.9."," ","Back: ","Fixtures"," ","Next: ","physics_fixture_set_sensor"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["physics_fixture_set_restitution"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1278"})