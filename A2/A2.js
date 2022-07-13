const bdArr = [];

function process(data) {
    const list = [];
    for (let item of data.results) {
        list.push(
            `<p>${item.original_title}</p>`,
            `<p>${item.overview}</p>`,
            `<img src="https://image.tmdb.org/t/p/original${item.poster_path}" alt="">`,
            `<button id="${item.backdrop_path}" onclick="getBackdrop(this)">${item.original_title} Backdrop</button>`,
        );
        bdArr.push(item.backdrop_path);
    };
    $("#result").html(list);
};



function getBackdrop(input) {
    let id = input.getAttribute('id')
    $("#articleRight").html(`<img src="https://image.tmdb.org/t/p/original/${id}" alt="">`);
};

function runAjax() {
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