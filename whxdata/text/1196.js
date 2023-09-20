rh._.exports({"0":[[" ","ds_grid_value_disk_exists"]],"1":[["ds_grid_value_disk_exists"]],"2":[[" ","ds_grid_value_disk_exists"]],"3":[[" ","With this function you can check to see if a specific value (real or string) is present within a circular area of a given DS grid. If it is present the function will return ","true"," otherwise it will return ","false","."],[" ","ds_grid_value_disk_exists(index, xm, ym, r, val);"," ","Argument","Type"," ","Description"," ","index","DS Grid"," ","The index of the grid."," ","xm","Real"," ","The x position of the disk on the grid."," ","ym","Real"," ","The y position of the disk on the grid."," ","r","Real"," ","The radius of the disk on the grid."," ","val","Any"," ","The value to find."],[" ","Boolean"],[" ","if ds_grid_value_disk_exists(grid, 5, 5, 5, val)","\n    {","\n        xpos = ds_grid_value_disk_x(grid, 5, 5, 5, val);","\n        ypos = ds_grid_value_disk_y(grid, 5, 5, 5, val);","\n    }"," ","The above code checks a DS grid for a specific value within a disk region. if it is found, it then stores the x and y position of the value in two variables for later use."," ","Back: ","DS Grids"," ","Next: ","ds_grid_value_x"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_grid_value_disk_exists"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1196"})