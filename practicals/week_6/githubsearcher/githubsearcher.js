$("#search").on("keydown", function (event) {
    
    if (event.keyCode == 13) {
        event.preventDefault();
        
    


var user = $("#search").val();

    var request = $.ajax({
        url: "https://api.github.com/search/users?q="+user,
        method: "GET"
    });
    request.done(function (response) {
        const users = response.items;

        console.log(users);
        for (let i = 0; i < users.length; i++) {
            const img = $(`<img src="${users[i].avatar_url}" />`)
            $("#test").append(img);
            const login = $(`<p>${users[i].login}<p/>`)
            $("#test").append(login);
        }

    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed" + textStatus);
    })
    }
});
