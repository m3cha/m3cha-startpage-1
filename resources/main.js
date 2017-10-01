$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 18 || n < 3) {
	  // If time is after 6PM or before 3AM
	  document.getElementById("time").innerHTML = "Good evening, Sir";
    document.title = "Good Evening"
  }
	else if (n > 12 && n < 18) {
	  // If time is between 12PM – 8PM
	  document.getElementById("time").innerHTML = "Good afternoon, Sir";
    document.title = "Good Afternoon";
  }
	else
	  // Else
	  document.getElementById("time").innerHTML = "Good morning, Sir";
});

function interpretSearch() {
    var search = document.getElementById("js-search-input").value.split(" ");
    var searchTerms = "";
    console.log(search[0])
    switch(search[0])
    {
        case '?':
            alert("r: Reddit\nv: Voat\nyt: youtube\na: amazon");
            break;
        case 'r:':
            window.location.href = "https://reddit.com/r/" + search[1];
            return false;
        case 'v:':
            window.location.href = "https://voat.co/v/" + search[1];
            return false;
        case 'yt:':
            for(var i = 1; i < search.length; i++)
            {
                searchTerms += search[i]+'+';
            }
            window.location.href = "https://youtube.com/results?search_query=" + searchTerms;
            return false;
        case 'a:':
            for(var i = 1; i < search.length; i++)
            {
                searchTerms += search[i]+'+';
            }
            window.location.href = "https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + searchTerms;
            return false;
        case 'wa:':
            for(var i = 1; i < search.length; i++)
            {
                searchTerms += search[i]+'+';
            }
            window.location.href = "https://www.wolframalpha.com/input/?i=" + searchTerms;
            return false;
        default:
            for(var i = 0; i < search.length; i++)
            {
                searchTerms += search[i]+'+';
            };
            window.location.href = "https://google.com/search?q="+searchTerms;
            return false;
    }
};