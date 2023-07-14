rh._.exports({"0":[[" ","file_text_write_string"]],"1":[["file_text_write_string"]],"2":[[" ","file_text_write_string"]],"3":[[" ","With this function you can write a string to a previously opened text file. If the file already contains information, this information will be erased and the string will be written at the beginning of the file, unless you have opened the file with the ","file_text_open_append()",". You can also avoid this by using the ","file_text_readln()"," function along with the ","file_text_eof()"," function to loop through the contents of the file until you get to the end and then start writing."],[" ","file_text_write_string(fileid, str);"," ","Argument","Type"," ","Description"," ","fileid","Text File ID"," ","The id of the file to edit."," ","str","String"," ","The string to write to the file."],[" ","Real"],[" ","var file = file_text_open_write(working_directory + \"hiscore.txt\");","\n    for (var i = 0; i < 10; ++i;)","\n    {","\n        file_text_write_real(file, scr[i]);","\n        file_text_writeln(file);","\n        file_text_write_string(file, scr_name[i]);","\n        file_text_writeln(file);","\n    }","\n    file_text_close(file);"," ","The above code opens a file for writing and then loops through two arrays, writing each array value to a new line of the file. The file is then closed when the loop has finished."," ","Back: ","Text Files"," ","Next: ","file_text_writeln"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["file_text_write_string"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1358"})