#pragma strict

private var gameController: GameController;
public var ScoreValue: int = 100;
//if shell hits target
function Start(){
	var gameControllerObject: GameObject = GameObject.FindWithTag("GameController");
	if(gameControllerObject != null){
		gameController = gameControllerObject.GetComponent(GameController);
	}else{
		Debug.Log("Connot Find 'GameController' Object");
	}
}

function OnTriggerEnter(other: Collider){
	if(other.tag == "Ground"){
		return;
	}
	if(other.tag == "Shell")
	{
	gameController.UpdateScore(ScoreValue * 2);
	}
	{
	if(other.tag == "Player"){
		return;
		}
	Destroy(gameObject);
	Destroy(other.gameObject);
	
	}
}
