rh._.exports({"0":[[" ","xboxlive_matchmaking_send_invites"]],"1":[["xboxlive_matchmaking_send_invites"]],"2":[[" ","xboxlive_matchmaking_send_invites"]],"3":[[" ","This function brings up the Xbox Live system dialog to allow a user to send invitations to their game. You specify the local user who should control the dialog (and who's friends list will be used by the dialog), the unique session ID value for the session they want to invite people to, and some default text to show in the dialog. You get the session ID from the ","async_load"," DS map generated by the function ","xboxlive_matchmaking_create()","."," ","The function will return -1 if the arguments are invalid or the user is not signed into Xbox Live, or a value greater than 0 otherwise."],[" ","xboxlive_matchmaking_send_invites(from_user, session_to_invite_into, text_to_add_to_invite);"," ","Argument","Type"," ","Description"," ","from_user","Xbox User ID"," ","The local user ID for controlling the dialogue."," ","session_to_invite_into","Real"," ","The unique session ID for the session to join."," ","text_to_add_to_invite","String"," ","A short text to add to the invitation."],[" ","Real"],[" ","if gamepad_button_check_pressed(0, gp_face1)","\n    {","\n        var _uid = xboxlive_user_for_pad(0);","\n        xboxlive_matchmaking_send_invites(_uid, global.session_ID, \"Come and join my game!\");","\n    }"," ","The above code checks for a gamepad button press and if one is detected then the Xbox Live dialog for session invites will be opened."," ","Back: ","Match Making"," ","Next: ","xboxlive_matchmaking_set_joinable_session"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["xboxlive_matchmaking_send_invites"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1653"})