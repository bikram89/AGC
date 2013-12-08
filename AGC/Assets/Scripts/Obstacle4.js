#pragma strict
public static var obs4 = 0;

function Start () {
}

function Update () {

 Debug.Log("x = " +this.transform.position.x);
 if(this.transform.position.x <= -0.66){obs4 = 1;}
if(this.transform.position.x >= 0.66){obs4 = 2;}


if(obs4 == 2){transform.Translate(-0.01,0,0);}
if(obs4 == 1){transform.Translate(0.01,0,0);}



}