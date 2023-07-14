rh._.exports({"0":[[" ","shader_is_compiled"]],"1":[["shader_is_compiled"]],"2":[[" ","shader_is_compiled"]],"3":[[" ","This function will check a shader at run-time to make sure that it has been successfully compiled. If it has then the function returns ","true"," otherwise it returns ","false",". This function should be used at the start of the game to make sure that the platform running your game has successfully compiled any shaders used (particularly on Windows where some computers may be using DX9 with Shader Level 2.0 and not a later version using shader level 3.0)."," ","If your shader has ","NOT"," been compiled and you call ","shader_set()"," the game will crash, so it is worth while having some sort of check whenever you are using anything other than simple GLSL ES shaders."],[" ","shader_is_compiled(shader);"," ","Argument","Type"," ","Description"," ","shader","Shader Asset"," ","The shader to check."],[" ","Boolean"],[" ","global.GFX = false;","\n    if (shader_is_compiled(sh_glass) && shader_is_compiled(sh_warp))","\n    {","\n        global.GFX = true;","\n    }"," ","The above code will set a global variable to ","false",", and then if both the shaders being checked have compiled correctly, it will be set to ","true","."," ","Back: ","Shaders"," ","Next: ","shaders_are_supported"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["shader_is_compiled"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1133"})