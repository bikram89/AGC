	
	public static var moveSpeed = 0.15 ;
	public static var oldmoveSpeed = moveSpeed;
	public static var upTimer : float;
	var shieldpf : GameObject;
	public static var shield : Vector3;
	public static var playerz = 24.4;
	public static var up = 0;
	public static var score : float;
	public static var startposition : Vector2;
	public static var endposition : Vector2;
	var instance : GameObject ;

	
	// Use this for initialization
	function Start () 
	{
	Debug.Log( Application.loadedLevelName);
	if(Application.loadedLevelName == "Level1"){Stats.level = 1;}
	if(Application.loadedLevelName == "Level2"){Stats.level = 2;}
	if(Application.loadedLevelName == "Level3"){Stats.level = 3;}
	if(Application.loadedLevelName == "Level4"){Stats.level = 4;}
	if(Application.loadedLevelName == "Level5"){Stats.level = 5;}
	if(Application.loadedLevelName == "Level6"){Stats.level = 6;}
	if(Application.loadedLevelName == "Level7"){Stats.level = 7;}
	if(Application.loadedLevelName == "Level8"){Stats.level = 8;}
	if(Application.loadedLevelName == "Level9"){Stats.level = 9;}
	if(Application.loadedLevelName == "Level10"){Stats.level = 10;}
	if(Application.loadedLevelName == "Level11"){Stats.level = 11;}
	if(Application.loadedLevelName == "Level12"){Stats.level = 12;}
	if(Application.loadedLevelName == "Level13"){Stats.level = 13;}
	if(Application.loadedLevelName == "Level14"){Stats.level = 14;}
	if(Application.loadedLevelName == "Level15"){Stats.level = 15;}
	if(Application.loadedLevelName == "Level16"){Stats.level = 16;}
    if(Application.loadedLevelName == "Level17"){Stats.level = 17;}
	if(Application.loadedLevelName == "Level18"){Stats.level = 18;}
	if(Application.loadedLevelName == "Level19"){Stats.level = 19;}
	if(Application.loadedLevelName == "Level20"){Stats.level = 20;}
	if(Application.loadedLevelName == "Level21"){Stats.level = 21;}
	if(Application.loadedLevelName == "Level22"){Stats.level = 22;}
	if(Application.loadedLevelName == "Level23"){Stats.level = 23;}
	if(Application.loadedLevelName == "Level24"){Stats.level = 24;}
	
	}

	function Update () 
	{
	
	 if(gamescreengui.p == 1){
    movespeed = 0;}
    
    if(gamescreengui.p == 0){
              score = score + 0.1;
              
	          if(upTimer > 0){
	           upTimer -= Time.deltaTime;
	           }
	              
	          if(upTimer <= 0){
			  up = 0;
	           }
	 
	 
	  transform.Translate(0,moveSpeed,0);  // regular levels
	 // transform.Translate(0,0,moveSpeed);  // endless runner
	 
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
	   /* if(rigidbody.position.x <= 0.2){
	     var left : Vector3 = Vector3 (40, 0, 0);
	     rigidbody.MovePosition(rigidbody.position + left * Time.deltaTime);}*/
	     
	      if(rigidbody.position.x == 0){
	     rigidbody.transform.position.x = 0.66;}
	     
	        if(rigidbody.position.x < 0){
	     rigidbody.transform.position.x = 0;}
	     
	   }
	
	  if(Input.GetKeyDown(KeyCode.UpArrow))
	   {
	  // Debug.Log("Up arrow pressed ?");
	    upTimer = 0.5;
	    up=1;
	   }
	      
	  if(Input.GetKeyDown(KeyCode.DownArrow))
	   {
	    //Debug.Log("Up arrow pressed ?");
	     if(rigidbody.position.y >= 0.50){
	     var down : Vector3 = Vector3 (0, -20, 0);
	     rigidbody.MovePosition(rigidbody.position + down * Time.deltaTime);}
	   }
	   
	   shield = rigidbody.position;
	   playerz = rigidbody.position.z;
	   
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
       
      /* if(rigidbody.position.x <= 0.2){
		Debug.Log("position set5");
	    var left1 : Vector3 = Vector3 (40, 0, 0);
	    rigidbody.MovePosition(rigidbody.position + left1 * Time.deltaTime);}*/
	    
	    	      if(rigidbody.position.x == 0){
	     rigidbody.transform.position.x = 0.66;}
	     
	        if(rigidbody.position.x < 0){
	     rigidbody.transform.position.x = 0;}
       
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
       // did jumping here :P 
       Debug.Log("Up arrow pressed ?");
	    upTimer = 1;
	    up=1;
      }
     }
    }
    
   }
    
	}
	
	
