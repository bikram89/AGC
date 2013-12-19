 var bg :  GUIStyle;
 var back :  GUIStyle;
 var home :  GUIStyle;
 var retry :  GUIStyle;
 var scoren :  GUIStyle;
 var score :  GUIStyle;
 
function Start () 
{
if(Stats.level==1705){if(Mathf.Round(Movement.score) >= PlayerPrefs.GetFloat("erunnerscore")){
PlayerPrefs.SetFloat("erunnerscore", Mathf.Round(Movement.score));}}
}

function OnGUI()
{
GUI.Box(Rect(0,0,Screen.width,Screen.height), "" , bg);

if(GUI.Button(Rect(Screen.width/2.8,Screen.height/2.52,100,100), " " , retry)){
Movement.score =0 ;
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
if(Stats.level==1705){Application.LoadLevel("Erunner");}

}

if(Stats.level==1705){
GUI.Label(Rect((Screen.width/4.2),140,80,30), "Score  " ,score);
GUI.Label(Rect((Screen.width/2),140,80,30), " " +Mathf.Round(Movement.score),scoren);

GUI.Label(Rect(Screen.width/5,180,80,30), "Highscore  " ,score); 
GUI.Label(Rect(Screen.width/2,180,80,30), " " +PlayerPrefs.GetFloat("erunnerscore"),scoren); }


if(GUI.Button(Rect(Screen.width/21.6,Screen.height/1.2,100,50), "" , back)){
Movement.score =0 ;
Application.LoadLevel("Campaign");
}

if(GUI.Button(Rect(Screen.width/1.5,Screen.height/1.2,100,50), "" , home)){
Movement.score =0 ;
Application.LoadLevel("Homescreen");
}

}

