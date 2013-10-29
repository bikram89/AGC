#pragma strict

function OnGUI()
{
if(GUI.Button(Rect(200,200,100,50), "Level 1")){
Application.LoadLevel(2);
}
}