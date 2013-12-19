#pragma strict
public static var obs3 = 0;

function Start () {
}

function Update () {
transform.position = Vector3(-(Mathf.PingPong(Time.time/1.7, 0.66+0.66)-0.66), transform.position.y, transform.position.z);
//transform.position = Vector3(-(Mathf.PingPong(Time.time/1.7, 1.4)-0.66), transform.position.y, transform.position.z);
}