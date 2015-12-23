var container; // the canvas
var renderer; // renderer
var camera; // the view
var scene; // everything to render

setup();
draw();
function setup() 
{
  container = document.createElement('div');
  document.body.appendChild( container );
  // camera:
  var fieldofview= 45;
  var aspectratio= window.innerWidth / window.innerHeight;
  var near_clip = 1;
  var far_clip = 2000;
  //camera setup for below:
  camera = new THREE.PerspectiveCamera( fieldofview, aspectratio, near_clip, far_clip );
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 800;
  camera.lookAt( 0, 0, 0 );
  
  //set up the scene:
  scene = new THREE.Scene();
  
  var light, object;
  
  //
  light = new THREE.AmbientLight( 0x09046a );
  scene.add( light );
  
  //direction of light:
  light = new Three.DirectionalLight ( 0xff0000 );
  light.position.set( 0, 1, 0);
  scene.add( light );
  
  // texture consists of an image, an image mapping scheme, and a resolution:
  // load a picture:
  thetexture = THREE.ImageUtils.loadTexture( './data/GreenVoid.jpg');
  //repeats texture
  thetexture.wrapS = thetexture.wrapT = THREE.RepeatWrapping;
  // resolution of the texture:
  thetexture.ansiotropy = 16;
  
  // binds the texture to a material:
  var material = new THREE.MeshLambertMaterial ( { map: thetexture, side: THREE.DoubleSide} );
  
  // ADD ALL THE 3D DATA AS OBJECTS TO THE SCENE:

	object = new THREE.Mesh( new THREE.SphereGeometry( 75, 20, 10 ), material );
	object.position.set( -400, 0, 200 );
	scene.add( object );
  // THIS IS THE MAIN EVENT OF THE RENDERER:
  
  // initialize the render:
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

  // add the renderer as a webGL canvas to the webpage:
	container.appendChild( renderer.domElement );

	//

	window.addEventListener( 'resize', onWindowResize, false );
}

function draw() 
{
  requestAnimationFrame( animate );
  
  //run the renderer:
  render();
  
}
function render() {

	var timer = Date.now() * 0.0001;

	camera.position.x = Math.cos( timer ) * 800;
	camera.position.y = 300;
	camera.position.z = Math.sin( timer ) * 800;

	camera.lookAt( scene.position );

	for ( var i = 0, l = scene.Orb.length; i < l; i ++ ) {

		var object = scene.Orb[ i ];

		object.rotation.x = timer * 5;
		object.rotation.y = timer * 2.5;

	}

  // THIS DOES THE DRAWING:
	renderer.render( scene, camera );

}

// this resets the camera and renderer 
// when you resize the window:
function onWindowResize() 
{

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}