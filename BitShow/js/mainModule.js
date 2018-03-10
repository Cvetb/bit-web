const mainModule = ((UIModule, dataModule) => {
    const init = () => {
        const request = $.ajax({
                url: 'http://api.tvmaze.com/shows',
                method: "GET"
            });
    
            request.done(response => {
                const shows = dataModule.adaptTvShows(response);
                console.log(shows)
                UIModule.displayMainPage(shows);
            });
    } 

     $("body").on('click', '.card-body', function () {
        console.log(this);
     var id = $(this).attr('id');
        console.log(id);
         //sacuvati u localStorage-u nas id
         localStorage.setItem('id', id);
         location.href = "show-info.html";

     });

     var test = localStorage.getItem('id');
     
    // let el = `<div><h1></h1><img src="" alt=""></div>`
    // $("#singleShow").append(el);

    // let seasonRequest = $.ajax({
    //     url: `https://api.tvmaze.com/shows/${test}/seasons`,
    //     method: 'GET'
    // })
    // seasonRequest.done(function (resSeasons) {


    // })

    return {
        init
    }
}) (UIModule, dataModule);