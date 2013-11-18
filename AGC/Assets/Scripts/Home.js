function OnGUI()
{
//GUI.Box(Rect(460,200,150,200), "Select Level");

if(GUI.Button(Rect(175,200,125,30), "Campaign")){
Application.LoadLevel("Campaign");
}

if(GUI.Button(Rect(175,250,125,30), "Endless Runner")){
Application.LoadLevel("Erunner");
}

GUI.Label(Rect(187,300,100,20), "17590");


if(GUI.Button(Rect(175,350,125,30), "Shop")){
}

}

Screen.SetResolution (480, 800, true);