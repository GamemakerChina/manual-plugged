rh._.exports({"0":[[" ","physics_fixture_set_polygon_shape"]],"1":[["physics_fixture_set_polygon_shape"]],"2":[[" ","physics_fixture_set_polygon_shape"]],"3":[[" ","This function sets a polygon shape for your fixture, but you will need to use ","physics_fixture_add_point()"," to actually define the shape of this polygon relative to the origin of the fixture. The polygon\n    is closed when the fixture is bound to an instance. You should note too that this function ","must"," be called before defining any points, and you must also have at least three points defined for your polygon before binding it to an instance or\n    you will get an error."],[" ","physics_fixture_set_polygon_shape(fixture)"," ","Argument","Type"," ","Description"," ","fixture","Physics Fixture ID"," ","the index of the fixture"],[" ","N/A"],[" ","physics_fixture_set_polygon_shape(fix_Ship);"," physics_fixture_add_point(fix_Ship, 0,0);"," physics_fixture_add_point(fix_Ship, -40, 100);"," physics_fixture_add_point(fix_Ship, 40, 100);"," ","The code above will apply a polygon shape to the fixture indexed in the variable \"fix_Ship\" and then defines three points to create a triangular shape."," ","Back: ","Fixtures"," ","Next: ","physics_fixture_add_point"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["physics_fixture_set_polygon_shape"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"920"})