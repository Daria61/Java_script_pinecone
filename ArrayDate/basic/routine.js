var ajil = [ 10 ], ideh = [ 1 ], yriltsah = [ 2 ], togloh = [ 3 ], untah = [ 8 ];
var activities = [ajil, ideh, yriltsah, togloh, untah];
var activities = [[10], [1], [2], [3], [8]];
var huvi = [], huviDetial = 1 ;
for (i = 0; i < activities.length; i++){
    huviDetial = Math.floor((100* activities[i])/24)
    huvi.push(huviDetial + "%")
}
console.table(activities);
console.log(huvi);
