#pragma strict

function Start () {

}


	function OnTriggerEnter (trigger : Collider) 
{
    if (trigger.gameObject.CompareTag ("obstacle")) 
         {
           Debug.Log("Shielded Fk Yeah...");
		   Destroy (trigger.gameObject);
		 }      
    if (trigger.gameObject.CompareTag ("obstacle2")) 
         {
           Debug.Log("Shielded Fk Yeah...");
		   Destroy (trigger.gameObject);
		 }  

}

function Update () {
transform.Translate(0,Movement.moveSpeed,0);
rigidbody.position = Movement.shield;
}