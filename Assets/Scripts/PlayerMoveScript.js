#pragma strict
public var speed:float;
private var rb:Rigidbody;
var ShotSpawn:Transform;
public var firerate:float=0.5;
var shot:GameObject;
private var nextfire:float=0.5;
private var myTime:float=0.0;
public var TPEnter = Vector3(-20.61,0.36,18.0);
public var TPExit = Vector3(21.45,0.36,-18.0);


function Start(){
	rb=GetComponent.<Rigidbody>();
}
function Update(){
	if(Input.GetButtonDown("Fire1")&& Time.time>nextfire){
	nextfire= Time.time + firerate;
	Instantiate(shot,ShotSpawn.position,ShotSpawn.rotation);
	nextfire=nextfire-myTime;
	}
}
function FixedUpdate () {
	var moveHorizontal: float=Input.GetAxis("Horizontal");
	var moveVertical:float=Input.GetAxis("Vertical");
	var yy = rb.velocity.y;
	//Debug.Log(yy);
	//var movement : Vector3= Vector3 (0, rb.velocity.y, );
    

    rb.velocity = transform.forward*moveVertical* speed;
    rb.velocity.y = yy;
    transform.Rotate(0,180*Time.deltaTime*moveHorizontal,0);

   // rb.position = Vector3(moveHorizontal, 0.0, moveVertical);
	
}
function OnTriggerEnter (other : Collider){
	if(other.CompareTag("TPEnter")){
		transform.position=TPEnter;
	}

	{
	if(other.CompareTag("TPExit")){
		transform.position=TPExit;
		}
	}
}
