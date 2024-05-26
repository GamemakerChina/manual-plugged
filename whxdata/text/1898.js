rh._.exports({"0":[[" ","gpu_set_zfunc"]],"1":[["gpu_set_zfunc,cmpfunc_never,cmpfunc_less,cmpfunc_equal,cmpfunc_lessequal,cmpfunc_greater,cmpfunc_notequal,cmpfunc_greaterequal,cmpfunc_always"]],"2":[["gpu_set_zfunc,cmpfunc_never,cmpfunc_less,cmpfunc_equal,cmpfunc_lessequal,cmpfunc_greater,cmpfunc_notequal,cmpfunc_greaterequal,cmpfunc_always"]],"3":[[" ","gpu_set_zfunc"]],"4":[[" ","This function can be used to set the z-buffer testing comparison mode (see ","gpu_set_ztestenable()"," for more information). The values available for use are any of the following constants (the default value is ","cmpfunc_lessequal","):"," ","Constant"," ","Description"," ","cmpfunc_never"," ","Never"," ","cmpfunc_less"," ","Less"," ","cmpfunc_equal"," ","Equal"," ","cmpfunc_lessequal"," ","Less or Equal"," ","cmpfunc_greater"," ","Greater"," ","cmpfunc_notequal"," ","Not Equal"," ","cmpfunc_greaterequal"," ","Greater or Equal"," ","cmpfunc_always"," ","Always"],[" ","gpu_set_zfunc(cmp_func);"," ","Argument"," ","Type"," ","Description"," ","cmp_func"," ","Comparison Function Constant"," ","The comparison mode to use (see list above)"],[" ","N/A"],[" ","gpu_set_ztestenable(true);","\n    gpu_set_zfunc(cmpfunc_always);","\n    draw_sprite(spr_Background, 0, 0, 0);","\n    gpu_set_ztestenable(false);"," ","The above code switches on z-buffer testing and sets its comparison mode before drawing a background sprite and then switches it back off again to continue drawing."," ","Back: ","GPU Control"," ","Next: ","gpu_set_zwriteenable"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1898"})