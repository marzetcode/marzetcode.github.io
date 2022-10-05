
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webgl-setclasses !*/
!function (e, n, t) {
	function o(e, n) {
		return typeof e === n
	}
	function s() {
		var e, n, t, s, a, i, f;
		for (var c in l)
			if (l.hasOwnProperty(c)) {
				if (e = [], n = l[c], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
					for (t = 0; t < n.options.aliases.length; t++)
						e.push(n.options.aliases[t].toLowerCase());
				for (s = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++)
					i = e[a], f = i.split("."), 1 === f.length ? Modernizr[f[0]] = s : (!Modernizr[f[0]] || Modernizr[f[0]] instanceof Boolean || (Modernizr[f[0]] = new Boolean(Modernizr[f[0]])), Modernizr[f[0]][f[1]] = s), r.push((s ? "" : "no-") + f.join("-"))
			}
	}
	function a(e) {
		var n = c.className, t = Modernizr._config.classPrefix || "";
		if (u && (n = n.baseVal), Modernizr._config.enableJSClass) {
			var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
			n = n.replace(o, "$1" + t + "js$2")
		}
		Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), u ? c.className.baseVal = n : c.className = n)
	}
	function i() {
		return "function" != typeof n.createElement ? n.createElement(arguments[0]) : u ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
	}
	var r = [], l = [], f = {
		_version: "3.3.1", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, n) {
			var t = this;
			setTimeout(function () {
				n(t[e])
			}, 0)
		}, addTest: function (e, n, t) {
			l.push({ name: e, fn: n, options: t })
		}, addAsyncTest: function (e) {
			l.push({ name: null, fn: e })
		}
	}, Modernizr = function () {
	};
	Modernizr.prototype = f, Modernizr = new Modernizr;
	var c = n.documentElement, u = "svg" === c.nodeName.toLowerCase();
	Modernizr.addTest("webgl", function () {
		var n = i("canvas"), t = "probablySupportsContext" in n ? "probablySupportsContext" : "supportsContext";
		return t in n ? n[t]("webgl") || n[t]("experimental-webgl") : "WebGLRenderingContext" in e
	}), s(), a(r), delete f.addTest, delete f.addAsyncTest;
	for (var p = 0; p < Modernizr._q.length; p++)
		Modernizr._q[p]();
	e.Modernizr = Modernizr
}(window, document);

if (Modernizr.webgl) {

	// WebGL supported...

	var manualControl = false;
	var longitude = 0, latitude = 0;
	var savedX, savedY, savedLongitude, savedLatitude;

	// Pano imagery...
	//var panoImage = "img/gtx1080ti/CES-2017-Ansel360-01.jpg";
	//var panoImage = "/content/dam/en-zz/Solutions/geforce/Pascal/Promotions/CES-2017-Ansel-360-01.jpg";
	//var panoImage = "https://images.nvidia.com/aem-dam/Solutions/geforce/Pascal/Promotions/CES-2017-Ansel-360-01.jpg";
	//var panoImage = new Image();
	//panoImage.crossOrigin = "anonymous";
	//panoImage.src = "https://images.nvidia.com/aem-dam/Solutions/geforce/Pascal/Promotions/CES-2017-Ansel-360-01.jpg";

	// Setting up the renderer...
	//var canvas = document.getElementById("ansel360");
	renderer = new THREE.WebGLRenderer(); /*{ canvas: canvas }*/
	renderer.setSize(window.innerWidth, window.innerHeight);

	//document.body.appendChild(renderer.domElement);
	var section4abg = document.getElementById('section4abg');
	section4abg.appendChild(renderer.domElement);
	renderer.domElement.id = 'ansel360';


	// Creating a new scene...
	var scene = new THREE.Scene();

	// Adding a camera...
	var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 1000);
	camera.target = new THREE.Vector3(0, 0, 0);

	// Creation of a big sphere geometry...
	var sphere = new THREE.SphereGeometry(100, 100, 40);
	sphere.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));

	// Creation of the sphere material...
	var sphereMaterial = new THREE.MeshBasicMaterial();
	var textureLoader = new THREE.TextureLoader();
	textureLoader.setCrossOrigin("anonymous");

	//sphereMaterial.map = THREE.ImageUtils.loadTexture(panoImage); //panoramasArray[panoramaNumber] // ImageUtils.loadTexture is deprecated...
	//sphereMaterial.map = new THREE.TextureLoader().load(panoImage);
	sphereMaterial.map = textureLoader.load("https://images.nvidia.com/aem-dam/Solutions/geforce/Pascal/Promotions/CES-2017-Ansel-360-01.jpg");


	// Geometry + material = mesh (actual object)...
	var sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
	scene.add(sphereMesh);

	// Listeners...
	document.addEventListener("mousedown", onDocumentMouseDown, false);
	document.addEventListener("mousemove", onDocumentMouseMove, false);
	document.addEventListener("mouseup", onDocumentMouseUp, false);
	window.addEventListener("resize", onWindowResize, false);

	render();
	onWindowResize();

} else {
	// WebGL not supported...
	document.getElementById("section4abg").className = "section5fallback";
}


function render() {
	requestAnimationFrame(render);
	if (!manualControl) {
		longitude += 0.1;
	}
	// Limiting latitude from -85 to 85 (cannot point to the sky or under your feet)...
	latitude = Math.max(-85, Math.min(85, latitude));
	// Moving the camera according to current latitude (vertical movement) and longitude (horizontal movement)...
	camera.target.x = 500 * Math.sin(THREE.Math.degToRad(90 - latitude)) * Math.cos(THREE.Math.degToRad(longitude));
	camera.target.y = 500 * Math.cos(THREE.Math.degToRad(90 - latitude));
	camera.target.z = 500 * Math.sin(THREE.Math.degToRad(90 - latitude)) * Math.sin(THREE.Math.degToRad(longitude));
	camera.lookAt(camera.target);
	// Calling render function again...
	renderer.render(scene, camera);
}


// When the mouse is pressed, we switch to manual control and save current coordinates...
function onDocumentMouseDown(e) {
	//   e.preventDefault();
	manualControl = true;
	savedX = e.clientX;
	savedY = e.clientY;
	savedLongitude = longitude;
	savedLatitude = latitude;
}

// When mouse moves, adjust coordinates if manual is control enabled...
function onDocumentMouseMove(e) {
	if (manualControl) {
		longitude = (savedX - e.clientX) * 0.1 + savedLongitude;
		latitude = (e.clientY - savedY) * 0.1 + savedLatitude;
	}
}

// Update camera and renderer on window resize...
function onWindowResize(e) {
	camera.aspect = window.innerWidth / 900; //window.innerHeight
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, 900); // window.innerHeight
}

// When mouse released, turn manual control off...
function onDocumentMouseUp(e) {
	manualControl = false;
	//window.getSelection().removeAllRanges();
}

/*
 // Change panorama imagery on key press...
 document.onkeyup = function(event) {
 panoramaNumber = (panoramaNumber + 1) % panoramasArray.length;
 sphereMaterial.map = THREE.ImageUtils.loadTexture(panoramasArray[panoramaNumber]);
 }
 */
