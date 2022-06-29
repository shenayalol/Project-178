let latitude=22.7868542, longitude=88.3643296;



//initalizing the Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
var map = new mapboxgl.Map(
    {
        
    container : 'map',
    style : 'mapbox://styles/mapbox/streets-v11',
    center : [longitude, latitude],
    zoom : 16
    
    }
);


map.addControl(
    new mapboxgl.GeolocateControl(
        {
            postionOptions : {
                enableHighAccuracy: true
            },
            trackUserLocation : true
        }
    )
);



map.addControl(
    new MapboxDirections(
        {
            accessToken : mapboxgl.accessToken
        }
    ),
'top-left'
);


var img1 = document.querySelector("#muesum")

// Boston Muesum of Science
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([42.3675, 71.0711])
	.addTo(map);

var img2 = document.querySelector("#tdgarden")
// TD Garden
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([42.3662, 71.0621])
	.addTo(map);

var img3 = document.querySelector("#sixflags")
// Six Flags
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([42.0380, 72.6135])
	.addTo(map);


var img4 = document.querySelector("#canobie")

// Canobie Lake Park
var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([42.7935, 71.2480])
	.addTo(map);


//Great Wolf Lodge
var img5 = document.querySelector("#lodge")

var marker5 = new mapboxgl.Marker({
	element: img5
})
	.setLngLat([41.0598, 75.3221])
	.addTo(map);
