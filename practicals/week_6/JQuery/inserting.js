var sources = ["http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150", "https://www.pexels.com/search/dog/","http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150"];

for(i = 0; i < sources.length; i++){
    var image = $("<img>");
    $("body").append(image);
    $("img").attr("src",sources[i]);
}