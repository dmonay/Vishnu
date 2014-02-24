
var a = 0;
var b = 0;
var review1 = "";
var review2 = "";
var api = [];

$(document).ready(function () {     
    
    var start = function () {
        $("#start").addClass("hidden"); 
        $("#movies").removeClass('hidden').addClass("visible"); 
        var x = Math.floor(Math.random()*21);
        var y = Math.floor(Math.random() * (19)) + 20;      
        $.ajax({
            type: "GET",
            dataType: 'JSONP',
            crossDomain: 'true',
            url: "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=50&country=us&apikey=c8vcknsryddyty8xreagauub",
            success: function (resp) {
                var movieA = resp.movies[x].title;
                var movieB = resp.movies[y].title;
                var ratingA = resp.movies[x].ratings.critics_score;
                var ratingB = resp.movies[y].ratings.critics_score;
                $('#movie1').html(movieA);
                $('#movie2').html(movieB);
                a = ratingA;
                b = ratingB;
                review1 = resp.movies[x].critics_consensus;
                review2 = resp.movies[y].critics_consensus;
                api = resp;
            },
            error: function (error) {
                alert(error);
            }
        });      
    };

    var deliverReview = function() {
        $("#reviews").removeClass('hidden').addClass("visible");
        $('#movie1_review').html(review1);
        $('#movie2_review').html(review2);
        $("#next").removeClass('hidden').addClass("visible");
    };

    var initiate1 = function() {
        if (a > b) {alert('victory');} else{alert('defeat');};
        deliverReview();

    };

    var initiate2 = function() {
        if (b > a) {alert('victory');} else{alert('defeat');};
        deliverReview();
    };
 
    var next = function() {
        $('#movie1_review').empty();
        $('#movie2_review').empty();
        $('#reviews').removeClass('visible').addClass('hidden');
        $("#next").removeClass('visible').addClass("hidden");
        var x = Math.floor(Math.random()*21);
        var y = Math.floor(Math.random() * (19)) + 20;
        var movieA = api.movies[x].title;
        var movieB = api.movies[y].title;
        var ratingA = api.movies[x].ratings.critics_score;
        var ratingB = api.movies[y].ratings.critics_score;
        $('#movie1').html(movieA);
        $('#movie2').html(movieB);
        a = ratingA;
        b = ratingB;
        review1 = api.movies[x].critics_consensus;
        review2 = api.movies[x].critics_consensus;         
    };

    $('#start').click(start);
    $('#next').click(next);
    $('#movie1').click(initiate1);
    $('#movie2').click(initiate2);
});


