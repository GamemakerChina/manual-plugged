rh._.exports({"0":[[" ","Dialog"]],"1":[["Dialog,Dialogue"]],"2":[[" ","Dialog"]],"3":[[" ","Most modern computers and mobile devices do not like it when a game is stopped while a dialog window is shown. They tend to interpret this as game runner having stopped, and may consider it an error and close the app prematurely. To prevent this ","GameMaker"," has ","asynchronous"," dialog functions that permit you to request certain forms of user feedback or input, but without blocking the game runner at any time, meaning that - when called - the game will run as normal in the background while the user responds to the shown dialog window. Once the user has responded, a ","Dialog Asynchronous Event"," will be called so that you can deal with the results."," ","NOTE"," With the exception of ","shop_leave_rating()",", these functions are ","for ","debugging and testing use only"," and should not be used in released games. For that purpose you should create a custom user interface to receive input from players so that you have complete control over how the dialogs look and behave."," ","Below is a list of all the available asynchronous dialog functions:"," ","get_login_async"," ","get_string_async"," ","get_integer_async"," ","show_message_async"," ","show_question_async"," ","shop_leave_rating"," ","Back: ","Asynchronous Functions"," ","Next: ","Cloud Saving"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1183"})