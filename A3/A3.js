let pageID = 1;
let pageSize = 3;
let lastButton = 0;

function process(data) {
    let movies = data.results;
    const list = [];
    const pages = [`<button id="1" onclick="gotoPage(this)">First</button>`, `<button id="previous" onclick="nextPrevious(this, lastButton)">Previous</button>`];
    for (let i = 1; i <= Math.round(movies.length / pageSize); i++) {
        pages.push(
            `<button id="${i}" onclick="gotoPage(this)">${i}</button>`,
        );
        lastButton++;
    };
    pages.push(`<button id="next" onclick="nextPrevious(this, lastButton)">Next</button>`, `<button id="${lastButton}" onclick="gotoPage(this)">Last</button>`);
    for (let i = pageSize * (pageID - 1); i < (pageSize * (pageID - 1) + pageSize) && i < 20; i++) {
        list.push(
            `<p>${movies[i].original_title}</p>`,
            `<p>${movies[i].overview}</p>`,
            `<img src="https://image.tmdb.org/t/p/original${movies[i].poster_path}" alt="">`,
            `<button id="${movies[i].backdrop_path}" onclick="getBackdrop(this)">${movies[i].original_title} Backdrop</button>`,
        );
    };
    $("#pages").html(pages);
    $("#result").html(list);
    $("#footer").html(`<a href="#articleLeft">Return to Top</a>`);
};

function getBackdrop(input) {
    let id = input.getAttribute("id");
    $("#articleRight").html(`<img src="https://image.tmdb.org/t/p/original${id}" alt="">`);
};

function gotoPage(page) {
    pageID = parseInt(page.getAttribute("id"));
    runAjax();
};

function nextPrevious(button, last) {
    if (button.getAttribute("id") == "previous") {
        if (pageID <= 1) {
            return;
        }
        else {
            pageID--;
            runAjax();
        };
    }
    else {
        if (pageID === last) {
            return;
        }
        else {
            pageID++;
            runAjax();
        };
    };
};

function runAjax() {
    $("#articleRight").empty();
    $("#result").empty();
    $("#footer").empty();
    lastButton = 0;
    pageSize = parseInt($("#pageSize option:selected").val());
    let movie = $("#movie").val();
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=42e3d35339df1546acf0bbc6eb2c945e&query=${movie}`,
        type: "get",
        success: process,
    });
};

function reset() {
    $("#articleRight").empty();
    $("#result").empty();
    $("#pages").empty();
    pageID = 1;
    lastButton = 0;
    runAjax();
};

function setup() {
    $("#search").click(reset);
};

$(document).ready(setup);