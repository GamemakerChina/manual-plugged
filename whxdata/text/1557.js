rh._.exports({"0":[[" ","gpu_set_tex_max_mip_ext"]],"1":[["gpu_set_tex_max_mip_ext"]],"2":[[" ","gpu_set_tex_max_mip_ext"]],"3":[[" ","With this function you can get the currently set maximum mipmap level which is to be used for a given shader sampler. You supply the index value for the shader sampler (as returned by the function ","shader_get_sampler_index()",", and the function will return the current maximum mipmap level, where a value of 0 is the highest resolution, 1 is to use the first mipmap, 2 is the second etc... Note that this can be quite useful for avoiding bleeding artifacts when rendering textures, for example, setting the texture page border to 8px and then setting the max mipmap level to 3 will ensure you don't get any bleeding problems at greater render distances."],[" ","gpu_set_tex_max_mip_ext(sampler_index, maxmip);"," ","Argument","Type"," ","Description"," ","sampler_index","Shader Sampler Handle"," ","The index of the shader sampler to get"," ","maxmip","Real"," ","The maximum mipmap level value to use (default: 16)"],[" ","N/A"],[" ","var _sampleIndex = shader_get_sampler_index(shd_Glass, \"s_Background\");","\n    var _spriteTex = sprite_get_texture(sprite_index, 0);","\n    shader_set(shd_Glass);","\n    if gpu_get_tex_max_mip_ext(_sampleIndex) != 4","\n    {","\n        gpu_set_tex_max_mip_ext(_sampleIndex, 4);","\n    }","\n    texture_set_stage(_sampleIndex , _spriteTex);","\n    shader_reset();"," ","The above code sets the maximum mipmap level to 4 for the given shader texture sampler if it has not already been set to 4."," ","Back: ","Mipmapping"," ","Next: ","gpu_set_tex_max_aniso"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gpu_set_tex_max_mip_ext"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1557"})