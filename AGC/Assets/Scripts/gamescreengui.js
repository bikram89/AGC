#pragma strict

function OnGUI()
{
if(GUI.Button(Rect(10,20,50,15), "Back  ")){
Application.LoadLevel("Homescreen");
}


GUI.Label(Rect(400,20,80,20), "Score  " +Movement.score);

GUI.Label(Rect(200,20,80,20), "Health  " +Pcollision.health);


}