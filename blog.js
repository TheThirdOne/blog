function get(url) {
   	return $.ajax({type: "GET", url: url, async: false}).responseText;
}