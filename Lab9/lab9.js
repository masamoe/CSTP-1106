function process(data) {
    $("#z").html(`Temp: ${JSON.stringify(data.main.temp)}°C     Weather: ${JSON.stringify(data.weather[0].description)}`);
};

function runAjax() {
    city = $("#x").val();
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e0aa7ab1b35ed151cdd308ac68f721a&units=metric`,
        type: "get",
        success: process,
    });
};

function setup() {
    $("#y").click(runAjax);
};

$(document).ready(setup);