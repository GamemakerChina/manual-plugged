rh._.exports({"0":[[" ","mp_grid_add_rectangle"]],"1":[["mp_grid_add_rectangle"]],"2":[[" ","mp_grid_add_rectangle"]],"3":[[" ","This function asks you to define a rectangle within the room, and then it marks all MP grid cells \"touch\" that rectangle as being forbidden, meaning that the path-finding functions cannot cross them. The image below illustrates how this works:"," ","As you can see, the rectangle defined by (50, 90) to (200, 180) marks all the equivalent MP grid cells that it touches as being forbidden."],[" ","mp_grid_add_rectangle(id, x1, y1, x2, y2);"," ","Argument"," ","Type"," ","Description"," ","id"," ","MP Grid ID"," ","Index of the mp_grid that is to be used"," ","x1"," ","Real"," ","The x coordinate of the left side of the rectangle to check."," ","y1"," ","Real"," ","The y coordinate of the top side of the rectangle to check."," ","x2"," ","Real"," ","The x coordinate of the right side of the rectangle to check."," ","y2"," ","Real"," ","The x coordinate of the bottom side of the rectangle to check."],[" ","N/A"],[" ","mp_grid_add_rectangle(grid, 0, 0, 100, 200);"," ","The above code will mark as forbidden all cells of the mp_grid indexed in the variable \"grid\" that fall within the area 0,0 to 100,200."," ","Back: ","Motion Planning"," ","Next: ","mp_grid_get_cell"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["mp_grid_add_rectangle"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1595"})