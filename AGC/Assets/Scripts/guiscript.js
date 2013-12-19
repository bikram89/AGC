#pragma strict
var controlTexture : Texture2D;
public var huh :  GUIStyle;
var hmmm :  GUIStyle;

function OnGUI()
{

GUI.Button (Rect (10,10,100,20), GUIContent ("Click me", "This is the tooltip"));
	// This line reads and displays the contents of GUI.tooltip
	GUI.Label (Rect (10,40,100,20), GUI.tooltip);
	
	
		GUI.Button (Rect (10,100,100,20), GUIContent ("Click me", controlTexture, "wats difference ?"));
	GUI.Label (Rect (10,40,100,20), GUI.tooltip);

if(GUI.Button(Rect(0,380,300,100), GUIContent(controlTexture ,"screw it :P ") )){
Application.LoadLevel("Homescreen");
}

GUI.Box(Rect(0,0,150,200), "Select Level");
if(GUI.Button(Rect(10,500,100,30)," " , hmmm)){
Application.LoadLevel(2);
}
if(GUI.Button(Rect(0,550,100,30), "Level 2" , huh)){
Application.LoadLevel(2);
}
}