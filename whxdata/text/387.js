rh._.exports({"0":[[" ","file_text_eoln"]],"1":[["file_text_eoln"]],"2":[["file_text_eoln"]],"3":[[" ","file_text_eoln"]],"4":[[" ","With this function you can get ","GameMaker"," to check the currently opened file to see if the line being read has finished. The function returns ","true"," if the end of the line has been reached and ","false"," otherwise."],[" ","file_text_eoln(fileid);"," ","Argument","Type"," ","Description"," ","fileid","Text File ID"," ","The id of the file to check."],[" ","Boolean"],[" ","var file = file_text_open_read(working_directory + \"Game_Data.txt\");","\n    var num = 0; while (!file_text_eoln(file))","\n    {","\n        score_array[num] = file_text_read_real(file);","\n        num++;","\n    }","\n    file_text_close(file);"," ","The above code opens a file for reading then reads the values from a single line into an array."," ","Back: ","Text Files"," ","Next: ","file_text_eof"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"387"})