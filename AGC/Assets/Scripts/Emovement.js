

public static var eSpeed = 0.15;
public static var oldeSpeed = eSpeed;

function Start () {
}

// Update is called once per frame
function Update () {
  if(gamescreengui.p == 0){
transform.Translate(0,eSpeed,0);
}
}

function OnTriggerEnter (trigger : Collider) 
	{
	    if (trigger.gameObject.CompareTag ("finish")) 
	         {
	           Debug.Log("Din know this works....");
	           Destroy (gameObject);
               Movement.moveSpeed = 0;
               Application.LoadLevel("Gameover");
               Movement.moveSpeed = 0.15 ;
	           health = 3;
	           Pcollision.boostTimer = 0;
	           stopTimer =  0;
	           xTimer = 0;
	         }     
	  }       