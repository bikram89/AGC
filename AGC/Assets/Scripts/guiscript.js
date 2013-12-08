#pragma strict

function OnGUI()
{
GUI.Box(Rect(460,200,150,200), "Select Level");
if(GUI.Button(Rect(485,220,100,30), "Level 1")){
Application.LoadLevel(2);
}
if(GUI.Button(Rect(485,260,100,30), "Level 2")){
Application.LoadLevel(2);
}
}