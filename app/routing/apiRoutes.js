var friendsData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res){
        //friendsData.push(req.body);
        var userScore = req.body.scores;
        var totalDiff = []; 

        for(var i = 0; i < friendsData.length; i++){
            var currentCheck = friendsData[i].scores;
            var friendDiff = 0;            
            for(var j = 0; j < currentCheck.length; j++){
                var diff = Math.abs(currentCheck[j] - parseInt(userScore[j]));
                friendDiff = friendDiff + diff;
            }
            totalDiff.push(friendDiff);
            friendDiff = 0;
        }
        console.log(totalDiff)
        var k = totalDiff.indexOf(Math.min(...totalDiff));
        console.log(friendsData[k]);
        res.json(friendsData[k]);
    });
}