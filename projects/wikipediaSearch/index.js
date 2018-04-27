$(() => {

    const firstPartUrl =
        `https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&prop=extracts&exlimit=max&explaintext&exintro&gsrsearch=`;

    /* Get data from wiki api */
    wikiResult = (url) => {
        $.getJSON(url, (data) => {
            $('#searchResults').html('');
            $.each(data.query.pages, (key, val) => {
                let text = val.extract.split(' ').slice(0, 50).join(' ') + '...';
                $('#searchResults').append(
                    `<div class='results' id=${val.pageid}>
                        <h3> ${val.title} </h3>
                            <p>${text}</p>
                    </div>`
                );
            });
        });
    }

    $('#search').click(() => {
        let search = $('#searchTerm').val();
        wikiResult(firstPartUrl + search + '&callback=?');
    });

    $('#searchTerm').on("keydown", (event) => {
        if (event.keyCode == 13) {
            event.preventDefault();
            $('#search').click();
        }
    });

});