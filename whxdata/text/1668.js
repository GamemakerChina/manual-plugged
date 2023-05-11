rh._.exports({"0":[[" ","gpu_set_texrepeat_ext"]],"1":[["gpu_set_texrepeat_ext, gpu_set_tex_repeat_ext"]],"2":[["gpu_set_texrepeat_ext, gpu_set_tex_repeat_ext"]],"3":[[" ","gpu_set_texrepeat_ext"]],"4":[[" ","This function can be used to set whether a single sampler \"slot\" repeats the given texture when using ","Shaders"," in ","GameMaker"," . Setting it to ","true"," will repeat the texture if the uv coordinates are out with the 0-1 range, while a setting of ","false"," will mean no repeating. The likely use case for these functions is for repeating a texture in 3D but in order for it to work and not pull images from the rest of the texture page, the sprite used will need to be marked as being on a \"Separate Texture Page\" in the Sprite Editor."," ","NOTE"," ","This setting will be over-ridden by the value set when calling the function ","gpu_set_texrepeat()","."],[" ","gpu_set_texrepeat_ext(sampler_id, enable);"," ","Argument","Type"," ","Description"," ","sampler_id","Shader Sampler Handle"," ","The sampler id from the shader."," ","enable","Boolean"," ","Enable or disable texture filtering (","true"," / ","false",")"],[" ","N/A"],[" ","var s_tex = shader_get_sampler_index(shader_glass, \"s_NoiseSampler\");","\n    if gpu_get_texfilter_ext(s_tex)","\n    {","\n        gpu_set_texfilter_ext(s_tex, false);","\n    }","\n    else","\n    {","\n        gpu_set_texfilter_ext(s_tex, true);","\n    }"," ","The above code checks to see if texture filtering is on or off for a specific sampler ID (stored in a local variable) and switches it accordingly."," ","Back: ","GPU Control"," ","Next: ","gpu_push_state"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1668"})