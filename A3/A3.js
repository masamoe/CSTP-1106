let pageID = 1
let pageSize = 3

function gotoPage(page) {
    pageID = parseInt(page.getAttribute("id"));
    runAjax();
}

function process(data) {
    let movies = data.results
    const list = [];
    const pages = [`<button id="1" onclick="gotoPage(this)">First</button>`,];
    for (let i = 1; i <= Math.round(movies.length/pageSize); i++) {
        pages.push(
            `<button id="${i}" onclick="gotoPage(this)">${i}</button>`,
        )
    };
    pages.push(`<button id="7" onclick="gotoPage(this)">Last</button>`);
    for (let i = pageSize*(pageID-1); i < (pageSize*(pageID-1)+pageSize) && i < 20; i++) {
        list.push(
            `<p>${movies[i].original_title}</p>`,
            `<p>${movies[i].overview}</p>`,
            `<img src="https://image.tmdb.org/t/p/original${movies[i].poster_path}" alt="">`,
            `<button id="${movies[i].backdrop_path}" onclick="getBackdrop(this)">${movies[i].original_title} Backdrop</button>`,
        );
    };
    $("#pages").html(pages);
    $("#result").html(list);
};

function getBackdrop(input) {
    let id = input.getAttribute("id")
    $("#articleRight").html(`<img src="https://image.tmdb.org/t/p/original${id}" alt="">`);
};



function runAjax() {
    $("#articleRight").empty()
    $("#result").empty()
    pageSize = parseInt($("#pageSize option:selected").val())
    let movie = $("#movie").val();
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=42e3d35339df1546acf0bbc6eb2c945e&query=${movie}`,
        type: "get",
        success: process,
    });
};

function setup() {
    $("#search").click(runAjax);
};

$(document).ready(setup);