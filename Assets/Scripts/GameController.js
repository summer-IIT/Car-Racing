#pragma strict
import UnityEngine.SceneManagement;
//scoring
private var Score: int;
public var ScoreText: GUIText;
public var LevelWinText: GUIText;
private var GameWin: boolean;
private var LevelWin: boolean;

function Start () {
	Score = 0;
	LevelWinText.text ="";
	UpdateScoreText();
	}
function Update(){
	//print(Manager.mget());
	if (Manager.lvl1 == true) {
		if(Score >= 2300 ){
			LevelWinText.text = "Press 'Q' for Level 2";
			if(Input.GetKeyDown(KeyCode.Q)){
				Manager.lvl1 = false;
				SceneManager.LoadScene("TankLevel2");
			}
		}
	}else{
		if(Score >= 2500){
			LevelWinText.text = "You Win! Press 'R' to Play Again";
			if(Input.GetKeyDown(KeyCode.R)){
				Manager.lvl1 = true;
				SceneManager.LoadScene("TankLevel1");
			}
		}
	}
}
function UpdateScore(ScoreIncrement: int){
	Score = Score + ScoreIncrement;
	UpdateScoreText();
}
function UpdateScoreText(){
ScoreText.text = "Score: "+ Score.ToString();
}
