let mainModule = ((UIModule, dataModule) => {
    $(function () {
        const request = $.ajax({
            url: 'http://api.tvmaze.com/shows',
            method: "GET"
        })

        request.done(function (response) {
            const shows = response.slice(0, 50);
            console.log(shows);
            for (let i = 0; i < shows.length; i++) {

                let showName = response[i].name;
                console.log(showName);
                let showImage = response[i].image.medium;
                console.log(showImage);
                let showUrl = response[i].url;
                console.log(showUrl);

                let element = `
                       <div class="card">
                            <div class="card-body">
                            <img src="${showImage}" alt=""><br>
                                 <a href="${showUrl}" class="card-link">${showName}</a> </div>
                
                         </div>
                     </div>`
                $("#main").append(element);
                //var show = new dataModule.Show(response[i].id, response[i].name, response[i].image.medium, response[i].summary);
                //tvShows.addShow(show);

            }
        })

        $(document).on('click', 'img', function (event) {

            const clickedId = $(this).attr('id');
            var clickedShow;

            for (let i = 0; i < tvShows.showList.length; i++) {
                if (tvShows.showList[i].id == clickedId) {
                    clickedShow = tvShows.showList[i];
                }
            }

            let seasonRequest = $.ajax({
                url: `https://api.tvmaze.com/shows/${clickedId}/seasons`,
                method: 'GET'
            })
            seasonRequest.done(function (resSeasons) {

                resSeasons.forEach((element) => {
                    var season = new dataModule.Season(element.premiereDate, element.endDate);
                    clickedShow.addSeason(season);
                })
            });

            let castRequest = $.ajax({
                url: `https://api.tvmaze.com/shows/${clickedId}/cast`,
                method: 'GET'
            })

            castRequest.done(function (resCast) {

                resCast.forEach((element) => {
                    var cast = new dataModule.Cast(element.person.name);
                    clickedShow.addCast(cast);
                })
            });

            UIModule.showMovieInfo(clickedShow);
            console.log(clickedShow);
        });
    });
})(UIModule, dataModule);