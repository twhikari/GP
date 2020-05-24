/////////////////////////////////////////////////////////
// global variables
var camera, renderer;
var agent1,angent2;
var random_x;
var random_z;

// program starts here ...
init();
animate();

function init() {

  initThree();
  
  //scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.z = 500;
  camera.position.y = 600;


  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);

  let controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);

  /////////////////////////////////////////////////////////////////////

  
 /* // scene grid [-400,400]x[-400,400]
  var gridXZ = new THREE.GridHelper(800, 80, 'red', 'white');
  scene.add(gridXZ);
  
  // in scene.js*/
  
	var floorMaterial = new THREE.MeshBasicMaterial( { color: 0x7b03fc,side: THREE.DoubleSide } );
	
	var floorGeometry = new THREE.PlaneGeometry(700, 700);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.y = -0.5;
	floor.rotation.x = Math.PI/2;
	scene.add(floor);
  
  sceneFromJSON ( );  // using LevelDesigner
  
  //////////////////////////////////////////////////////////////////////////	
  	let size = 10; // halfsize of agent
//    agent = new Agent(new THREE.Vector3(-400 + 400 * Math.random(), 0, -400 + 400 * Math.random()), mesh);
    agent1 = new Agent(new THREE.Vector3(Math.random()*250+100, 0, -(Math.random()*250+100)), size,'black','black');
	agent2 = new Agent(new THREE.Vector3(-(Math.random()*250+100), 0, Math.random()*250+100), size,'red','red');
	
	 
}

function animate() {

  agent1.update(0.01)
  agent2.update(0.01)
  // check agent crossing obstacles ...
  scene.obstacles.forEach ( function (obs) { obs.checkCollision (agent1)} );
  scene.obstacles.forEach ( function (obs) { obs.checkCollision (agent2)} );
  if (scene.targets.length > 0)
  	requestAnimationFrame(animate);
  else{
  	let inobs = true;
	while(inobs){
	var random_x = (Math.random()*-350)+(Math.random()*350);
	var random_z = (Math.random()*-350)+(Math.random()*350);
	for(i = 0; i < scene.obstacles.length; i++){
		if(!((scene.obstacles[i].x - 15 < random_x && scene.obstacles[i].x + 15 > random_x)&&
		   (scene.obstacles[i].z - 15 < random_z && scene.obstacles[i].z + 15 > random_z)))
		 inobs = true ;
	}
	if( i == scene.obstacles.length)inobs = false ;
	}
	scene.targets.push (new Target (1, new THREE.Vector3 (random_x, 0, random_z)));
	requestAnimationFrame(animate);
	
  }
  render();
}

function render() {
  renderer.render(scene, camera);
}

