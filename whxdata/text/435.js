rh._.exports({"0":[[" ","file_text_writeln"]],"1":[["file_text_writeln"]],"2":[["file_text_writeln"]],"3":[[" ","file_text_writeln"]],"4":[[" ","With this function you can write a new line to an opened text file. In this way you can skip lines or write information on a line by line basis (see example code below)."],[" ","file_text_writeln(fileid);"," ","Argument","Type"," ","Description"," ","fileid","Text File ID"," ","The id of the file to edit."],[" ","Real"],[" ","var file = file_text_open_write(working_directory + \"hiscore.txt\");","\n    for (var i = 0; i < 10; ++i;)","\n    {","\n        file_text_write_real(file, scr[i]);","\n        file_text_writeln(file);","\n        file_text_write_string(file, scr_name[i]);","\n        file_text_writeln(file);","\n    }","\n    file_text_close(file);"," ","The above code opens a file for writing and then loops through two arrays, writing each array value to a new line of the file. The file is then closed when the loop has finished."," ","Back: ","Text Files"," ","Next: ","file_text_eoln"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"435"})