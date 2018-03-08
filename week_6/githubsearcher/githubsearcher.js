
var user = document.querySelector("#search").value;

function getUser() {
    var request = $.ajax({
        url: "https://api.github.com/search/users?q="+user,
        method: "GET",
        //data: { id : },
        dataType: "html",
        success: function (response) {
            user = response.value;
            $("#test").text(user);
        }
    });

}
$("#search").on("keydown", function (event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        getUser();
    }
});
