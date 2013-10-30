#pragma strict

function OnGUI()
{
if(GUI.Button(Rect(0,0,200,60), "Back")){
Application.LoadLevel(0);
}
}