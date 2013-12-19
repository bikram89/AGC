
 var score :  GUIStyle;
 var scoren :  GUIStyle;
 var bg :  GUIStyle;
 var back :  GUIStyle;
 var home :  GUIStyle;
 var retry :  GUIStyle;
 var nxtlvl :  GUIStyle;

function Start () 
{
Debug.Log("Lets Check scores people");

if(Stats.level==1){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level1score")){
PlayerPrefs.SetFloat("level1score", Mathf.Round(Movement.score));}}

if(Stats.level==2){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level2score")){
PlayerPrefs.SetFloat("level2score", Mathf.Round(Movement.score));}}

if(Stats.level==3){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level3score")){
PlayerPrefs.SetFloat("level3score", Mathf.Round(Movement.score));}}

if(Stats.level==4){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level4score")){
PlayerPrefs.SetFloat("level4score", Mathf.Round(Movement.score));}}

if(Stats.level==5){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level5score")){
PlayerPrefs.SetFloat("level5score", Mathf.Round(Movement.score));}}

if(Stats.level==6){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level6score")){
PlayerPrefs.SetFloat("level6score", Mathf.Round(Movement.score));}}

if(Stats.level==7){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level7score")){
PlayerPrefs.SetFloat("level7score", Mathf.Round(Movement.score));}}

if(Stats.level==8){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level8score")){
PlayerPrefs.SetFloat("level8score", Mathf.Round(Movement.score));}}

if(Stats.level==9){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level9score")){
PlayerPrefs.SetFloat("level9score", Mathf.Round(Movement.score));}}

if(Stats.level==10){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level10score")){
PlayerPrefs.SetFloat("level10score", Mathf.Round(Movement.score));}}

////////////////////////////////////////////////////////////////////////////

if(Stats.level==11){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level11score")){
PlayerPrefs.SetFloat("level11score", Mathf.Round(Movement.score));}}

if(Stats.level==12){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level12score")){
PlayerPrefs.SetFloat("level12score", Mathf.Round(Movement.score));}}

if(Stats.level==13){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level13score")){
PlayerPrefs.SetFloat("level13score", Mathf.Round(Movement.score));}}

if(Stats.level==14){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level14score")){
PlayerPrefs.SetFloat("level14score", Mathf.Round(Movement.score));}}

if(Stats.level==15){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level15score")){
PlayerPrefs.SetFloat("level15score", Mathf.Round(Movement.score));}}

if(Stats.level==16){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level16score")){
PlayerPrefs.SetFloat("level16score", Mathf.Round(Movement.score));}}

if(Stats.level==17){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level17score")){
PlayerPrefs.SetFloat("level17score", Mathf.Round(Movement.score));}}

if(Stats.level==18){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level18score")){
PlayerPrefs.SetFloat("level18score", Mathf.Round(Movement.score));}}

if(Stats.level==19){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level19score")){
PlayerPrefs.SetFloat("level19score", Mathf.Round(Movement.score));}}

if(Stats.level==20){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("level20score")){
PlayerPrefs.SetFloat("level20score", Mathf.Round(Movement.score));}}

	}
	
	

function OnGUI()
{
GUI.Box(Rect(0,0,Screen.width,Screen.height), "" , bg);

GUI.Label(Rect((Screen.width/4.2),140,80,30), "Score  " ,score);
GUI.Label(Rect((Screen.width/2),140,80,30), " " +Mathf.Round(Movement.score),scoren);

GUI.Label(Rect(Screen.width/5,180,80,30), "Highscore  " ,score);

if(Stats.level==1){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level1score"),scoren);}
if(Stats.level==2){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level2score"),scoren);}
if(Stats.level==3){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level3score"),scoren);}
if(Stats.level==4){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level4score"),scoren);}
if(Stats.level==5){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level5score"),scoren);}
if(Stats.level==6){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level6score"),scoren);}
if(Stats.level==7){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level7score"),scoren);}
if(Stats.level==8){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level8score"),scoren);}
if(Stats.level==9){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level9score"),scoren);}
if(Stats.level==10){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level10score"),scoren);}
if(Stats.level==11){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level11score"),scoren);}
if(Stats.level==12){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level12score"),scoren);}
if(Stats.level==13){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level13score"),scoren);}
if(Stats.level==14){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level14score"),scoren);}
if(Stats.level==15){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level15score"),scoren);}
if(Stats.level==16){GUI.Label(Rect(Screen.width/2,180,80,30), "  " +PlayerPrefs.GetFloat("level16score"),scoren);}
if(Stats.level==17){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level17score"),scoren);}
if(Stats.level==18){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level18score"),scoren);}
if(Stats.level==19){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level19score"),scoren);}
if(Stats.level==20){GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("level20score"),scoren);}




if(GUI.Button(Rect(Screen.width/3.1,Screen.height/2.35,150,75), "" , nxtlvl)){
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
if(Stats.level==10){Application.LoadLevel("Level11");}
if(Stats.level==11){Application.LoadLevel("Level12");}
if(Stats.level==12){Application.LoadLevel("Level13");}
if(Stats.level==13){Application.LoadLevel("Level14");}
if(Stats.level==14){Application.LoadLevel("Level15");}
if(Stats.level==15){Application.LoadLevel("Level16");}
if(Stats.level==16){Application.LoadLevel("Level17");}
if(Stats.level==17){Application.LoadLevel("Level18");}
if(Stats.level==18){Application.LoadLevel("Level19");}
if(Stats.level==19){Application.LoadLevel("Level20");}
if(Stats.level==20){Application.LoadLevel("Level20");}
}

if(GUI.Button(Rect(Screen.width/2.75,Screen.height/1.7,85,85), "" , retry)){
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
if(Stats.level==11){Application.LoadLevel("Level11");}
if(Stats.level==12){Application.LoadLevel("Level12");}
if(Stats.level==13){Application.LoadLevel("Level13");}
if(Stats.level==14){Application.LoadLevel("Level14");}
if(Stats.level==15){Application.LoadLevel("Level15");}
if(Stats.level==16){Application.LoadLevel("Level16");}
if(Stats.level==17){Application.LoadLevel("Level17");}
if(Stats.level==18){Application.LoadLevel("Level18");}
if(Stats.level==19){Application.LoadLevel("Level19");}
if(Stats.level==20){Application.LoadLevel("Level20");}
}

if(GUI.Button(Rect(Screen.width/21.6,Screen.height/1.2,100,50), "" , back)){
Movement.score =0 ;
Application.LoadLevel("Campaign");
}

if(GUI.Button(Rect(Screen.width/1.5,Screen.height/1.2,100,50), "" , home)){
Movement.score =0 ;
Application.LoadLevel("Homescreen");
}

}

