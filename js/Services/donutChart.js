app.service('donutChart',function (userData){

var getRandomColor = function (){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 3; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var salesData = userData.user.items;

this.getRandCol = function () {return getRandomColor();};
this.toChange = function (){

var svg = d3.select("div.donutbody").append("svg").attr("width",300).attr("height",300);
svg.append("g").attr("id","salesDonut");
Donut3D.draw("salesDonut", insertData(), 150, 150, 130, 100, 30, 0.4);

function insertData(){
  return salesData.map(function(d){
    return {label:d.name, value:((d.power / 60) * d.col * d.time), color:d.color};});
        }
    };
});
