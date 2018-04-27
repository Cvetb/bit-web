$("#search").on("keydown", (event) => {

    if (event.keyCode == 13) {
        event.preventDefault();

        var user = $("#search").val();

        var request = $.ajax({
            url: `https://api.github.com/search/users?q=${user}`,
            method: "GET"
        });

        request.done((response) => {
            const users = response.items;


            for (let i = 0; i < users.length; i++) {
                const card = $("#test");
                const item = $(`
                <div class="card" style="width:400px">
                <img class="card-img-top" src="${users[i].avatar_url}"/>
                <div class="card-body">
                <p  class="card-text">${users[i].login}<p/>
                </div>
                </div>`

                );
                card.append(item);
            }

        });

        request.fail((jqXHR, textStatus) => {
            alert("Request failed" + textStatus);
        })
    }
});