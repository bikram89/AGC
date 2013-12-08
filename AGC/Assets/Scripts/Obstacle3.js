#pragma strict
public static var obs3 = 0;

function Start () {
}

function Update () {

 //Debug.Log("x = " +this.transform.position.x);
 
if(this.transform.position.x <= -0.66){obs3 = 1;}
if(this.transform.position.x >= 0.66){obs3 = 2;}

if(obs3 == 1){transform.Translate(0.01,0,0);}
if(obs3 == 2){transform.Translate(-0.01,0,0);}


}