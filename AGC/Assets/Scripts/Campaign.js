
 var bg :  GUIStyle;
 var score :  GUIStyle;
  
 var l1 :  GUIStyle;
 var l2 :  GUIStyle;
 var l3 :  GUIStyle;
 var l4 :  GUIStyle;
 var l5 :  GUIStyle;
 var l6 :  GUIStyle;
 var l7 :  GUIStyle;
 var l8 :  GUIStyle;
 var l9 :  GUIStyle;
 var l10 :  GUIStyle;
 var l11 :  GUIStyle;
 var l12 :  GUIStyle;
 var l13 :  GUIStyle;
 var l14 :  GUIStyle;
 var l15 :  GUIStyle;
 var l16 :  GUIStyle;
 var l17 :  GUIStyle;
 var l18 :  GUIStyle;
 var l19 :  GUIStyle;
 var l20 :  GUIStyle;

function OnGUI()
{
GUI.Box(Rect(0,0,Screen.width,Screen.height), "" , bg);

if(GUI.Button(Rect(Screen.width/18,75,42,42), "" ,l1)){Application.LoadLevel("Level1");}
GUI.Label(Rect(Screen.width/30,125,42,20), " " +PlayerPrefs.GetFloat("level1score"), score);

if(GUI.Button(Rect(Screen.width/4,75,42,42), "" , l2)){Application.LoadLevel("Level2");}
GUI.Label(Rect(Screen.width/4.3,125,42,20), " " +PlayerPrefs.GetFloat("level2score") , score);

if(GUI.Button(Rect(Screen.width/2.25,75,42,42), "" , l3)){Application.LoadLevel("Level3");}
GUI.Label(Rect(Screen.width/2.32,125,42,20), " " +PlayerPrefs.GetFloat("level3score") ,score);

if(GUI.Button(Rect(Screen.width/1.56,75,42,42), "" , l4)){Application.LoadLevel("Level4");}
GUI.Label(Rect(Screen.width/1.60,125,42,20), " " +PlayerPrefs.GetFloat("level4score"), score);

if(GUI.Button(Rect(Screen.width/1.2,75,42,42), "" , l5)){Application.LoadLevel("Level5");}
GUI.Label(Rect(Screen.width/1.22,125,42,20), " " +PlayerPrefs.GetFloat("level5score"), score);



if(GUI.Button(Rect(Screen.width/18,175,42,42), "" , l6)){Application.LoadLevel("Level6");}
GUI.Label(Rect(Screen.width/30,225,42,20), " " +PlayerPrefs.GetFloat("level6score"), score);

if(GUI.Button(Rect(Screen.width/4,175,42,42), "" , l7)){Application.LoadLevel("Level7");}
GUI.Label(Rect(Screen.width/4.3,225,42,20), " " +PlayerPrefs.GetFloat("level7score"), score);

if(GUI.Button(Rect(Screen.width/2.25,175,42,42), "" , l8)){Application.LoadLevel("Level8");}
GUI.Label(Rect(Screen.width/2.32,225,42,20), " " +PlayerPrefs.GetFloat("level8score"), score);

if(GUI.Button(Rect(Screen.width/1.56,175,42,42), "" , l9)){Application.LoadLevel("Level9");}
GUI.Label(Rect(Screen.width/1.60,225,42,20), " " +PlayerPrefs.GetFloat("level9score"), score);

if(GUI.Button(Rect(Screen.width/1.2,175,42,42), "" , l10)){Application.LoadLevel("Level10");}
GUI.Label(Rect(Screen.width/1.22,225,42,20), " " +PlayerPrefs.GetFloat("level10score"), score);



if(GUI.Button(Rect(Screen.width/18,275,42,42), "" , l11)){Application.LoadLevel("Level11");}
GUI.Label(Rect(Screen.width/30,325,42,20), " " +PlayerPrefs.GetFloat("level11score"), score);

if(GUI.Button(Rect(Screen.width/4,275,42,42), "" , l12)){Application.LoadLevel("Level12");}
GUI.Label(Rect(Screen.width/4.3,325,42,20), " " +PlayerPrefs.GetFloat("level12score"), score);

if(GUI.Button(Rect(Screen.width/2.25,275,42,42), "" , l13)){Application.LoadLevel("Level1");}
GUI.Label(Rect(Screen.width/2.32,325,42,20), " " +PlayerPrefs.GetFloat("level13score"), score);

if(GUI.Button(Rect(Screen.width/1.56,275,42,42), "" , l14)){Application.LoadLevel("Level1");}
GUI.Label(Rect(Screen.width/1.60,325,42,20), " " +PlayerPrefs.GetFloat("level14score"), score);

if(GUI.Button(Rect(Screen.width/1.2,275,42,42), "" , l15)){Application.LoadLevel("Level1");}
GUI.Label(Rect(Screen.width/1.22,325,42,20), " " +PlayerPrefs.GetFloat("level15score"), score);



if(GUI.Button(Rect(Screen.width/18,375,42,42), "" , l16)){Application.LoadLevel("Level1");}
GUI.Label(Rect(Screen.width/30,425,42,20), " " +PlayerPrefs.GetFloat("level16score"), score);

if(GUI.Button(Rect(Screen.width/4,375,42,42), "" , l17)){Application.LoadLevel("Level1");}
GUI.Label(Rect(Screen.width/4.3,425,42,20), " " +PlayerPrefs.GetFloat("level17score"), score);

if(GUI.Button(Rect(Screen.width/2.25,375,42,42), "" , l18)){Application.LoadLevel("Level1");}
GUI.Label(Rect(Screen.width/2.32,425,42,20), " " +PlayerPrefs.GetFloat("level18score"), score);

if(GUI.Button(Rect(Screen.width/1.56,375,42,42), "" , l19)){Application.LoadLevel("Level1");}
GUI.Label(Rect(Screen.width/1.60,425,42,20), " " +PlayerPrefs.GetFloat("level19score"), score);

if(GUI.Button(Rect(Screen.width/1.2,375,42,42), "" , l20)){Application.LoadLevel("Level1");}
GUI.Label(Rect(Screen.width/1.22,425,42,20), " " +PlayerPrefs.GetFloat("level20score"), score);


}
