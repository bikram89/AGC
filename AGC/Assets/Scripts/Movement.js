	
	public static var moveSpeed = 0.15 ;
	public static var oldmoveSpeed = moveSpeed;
	public static var boostTimer : float;
	public static var stopTimer : float;
	public static var xTimer : float;
	public static var shieldTimer : float;
	var shieldpf : GameObject;
	public static var shield : Vector3;
	public static var s = 0;
	public static var startposition : Vector2;
	public static var endposition : Vector2;
	 var instance : GameObject ;
	//var testlevel2 : String;
	//public static var newmoveSpeed ;
	
	// Use this for initialization
	function Start () 
	{
	moveSpeed = 0.15 ;
	}
	
	// Update is called once per frame
	
	function OnCollisionEnter(collision : Collision) 
	{
	   if(collision.collider.tag=="obstacle")
	    {
	     Debug.Log("Collided");
	    }
	    
	    if (collision.gameObject.CompareTag ("enemy")) 
	         {
	           Debug.Log(" Enemy destroyed ");
				Destroy (collision.gameObject);
			 }
	    
	}
	
	
		function OnTriggerEnter (trigger : Collider) 
	{
	    if (trigger.gameObject.CompareTag ("obstacle")) 
	         {
	           Debug.Log("Hit Obstacle , Slowing down....");
				Destroy (trigger.gameObject);
				moveSpeed = moveSpeed - 0.03;
				oldmoveSpeed = moveSpeed;
	
			 }      
			 
		if (trigger.gameObject.CompareTag ("pboost")) 
	         {
	           Debug.Log("speed increased");
				Destroy (trigger.gameObject);
				moveSpeed = moveSpeed + 0.05;
			 }    
			
		if (trigger.gameObject.CompareTag ("enemy")) 
	         {
	           Debug.Log("Enemy destroyed....");
			   Destroy (trigger.gameObject);
			 } 	
			 
		if (trigger.gameObject.CompareTag ("tboost")) 
	         {
	           Debug.Log("speed increased for a while");
			   Destroy (trigger.gameObject);
			   
			   oldmoveSpeed = moveSpeed;
			   moveSpeed = moveSpeed + 0.1;
			   boostTimer = 2;
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
	           moveSpeed = 0.15 ;
			   Application.LoadLevel("testlevel");
			 } 	
			
			
	}
	
	function Update () 
	{
	           if(boostTimer > 0){
	           boostTimer -= Time.deltaTime;
	           }
	 
	 		   if(boostTimer <= 0){
			   moveSpeed = oldmoveSpeed;
	           // Debug.Log("normal speed restored");
	              }
	              
	           if(stopTimer > 0){
	           stopTimer -= Time.deltaTime;
	           }
	              
	           if(stopTimer <= 0){
			     Emovement.eSpeed =  Emovement.oldeSpeed;
	           // Debug.Log("Enemies moving again");
	              }
	 
	            if(xTimer > 0){
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
	 
	 
	 
	  transform.Translate(0,moveSpeed,0);
	 
	  //this.transform.Translate(0,Input.GetAxis("Horizontal"),0);
	
	  if(Input.GetKeyDown(KeyCode.RightArrow))
	   {
	   // Debug.Log("right arrow pressed ?");
	    /*if(rigidbody.position.x >= 0){
	     var right : Vector3 = Vector3 (-40, 0, 0);
	     rigidbody.MovePosition(rigidbody.position + right * Time.deltaTime);}*/
	     
	      if(rigidbody.position.x == 0){
	     rigidbody.transform.position.x = -0.66;}
	     
	        if(rigidbody.position.x > 0){
	     rigidbody.transform.position.x = 0;}
	     
	   }
	
	  if(Input.GetKeyDown(KeyCode.LeftArrow))
	   {
	    //Debug.Log("left arrow pressed ?");
	    if(rigidbody.position.x <= 0.2){
	     var left : Vector3 = Vector3 (40, 0, 0);
	     rigidbody.MovePosition(rigidbody.position + left * Time.deltaTime);}
	   }
	
	  if(Input.GetKeyDown(KeyCode.UpArrow))
	   {
	    //Debug.Log("Up arrow pressed ?");
	    if(rigidbody.position.y <= 0.50)
	    {var up : Vector3 = Vector3 (0, 20, 0);
	     rigidbody.MovePosition(rigidbody.position + up * Time.deltaTime);}
	   }
	
	  if(Input.GetKeyDown(KeyCode.DownArrow))
	   {
	    //Debug.Log("Up arrow pressed ?");
	     if(rigidbody.position.y >= 0.50){
	     var down : Vector3 = Vector3 (0, -20, 0);
	     rigidbody.MovePosition(rigidbody.position + down * Time.deltaTime);}
	   }
	   
	   shield = rigidbody.position;
	   
//	   if(Input.touchCount>0 && Input.GetTouch(0).phase == TouchPhase.Moved)
//	   {
//		   	if(Input.GetTouch(0).deltaPosition.x > 50){
//		   Debug.Log("swiped right");
//		  /* if(rigidbody.position.x >= 0){
//		   var right1 : Vector3 = Vector3 (-40, 0, 0);
//		   rigidbody.MovePosition(rigidbody.position + right1 * Time.deltaTime);}*/
//		   
//		   if(rigidbody.position.x == 0){
//		     rigidbody.transform.position.x = -0.66;}
//		     
//		   if(rigidbody.position.x > 0){
//		     rigidbody.transform.position.x = 0;}
//		   }
//		   
//		   
//		   	if(Input.GetTouch(0).deltaPosition.x < -50){
//		   Debug.Log("swiped left");
//		     if(rigidbody.position.x <= 0.2){
//		   var left1 : Vector3 = Vector3 (40, 0, 0);
//		   rigidbody.MovePosition(rigidbody.position + left1 * Time.deltaTime);}
//		   		}
//	   }
//	if(Input.touchCount>0 && Input.GetTouch(0).phase == TouchPhase.Began)
//	   {
//		   	
//		   	startposition = Input.GetTouch(0).position;
//		   	Debug.Log("position set1");
//		   	
//		   	if(Input.GetTouch(0).phase == TouchPhase.Moved)
//		   	{
//		   		Debug.Log("position set2");
//		   		endposition = Input.GetTouch(0).position;
//		   	}
//		   	
//		   	if(Input.GetTouch(0).phase == TouchPhase.Ended)
//		   	{
//		   		Debug.Log("position set3");
//		   		if((startposition.x-endposition.x)>1)
//		   		{
//		   			Debug.Log("position set4");
//		   			if(rigidbody.position.x <= 0.2){
//		   				Debug.Log("position set5");
//						var left1 : Vector3 = Vector3 (40, 0, 0);
//						rigidbody.MovePosition(rigidbody.position + left1 * Time.deltaTime);}
//						}
//		   		}
//		   	}
		for (var touch : Touch in Input.touches)
    {
     if (touch.phase == TouchPhase.Began)
     {
      startposition = touch.position;
      endposition = touch.position;
     }
     if (touch.phase == TouchPhase.Moved )
     {
      endposition = touch.position;
     }
     if(touch.phase == TouchPhase.Ended)
     { 
      
      if((startposition.x - endposition.x) > 50) // left swipe
      {
       
       if(rigidbody.position.x <= 0.2){
		   				Debug.Log("position set5");
						var left1 : Vector3 = Vector3 (40, 0, 0);
						rigidbody.MovePosition(rigidbody.position + left1 * Time.deltaTime);}
       
      }
      else if((startposition.x - endposition.x) < -50) // right swipe
      {
      	Debug.Log("position set6");
       	if(rigidbody.position.x == 0){
		     rigidbody.transform.position.x = -0.66;}
		     
		   if(rigidbody.position.x > 0){
	     rigidbody.transform.position.x = 0;}
       	
      }
      else if((startposition.x - endposition.x) < -80 ) // up swipe
      {
       // do jumping here
      }
     }
    }
   
	}
	
	
