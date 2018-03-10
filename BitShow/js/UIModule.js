let UIModule = (() => {
    // let UISelectors = {


    // }

    const displayMainPage = (shows) => {
        shows.forEach(show => {
            const showName = show.name;
            const showImage = show.url;
            const showId = show.id;
            
            const element = `
            <div class="card">
                <div class="card-body" id= "${showId}">
                    <img src="${showImage}" alt="show"><br>
                    <a href="show-info.html" class="card-link">${showName}</a></div>
                </div>
            </div>`
            $("#main").append(element);
        })
    }

    return {
        displayMainPage
    }
})();