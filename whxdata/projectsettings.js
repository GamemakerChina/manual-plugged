// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;
var defaultTopic = "Content.htm";
rh._.exports(defaultTopic);
rh.consts('DEFAULT_TOPIC', encodeURI("Content.htm"));
rh.consts('HOME_FILEPATH', encodeURI('index.htm'));
rh.consts('START_FILEPATH', encodeURI('index.htm'));
rh.consts('HELP_ID', 'b39bffa1-a4e5-4296-80c0-466df1249f48' || 'preview');
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_LNG_NAME'), "en");
model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG'), {"Contents":"Contents","Index":"Index","Search":"Search","Glossary":"Glossary","Logo/Author":"Powered by","Show":"Show","Hide":"Hide","SyncToc":"SyncToc","Prev":"Previous","Next":"Next","Disabled Prev":"<<","Disabled Next":">>","Separator":"|","OpenLinkInNewTab":"Open in new tab","SearchOptions":"Search options","Loading":"Loading...","UnknownError":"Unknown error","Logo":"Logo","HomeButton":"Home","SearchPageTitle":"Search results","PreviousLabel":"Previous","NextLabel":"Next","TopicsNotFound":"No results found","JS_alert_LoadXmlFailed":"Failed to load XML file","JS_alert_InitDatabaseFailed":"Failed to initialise database","JS_alert_InvalidExpression_1":"The search string you typed is not valid.","Searching":"Searching...","Cancel":"Cancel","Canceled":"Cancelled","ResultsFoundText":"%1 result(s) found for %2","SearchResultsPerScreen":"Search results per page","Back":"Back","TableOfContents":"Table of Contents","IndexFilterKewords":"Filter keywords","GlossaryFilterTerms":"Filter terms","ShowAll":"All","HideAll":"Hide All","ShowHide":"Show/Hide","IeCompatibilityErrorMsg":"This page cannot be viewed in Internet Explorer 8 or earlier version.","NoScriptErrorMsg":"Enable JavaScript support in the browser to view this page.","EnableAndSearch":"Include all words in search","HighlightSearchResults":"Highlight search results","Print":"Print","Filter":"Filter","SearchTitle":"Search","ContentFilterChanged":"Content filter has changed. Search again.","EndOfResults":"End of search results.","Reset":"Reset","NavTip":"Close","ToTopTip":"Go to top","ApplyTip":"Apply","SidebarToggleTip":"Expand/Collapse","Copyright":"© Copyright 2019. All rights reserved.","FavoriteBoxTitle":"Favourites","setAsFavorites":"Add to Favourites","unsetAsFavorite":"Remove as Favourite","favoritesNameLabel":"Name","favoritesLabel":"Favourites","setAsFavorite":"Set as Favourite","nofavoritesFound":"You have not marked any topic as a favourite.","Welcome_header":"Welcome to our Help Centre","Welcome_text":"What can we help you with today?","SearchButtonTitle":"Search for...","ShowTopicInContext":"Click here to see this page in full context","TopicHiddenText":"This topic is filtered out by the selected filters.","NoTermsFound":"No terms found","NoKeywordFound":"No keyword found","SkipToMainContent":"Skip to main content","SearchPaginationLabel":"%1 to %2 of %3 results","NextSearchResults":"Next search page","PrevSearchResults":"Previous search page"});

model.publish(rh.consts('KEY_HEADER_TITLE'), "GameMaker Manual");
model.publish(rh.consts('PDF_FILE_NAME'), "");
model.publish(rh.consts('MAX_SEARCH_RESULTS'), "20");
model.publish(rh.consts('KEY_SKIN_FOLDER_NAME'), "Charcoal_Grey");
model.publish(rh.consts('CHAT_API_SESSION_TOKEN'), "");
model.publish(rh.consts('CHAT_API_PROJ_ID'), "");

model.publish(rh.consts('KEY_SUBSTR_SEARCH'), "true");
model.publish(rh.consts('KEY_LOGO_URL'), "");
model.publish(rh.consts('KEY_SPECIAL_CHARS'), "0;1;2;3;4;5;6;7;8;9");
})();
