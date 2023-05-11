rh._.exports({"0":[[" ","break"]],"1":[["break"]],"2":[["break"]],"3":[[" ","break"]],"4":[[" ","The ","break"," statement is used to end prematurely a ","for",", ","repeat",", ","while"," or ","do / until"," loop of some kind, or to tell a ","switch"," statement to end at that point, or to prematurely end a ","with"," call. Please see the individual pages for these different functions to get a more in-depth explanation of how it can be used under each circumstance. Note that if ","break"," is used outside of any of these contexts it will give an error."," ","Below you can see a few basic examples of how ","break"," can be used, and its syntax is simply:"," ","break;"," ","break"," in a ","for"," loop:"," ","for (var i = 0; i < 10; i += 1)","\n    {","\n        if (array[i] == 234)","\n        {","\n            break;","\n        }","\n    }"," ","\n    num = i;\n  "," ","break"," in a ","repeat"," loop:"," ","var i = 0;","\n    var temp = 0;","\n    repeat (10)","\n    {","\n        temp += array[i];","\n        if (temp > max_total)","\n        {","\n            break;","\n        }","\n        else","\n        {","\n            i += 1;","\n        }","\n    }"," ","break"," in a ","while"," loop:"," ","var i = 0;","\n    while (!place_free(x, y))","\n    {","\n        x = random(room_width);","\n        y = random(room_height);","\n        if (i > 50)","\n        {","\n            break;","\n        }","\n        else","\n        {","\n            i+=1;","\n        }","\n    }"," ","break"," in a ","do / until"," loop:"," ","var _id = noone;","\n    do","\n    {","\n        _id = list[| 0];","\n        if instance_exists(_id)","\n        {","\n            break;","\n        }","\n        ds_list_delete(list, 0);","\n    }","\n    until (ds_list_empty(list));","\n    target = _id;"," ","break"," when using ","with",":"," ","var count = 0;","\n    with (obj_Enemy)","\n    {","\n        count++;","\n        if (count > 10)","\n        {","\n            break;","\n        }","\n        hp = 100;","\n    }"," ","break"," in a ","switch",":"," ","switch (keyboard_key)","\n    {","\n        case vk_left:","\n        case ord(\"A\"):","\n            x -= 4;","\n        break;"," ","\n        case vk_right:","\n        case ord(\"D\"):","\n            x += 4;","\n        break;"," ","\n        case vk_up:","\n        case ord(\"W\"):","\n            y -= 4;","\n        break;"," ","\n        case vk_down:","\n        case ord(\"S\"):","\n            y += 4;","\n        break;","\n    }\n  "," ","Back: ","Language Features"," ","Next: ","continue"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2187"})