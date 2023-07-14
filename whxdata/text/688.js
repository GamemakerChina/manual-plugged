rh._.exports({"0":[[" ","ds_grid_get"]],"1":[["ds_grid_get"]],"2":[[" ","ds_grid_get"]],"3":[[" ","This function can be used to get the value from any cell within the given DS grid. If you pass invalid grid coordinates to the function, then the value returned will be ","undefined"," and an error will be shown in the output window."],[" ","ds_grid_get(index, x, y);"," ","Argument","Type"," ","Description"," ","index","DS Grid ID"," ","The index of the grid."," ","x","Real"," ","The x position of the cell you want to find the value of."," ","y","Real"," ","The y position of the cell you want to find the value of."],[" ","Any"],[" ","var xx = irandom(ds_grid_width(grid) - 1);","\n    var yy = irandom(ds_grid_height(grid) - 1);","\n    val = ds_grid_get(grid, xx, yy)"," ","The above code selects a random cell from the DS grid indexed in the variable \"grid\" and stores its value in the variable \"val\"."," ","Back: ","DS Grids"," ","Next: ","ds_grid_get_max"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_grid_get"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"688"})