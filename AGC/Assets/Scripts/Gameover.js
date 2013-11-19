function OnGUI()
{
GUI.Box(Rect(150,175,175,200), "Failed");

if(GUI.Button(Rect(175,220,125,30), "Retry")){
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

}

if(GUI.Button(Rect(175,270,125,30), "Back")){
Movement.score =0 ;
Application.LoadLevel("Campaign");
}

if(GUI.Button(Rect(175,320,125,30), "Home")){
Movement.score =0 ;
Application.LoadLevel("Homescreen");
}

}

