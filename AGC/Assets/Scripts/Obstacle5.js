#pragma strict

function Start () {

}

function Update () {
if( this.transform.position.z - Movement.playerz >= -30){
transform.Translate(0,0,0.15);}
}