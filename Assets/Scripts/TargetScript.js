#pragma strict
//AKA DestroyByContact
private var gameController: GameController;
//private var gameController2: GameController2;
public var ScoreValue: int = 100;
//if shell hits target
function Start(){
	var gameControllerObject: GameObject = GameObject.FindWithTag("GameController");
	if(gameControllerObject != null){
		gameController = gameControllerObject.GetComponent(GameController);
		//print("we got it");
	}else{
		Debug.Log("Connot Find 'GameController' Object");
	}
}

function OnTriggerEnter(other: Collider){
	if(other.tag == "Ground"){
		return;
	}
	if(other.tag == "Shell"){
		gameController.UpdateScore(ScoreValue);
	}
	{
	if(other.tag == "Player"){
		return;
	}
	Destroy(gameObject);
	Destroy(other.gameObject);
	}
}

