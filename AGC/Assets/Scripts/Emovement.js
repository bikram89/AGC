

public static var eSpeed = 0.1;
public static var oldeSpeed = eSpeed;

function Start () {
}

// Update is called once per frame
function Update () {
transform.Translate(0,eSpeed,0);
}

