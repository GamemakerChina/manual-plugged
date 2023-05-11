rh._.exports({"0":[[" ","Get Tile Data Transform"]],"1":[["GML Visual Action - Get Tile Data Transform"]],"2":[["Get Tile Data Transform"]],"3":[[" "," Get Tile Data Transform"]],"4":[[" ","With this action you can find out if the tile data for a tile has been transformed in one of three ways: flipped, mirrored or rotated. The tile data is simply a value that reflects the index of the tile along with the transforms applied, and you will normally want to get the tile data first using either ","Get Tile Data In Cell"," or ","Get Tile Data At Pixel"," before using this action. The action will return ","true"," if the chosen transform has been applied to the tile-data, or ","false"," otherwise, and the returned value will then be stored in the target variable which can have been created previously or can be a new temporary one (if you check the \"Temp\" check-box). For more information on tile data, please see the GML section on ","Tile Map Functions","."],[" ","Argument"," ","Description"," ","Tile"," ","The tile-data for the tile to get the transform from"," ","Transform"," ","The transform to check"],[" ","The above action block code gets the tile data at the mouse position and then checks to see if the tile has had a rotation transform applied to it. If it has then the transform is reset and the tile data sets the tile at the position again."," ","Back: ","Tile Actions"," ","Next: ","Set Tile Index At Pixel"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1681"})