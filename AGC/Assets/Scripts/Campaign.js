function OnGUI()
{
GUI.Box(Rect(5,10,460,700), "Campaign");

if(GUI.Button(Rect(20,50,50,50), "1")){Application.LoadLevel("Level1");}
GUI.Label(Rect(20,100,50,20), " " +PlayerPrefs.GetFloat("level1score"));

if(GUI.Button(Rect(95,50,50,50), "2")){Application.LoadLevel("Level2");}
GUI.Label(Rect(95,100,50,20), " " +PlayerPrefs.GetFloat("level2score"));

if(GUI.Button(Rect(170,50,50,50), "3")){Application.LoadLevel("Level3");}
GUI.Label(Rect(170,100,50,20), " " +PlayerPrefs.GetFloat("level3score"));

if(GUI.Button(Rect(245,50,50,50), "4")){Application.LoadLevel("Level4");}
GUI.Label(Rect(245,100,50,20), " " +PlayerPrefs.GetFloat("level4score"));

if(GUI.Button(Rect(320,50,50,50), "5")){Application.LoadLevel("Level5");}
GUI.Label(Rect(320,100,50,20), " " +PlayerPrefs.GetFloat("level5score"));

if(GUI.Button(Rect(395,50,50,50), "6")){Application.LoadLevel("Level1");}
GUI.Label(Rect(395,100,50,20), " " +PlayerPrefs.GetFloat("level6score"));


if(GUI.Button(Rect(20,150,50,50), "7")){
}
GUI.Label(Rect(20,200,50,20), " " +PlayerPrefs.GetFloat("level7score"));

if(GUI.Button(Rect(95,150,50,50), "8")){
}
GUI.Label(Rect(95,200,50,20), " " +PlayerPrefs.GetFloat("level8score"));

if(GUI.Button(Rect(170,150,50,50), "9")){
}
GUI.Label(Rect(170,200,50,20), " " +PlayerPrefs.GetFloat("level9score"));

if(GUI.Button(Rect(245,150,50,50), "10")){
}
GUI.Label(Rect(245,200,50,20), " " +PlayerPrefs.GetFloat("level10score"));

if(GUI.Button(Rect(320,150,50,50), "11")){
}
GUI.Label(Rect(320,200,50,20), " " +PlayerPrefs.GetFloat("level1score"));

if(GUI.Button(Rect(395,150,50,50), "12")){
}
GUI.Label(Rect(395,200,50,20), " " +PlayerPrefs.GetFloat("level1score"));



}
