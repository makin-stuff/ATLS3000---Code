//Priyanka Makin, 07/28/2017
//ATLS3000 - Code, P3
//For description, please see: www.priyankamakin.com/code/


var mapimg;

//center
var clat = 0;
var clon = 0;

//31.2304 N, 121.4737 E
//49.2827 N, 123.1207 W
//var lat = 49.2827;
//var lon = -123.1207;

var zoom = 1;

var latData = [];
var lonData = [];
var popData = [];

var d = [];
var f = [];

//var api = 'http://samples.openweathermap.org/pollution/v1/co/';
//var apiKey = '/current.json?appid=c0a088736adb7fe2ef13a846b65f171f';

function preload(){
	mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoicG1ha2luIiwiYSI6ImNqNWx5cnhwejJmd3YycWxtZ2JidzVrbHQifQ.MG8_6JQZSfagK_uxd3NIqw');
	data = loadTable("simplemaps-worldcities-basic.csv", "csv", "header");
}

function mercX(lon){
	lon = radians(lon);
	var a = (256/PI) * pow(2, zoom);
	var b = lon + PI;
	return a * b;
}

function mercY(lat){
	lat = radians(lat);
	var a = (256/PI) * pow(2, zoom);
	var b = tan(PI/4 + lat/2);
	var c = PI - log(b);
	return a * c;
}

var url = 'http://api.openweathermap.org/pollution/v1/co/0.0,10.0/current.json?callback=jsonCallback&appid=c0a088736adb7fe2ef13a846b65f171f';

function setup() {
	//createCanvas(800, 400);
	createCanvas(windowWidth, windowHeight);
	background(0);
	//createCanvas(windowWidth, windowHeight);
	translate(width/2, height/2);
	imageMode(CENTER);
	//image(mapimg, 0, 0);

	loadJSON(url, gotData, 'jsonp');

	//get lat and lon from data and store in arrays
	for(var i = 0; i < data.getRowCount(); i++){
		latData[i] = parseInt(data.getString(i, 2));
		lonData[i] = parseInt(data.getString(i, 3));
		popData[i] = parseInt(data.getString(i, 4));
		//console.log(latData[i]);
	}

	var cx = mercX(clon);
	var cy = mercY(clat);

	//draw an ellipse at each city
	for(var j = 0; j < latData.length; j++){
		var x = mercX(lonData[j]) - cx;
		var y = mercY(latData[j]) - cy;

		d[j] = map(popData[j], 0, 3000000, 1, 4);
		//f[j] = map(popData[j], 0, 2000000, 0, 255);

		noStroke();

		if(popData[j] > 1000000){
			fill(255, 0, 255);
		} else if(popData[j] < 1000000 && popData[j] > 100000){
			fill(0, 153, 255);
		} else {
			fill(255);
		}
		
		//fill(f[j]);
		ellipse(x, y, d[j], d[j]);
	}

	// var x = mercX(lon) - cx;
	// var y = mercY(lat) - cy;

	// fill(255, 0, 255);
	// ellipse(x, y, 8, 8);
}

function gotData(data){
	console.log(data);
}

function windowResized(){
	createCanvas(windowWidth, windowHeight);
}
