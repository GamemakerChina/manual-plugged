rh._.exports({"0":[[" ","ds_grid_resize"]],"1":[["ds_grid_resize"]],"2":[[" ","ds_grid_resize"]],"3":[[" ","With this function you can resize the given DS grid to have a different width and/or height. If the grid size is larger than the current grid, the new cells will have a base value of 0, and if the size is smaller then the values held in the cells that\n    are no longer within the new size will be lost. All other cells will be left untouched."],[" ","ds_grid_resize(index, w, h);"," ","Argument","Type"," ","Description"," ","index","DS Grid ID"," ","This index of the grid to resize."," ","w","Real"," ","The new width of the grid."," ","h","Real"," ","The new height of the grid."],[" ","N/A"],[" ","ds_grid_resize(global.Grid, room_width / 32, room_height / 32);"," ds_grid_clear(global.Grid, -1)"," ","The above code will resize the DS grid indexed in the global variable \"Grid\" and then clear it so that each cell holds the value -1."," ","Back: ","DS Grids"," ","Next: ","ds_grid_clear"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_grid_resize"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"642"})