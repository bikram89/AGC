﻿
    public static var boostTimer : float;
	public static var stopTimer : float;
	public static var xTimer : float;
	public static var shieldTimer : float;
	public static var upTimer : float;
	var shieldpf : GameObject;
	public static var shield : Vector3;
	public static var s = 0;
	public static var health = 3;
	var instance : GameObject ;

function Start () {

}

	
		function OnTriggerEnter (trigger : Collider) 
	{
	    if (trigger.gameObject.CompareTag ("obstacle")) 
	         {
	           Debug.Log("Hit Obstacle , Slowing down....");
				Destroy (trigger.gameObject);
				 health = health - 1;
//				Movement.moveSpeed = Movement.moveSpeed - 0.05;
//				Movement.oldmoveSpeed = Movement.moveSpeed;
	         }      
			 
			  if (trigger.gameObject.CompareTag ("obstacle2")) 
	         {
              if(Movement.up==0){
              Destroy (trigger.gameObject);
              health = health - 1;
			 }  
			 }
			 
			 
			 
		if (trigger.gameObject.CompareTag ("pboost")) 
	         {
	           Debug.Log("speed increased");
				Destroy (trigger.gameObject);
				Movement.moveSpeed = Movement.moveSpeed + 0.05;
			 }    
			
		if (trigger.gameObject.CompareTag ("enemy")) 
	         {
	           Debug.Log("Enemy destroyed....");
			   Destroy (trigger.gameObject);
			   Movement.score= Movement.score + 1000 ;
			 } 	
			 
		if (trigger.gameObject.CompareTag ("tboost")) 
	         {
	           Debug.Log("speed increased for a while");
			   Destroy (trigger.gameObject);
			   
			   Movement.oldmoveSpeed = Movement.moveSpeed;
			   Movement.moveSpeed = Movement.moveSpeed + 0.12;
			   boostTimer = 2;
			   Movement.score = Movement.score + 500 ;
			   
			 } 	
			 
	    if (trigger.gameObject.CompareTag ("stop")) 
	         {
	           Debug.Log("Enemies are stopped...");
			   Destroy (trigger.gameObject);
			  
			   Emovement.eSpeed = 0;
			   stopTimer = 2;
			 } 	
			 
	    if (trigger.gameObject.CompareTag ("shield")) 
	         {
	           Debug.Log("frkin invincible , Fk Yeah");
			   Destroy (trigger.gameObject);
			   instance = Instantiate(shieldpf, rigidbody.position , transform.rotation);
			   shieldTimer = 5;
			   s=1;
			 } 	
			 
	    if (trigger.gameObject.CompareTag ("2x")) 
	         {
	          // Debug.Log("2 x points");
			   Destroy (trigger.gameObject);
			   
			 //  xTimer = 5;
			 } 
		
		if (trigger.gameObject.CompareTag ("finish")) 
	         {
	           Debug.Log("finished..Loading Next Level");
	           Movement.moveSpeed = 0.15 ;
	           health = 3;
			   Application.LoadLevel("LevelComplete");
			   
			   
			   
			   
			 } 	
		
	}
	
     function Update () {

               if(boostTimer > 0){
	           boostTimer -= Time.deltaTime;
	           }
	 
	 		   if(boostTimer <= 0){
			   Movement.moveSpeed = Movement.oldmoveSpeed;
	           // Debug.Log("normal speed restored");
	              }
	              
	           if(stopTimer > 0){
	           stopTimer -= Time.deltaTime;
	           }
	              
	           if(stopTimer <= 0)
	           {
			     Emovement.eSpeed =  Emovement.oldeSpeed;
	          // Debug.Log("Enemies moving again");
	           }
	 
	           if(xTimer > 0)
	           {
	           xTimer -= Time.deltaTime;
	           }
	              
	           if(shieldTimer <= 0){
	           if(s==1){
	           Destroy (instance );
	           s=0;}
	           }
	              
	           if(shieldTimer > 0){
	           shieldTimer -= Time.deltaTime;
	           }
	           
	          if(health <= 0)
              {
               Destroy (gameObject);
               Movement.moveSpeed = 0;
               Movement.oldmoveSpeed = 0;
               Application.LoadLevel("Gameover");
              }      
	           
}