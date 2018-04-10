
$(function () {
    const request = $.ajax({
        url: 'http://api.tvmaze.com/shows',
        method: "GET"
    })

    request.done(function (response) {
        const shows = response.slice(0, 50);
        console.log(shows);
        for (let i = 0; i < shows.length; i++) {

            showName = response[i].name;
            console.log(showName);
            showImage = response[i].image.medium;
            console.log(showImage);
            showUrl = response[i].url;
            console.log(showUrl);
            
             let element = `<div class="row">
                       <div class="card col-xl-2 offset-xl-3">
                            <div class="card-body">
                            <img src="${showImage}" alt="">
                                 <a href="${showUrl}" class="card-link">${showName}</a> </div>
                
                         </div>
                     </div>`
                             $("#main").append(element);

        }
})
});
