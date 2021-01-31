$(document).ready(function () {
    // API Key = 4f8c4b912d786777410db2f4865baef8
    $("#weather-btn").on("click", function () {

        var city = $("#citySearch").val();
        var urlQuery = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=4f8c4b912d786777410db2f4865baef8"
        console.log(urlQuery)
        $.ajax({
            url: urlQuery,
            method: "GET"
        }).then(function (result) {

            console.log(result)
            var cityName = result.city.name;
            var cityInfo = result.list[0].main.temp
            $("#city-name").html(cityName)
            console.log(cityName)
            $("#city-weather").html("Kelvin: "+result.list[0].main.temp+"<br>"+"Humidity: "+ result.list[0].main.humidity+"%"+"<br>"+"Wind Speed: "+result.list[0].wind.speed+" MPH")
            console.log(cityInfo)
            
        })
    })
    
});