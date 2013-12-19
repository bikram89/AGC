#pragma strict

 var score :  GUIStyle;
 var pause :  GUIStyle;
 var resume :  GUIStyle;
 var health :  GUIStyle;
 public static var p = 0;

function OnGUI()
{
if(p==0){
if(GUI.Button(Rect(10 ,10,25,25), " ", pause)){
if(gamescreengui.p == 0){
Movement.oldmoveSpeed = Movement.moveSpeed;
Movement.moveSpeed = 0;
Emovement.eSpeed = 0;
p=1;}
}
}
if(p==1){
if(GUI.Button(Rect(10 ,10,50,50), " ", resume)){
//Movement.oldmoveSpeed = Movement.moveSpeed;
Movement.moveSpeed = Movement.oldmoveSpeed ;
Emovement.eSpeed = 0.15;
p=0;
}
}

score.normal.textColor = Color.white;
score.fontSize = 20;

GUI.Label(Rect((Screen.width/2)-40,10,150,40), " " +Mathf.Round(Movement.score) , score);

GUI.Label(Rect(Screen.width-100,10,80,20), "Health  " +Pcollision.health , health);


}