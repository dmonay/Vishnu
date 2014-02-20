/*jslint browser: true*/
/*global $, jQuery*/



$(document).ready(function () {     

    
    var getIt = function () {
   
        
/* NBA
        $.getJSON("http://api.espn.com/v1/sports/basketball/nba/teams/?apikey=wcgk3dhm3taa7euvtmgusazs", function (json) {
            console.log(json);
            
            alert(json.sports[0].leagues[0].teams[0].links.api.news.href);
            
            var abc = json.sports[0].leagues[0].teams[0].links.web.teams.href;
            $('#link1').attr('href', abc);
            $('#link2').html(); 
            $('#lnk3').html(); 
            });
*/
 
        
/*  NCAA
  
  $.getJSON("http://api.espn.com/v1/sports/basketball/mens-college-basketball/athletes/?apikey=wcgk3dhm3taa7euvtmgusazs", function (json) {
            console.log(json);
             
            
            
            for (var i = 0; i < json.sports[0].leagues[0].athletes.length; i++) {
            var weight = json.sports[0].leagues[0].athletes[i].weight;
            $('#test1').html(weight);
      }      
        }
                 ); 
                 */
/* Bitcoin        
        $.getJSON("https://api.bitcoinaverage.com/ticker/global/USD/", function (json) {
            console.log(json);
            alert(json.ask);
        }); 
*/
    
        $.getJSON("http://api.bls.gov/publicAPI/v1/timeseries/data/EES10140001?callback=?", function (json) {
            console.log(json);
            
            }); 
        
        };
    
    $('input').click(getIt);
});


