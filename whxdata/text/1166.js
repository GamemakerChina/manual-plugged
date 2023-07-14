rh._.exports({"0":[[" ","gpu_set_tex_min_mip_ext"]],"1":[["gpu_set_tex_min_mip_ext"]],"2":[[" ","gpu_set_tex_min_mip_ext"]],"3":[[" ","With this function you can set the minimum mipmap level which is currently used for a given shader sampler. You supply the index value for the shader sampler (as returned by the function ","shader_get_sampler_index()",", and then give a value, where 0 is for full resolution, 1 is for the first mipmap, 2 for the second etc..."],[" ","gpu_set_tex_min_mip_ext(sampler_index, minmip);"," ","Argument","Type"," ","Description"," ","sampler_index","Shader Sampler Handle"," ","The index of the shader sampler to get"," ","minmip","Real"," ","The minimum mipmap level to use"],[" ","N/A"],[" ","var _sampleIndex = shader_get_sampler_index(shd_Glass, \"s_Background\");","\n    var _spriteTex = sprite_get_texture(sprite_index, 0);","\n    shader_set(shd_Glass);","\n    if gpu_get_tex_min_mip_ext(_sampleIndex) != 0","\n    {","\n        gpu_set_tex_min_mip_ext(_sampleIndex, 0);","\n    }","\n    texture_set_stage(_sampleIndex , _spriteTex);","\n    shader_reset();"," ","The above code sets the minimum mipmap level to 0 for the given shader texture sampler if it has not already been set to 0."," ","Back: ","Mipmapping"," ","Next: ","gpu_set_tex_max_mip"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gpu_set_tex_min_mip_ext"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1166"})