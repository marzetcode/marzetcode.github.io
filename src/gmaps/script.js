//google maps api
let map;
let rectangle;

const borders = {
	north: 60,
	south: 40,
	west: 0,
	east: 20,
};

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 51, lng: 10 },
		restriction: {
			latLngBounds: borders,
			strictBounds: false,
		},
		zoom: 6,
		minZoom: 6,
		disableDefaultUI: true,
	});

	//rectangle = new google.maps.Rectangle({
	//	strokeWeight: 0,
	//	fillColor: "#000000",
	//	fillOpacity: 0.5,
	//	map,
	//	bounds: borders,
	//});

	//markers
	let markers = [];

	const markerImg = {
		url: 'img/marker.svg',
		size: new google.maps.Size(25, 35),
		anchor: new google.maps.Point(25, 35),
		scaledSize: new google.maps.Size(25, 35)
	};
	for (let i = 0; i < coords_array.length; i++) {
		//console.log(coords_array[i]);
		const marker = new google.maps.Marker({
			position: { lat: coords_array[i][0], lng: coords_array[i][1] },
			icon: markerImg,
			map: map,
		});
		markers.push(marker);
	};
	//markers

	//cluster
	const clusterStyle = [
		{
			url: 'img/cluster.svg',
			textColor: '#FFFFFF',
			textSize: 10,
			height: 20,
			width: 20,
		},
		{
			url: 'img/cluster.svg',
			textColor: '#FFFFFF',
			textSize: 10,
			height: 30,
			width: 30,
		},
		{
			url: 'img/cluster.svg',
			textColor: '#FFFFFF',
			textSize: 10,
			height: 40,
			width: 40,
		},
		{
			url: 'img/cluster.svg',
			textColor: '#FFFFFF',
			textSize: 10,
			height: 50,
			width: 50,
		},
		{
			url: 'img/cluster.svg',
			textColor: '#FFFFFF',
			textSize: 20,
			height: 60,
			width: 60,
		},
	];
	const clusteOptions = {
		gridSize: 50,
		styles: clusterStyle,
		maxZoom: 15
	};
	new MarkerClusterer(map, markers, clusteOptions);
	//cluster
};

//console.log(coords_array[0][0]);
//console.log(coords_array[0][1]);

//google maps api