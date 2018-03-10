const dataModule = (() => {
    class TvShow {
        constructor(name, url, id) {
            this.name = name;
            this.url = url;
            this.id = id;
        }
    }

    const createTvShow = (name, url, id) => {
        return new TvShow(name, url, id);
    }

    const adaptTvShows = (allShows) => {
        const shows = allShows.slice(0, 50);
        const showObjects = shows.map(show => {
            return createTvShow(show.name, show.image.medium, show.id);
        });
        return showObjects;
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
        adaptTvShows
    }
})()