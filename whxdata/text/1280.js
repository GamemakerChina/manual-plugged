rh._.exports({"0":[[" ","layer_background_index"]],"1":[["layer_background_index"]],"2":[[" ","layer_background_index"]],"3":[[" ","This function can be used to set the image index of the background sprite which has multiple sub-images. You give the background element ID (which you get when you create a background element using ","layer_background_create()"," or when you use the function ","layer_background_get_id()","), and then set the image index to use. If you set a value outside of the range of sub-images, then the image index will loop around."],[" ","layer_background_index(background_element_id, image_index);"," ","Argument"," ","Type"," ","Description"," ","background_element_id"," ","Background Element ID"," ","The unique ID value of the background element to change"," ","index"," ","Real"," ","The image index to use for the background"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Background_trees\");","\n    var back_id = layer_background_get_id(lay_id);","\n    layer_background_index(back_id, 1);"," ","The above code will get the layer ID for the layer named \"Background_trees\" and then use that to get the ID of the background element on that layer. This ID is then used to change the element image index."," ","Back: ","Background Layers"," ","Next: ","layer_background_speed"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_background_index"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1280"})