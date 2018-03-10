let dataModule = (() => {

    class tvShows {
        constructor(show) {
            var showList = [];
            this.limit = 50;

        }
        addShow(show) {
            this.showList.push(show);
}
    }

    class Show {
        constructor(name, imageUrl, showId, details) {
            this.name = name;
            this.imageUrl = imageUrl;
            this.id = showId;
            this.seasons = [];
            this.cast = [];
            this.details = details;

        }
        getName() {
            return name;
        }
        addSeason(season) {
            this.seasons.push(season);
        }

        addCast(cast) {
            this.cast.push(cast);
        }
    }

    class Cast {
        constructor(name) {
            this.name = name;

        }
    }
    class Season {
        constructor(startDate, endDate) {
            this.start = startDate;
            this.end = endDate;
        }

    }
   
    


   return {
        //Season: Season,
        //Cast: Cast,
        //Show: Show,
        //TvShows: TvShows,
      
}
})()