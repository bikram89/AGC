

function Start () 
{
Debug.Log("Lets Check scores people");

if(Stats.level==1){if(Movement.score >= PlayerPrefs.GetFloat("level1score")){
PlayerPrefs.SetFloat("level1score", Movement.score);
//Stats.level1score = Movement.score;
}}

if(Stats.level==2){if(Movement.score >= PlayerPrefs.GetFloat("level2score")){
PlayerPrefs.SetFloat("level2score", Movement.score);}}

if(Stats.level==3){if(Movement.score >= PlayerPrefs.GetFloat("level3score")){
PlayerPrefs.SetFloat("level3score", Movement.score);}}

if(Stats.level==4){if(Movement.score >= PlayerPrefs.GetFloat("level4score")){
PlayerPrefs.SetFloat("level4score", Movement.score);}}

if(Stats.level==5){if(Movement.score >= PlayerPrefs.GetFloat("level5score")){
PlayerPrefs.SetFloat("level5score", Movement.score);}}

if(Stats.level==6){if(Movement.score >= PlayerPrefs.GetFloat("level6score")){
PlayerPrefs.SetFloat("level6score", Movement.score);}}

if(Stats.level==7){if(Movement.score >= PlayerPrefs.GetFloat("level7score")){
PlayerPrefs.SetFloat("level7score", Movement.score);}}

if(Stats.level==8){if(Movement.score >= PlayerPrefs.GetFloat("level8score")){
PlayerPrefs.SetFloat("level8score", Movement.score);}}

if(Stats.level==9){if(Movement.score >= PlayerPrefs.GetFloat("level9score")){
PlayerPrefs.SetFloat("level9score", Movement.score);}}

if(Stats.level==10){if(Movement.score >= PlayerPrefs.GetFloat("level10score")){
PlayerPrefs.SetFloat("level10score", Movement.score);}}

	}
	
	

function OnGUI()
{
GUI.Box(Rect(150,100,200,400), "Level Complete");

GUI.Label(Rect(175,150,80,30), "Score  " +Movement.score);

if(Stats.level==1){GUI.Label(Rect(175,180,150,30), "Highscore  " +PlayerPrefs.GetFloat("level1score"));}
if(Stats.level==2){GUI.Label(Rect(175,180,150,30), "Highscore  " +PlayerPrefs.GetFloat("level2score"));}
if(Stats.level==3){GUI.Label(Rect(175,180,150,30), "Highscore  " +PlayerPrefs.GetFloat("level3score"));}
if(Stats.level==4){GUI.Label(Rect(175,180,150,30), "Highscore  " +PlayerPrefs.GetFloat("level4score"));}
if(Stats.level==5){GUI.Label(Rect(175,180,150,30), "Highscore  " +PlayerPrefs.GetFloat("level5score"));}
if(Stats.level==6){GUI.Label(Rect(175,180,150,30), "Highscore  " +PlayerPrefs.GetFloat("level6score"));}
if(Stats.level==7){GUI.Label(Rect(175,180,150,30), "Highscore  " +PlayerPrefs.GetFloat("level7score"));}
if(Stats.level==8){GUI.Label(Rect(175,180,150,30), "Highscore  " +PlayerPrefs.GetFloat("level8score"));}
if(Stats.level==9){GUI.Label(Rect(175,180,150,30), "Highscore  " +PlayerPrefs.GetFloat("level9score"));}
if(Stats.level==10){GUI.Label(Rect(175,180,150,30), "Highscore " +PlayerPrefs.GetFloat("level10score"));}



if(GUI.Button(Rect(175,220,125,30), "Next Level")){
Movement.score =0 ;
if(Stats.level==1){Application.LoadLevel("Level2");}
if(Stats.level==2){Application.LoadLevel("Level3");}
if(Stats.level==3){Application.LoadLevel("Level4");}
if(Stats.level==4){Application.LoadLevel("Level5");}
if(Stats.level==5){Application.LoadLevel("Level6");}
if(Stats.level==6){Application.LoadLevel("Level7");}
if(Stats.level==7){Application.LoadLevel("Level8");}
if(Stats.level==8){Application.LoadLevel("Level9");}
if(Stats.level==9){Application.LoadLevel("Level10");}
if(Stats.level==10){Application.LoadLevel("Campaign");}
}

if(GUI.Button(Rect(175,270,125,30), "Retry")){
Movement.score=0;
if(Stats.level==1){Application.LoadLevel("Level1");}
if(Stats.level==2){Application.LoadLevel("Level2");}
if(Stats.level==3){Application.LoadLevel("Level3");}
if(Stats.level==4){Application.LoadLevel("Level4");}
if(Stats.level==5){Application.LoadLevel("Level5");}
if(Stats.level==6){Application.LoadLevel("Level6");}
if(Stats.level==7){Application.LoadLevel("Level7");}
if(Stats.level==8){Application.LoadLevel("Level8");}
if(Stats.level==9){Application.LoadLevel("Level9");}
if(Stats.level==10){Application.LoadLevel("Level10");}
}

if(GUI.Button(Rect(175,320,125,30), "Back")){
Application.LoadLevel("Campaign");
Movement.score=0;
}

if(GUI.Button(Rect(175,370,125,30), "Home")){
Application.LoadLevel("Homescreen");
Movement.score=0;
}

}

