var player : GameObject;

var track1 : GameObject;
var track2 : GameObject;
var track3 : GameObject;

var obstacle1 : GameObject;
var obstacle2 : GameObject;
var obstacle3 : GameObject;
var obstacle4 : GameObject;
var obstacle5 : GameObject;
var obstacle6 : GameObject;
var obstacle7 : GameObject;
var obstacle8 : GameObject;

var tboost : GameObject;
var shieldpu : GameObject;
var tx : GameObject;

public static var playerposition : Vector3;

public static var track1position : Vector3;
public static var track2position : Vector3;
public static var track3position : Vector3;
public static var movetrack : Vector3 = Vector3 (0, 0, 50);
public static var moveobs : Vector3 = Vector3 (0, 0, 35);

public static var obstacle1position : Vector3;
public static var obstacle2position : Vector3;
public static var obstacle3position : Vector3;
public static var obstacle4position : Vector3;
public static var obstacle5position : Vector3;
public static var obstacle6position : Vector3;
public static var obstacle7position : Vector3;
public static var obstacle8position : Vector3;


function Start () 
{

//playerposition = Vector3 (0, 0.2, 24.4);
//playerposition = Vector3 (0, 0.2, 24.4);
//player = Instantiate(player, playerposition , transform.rotation );
Pcollision.health = 1;

track1position = Vector3 (0, 0,0);
track1 = Instantiate(track1, track1position , transform.rotation);
track1.transform.Rotate( 270 , 0 , 0 );

track2position = Vector3 (0, 0, -50);
track2 = Instantiate(track2, track2position , transform.rotation);
track2.transform.Rotate( 270 , 0 , 0 );

track3position = Vector3 (0, 0, -100);
track3 = Instantiate(track3, track3position , transform.rotation);
track3.transform.Rotate( 270 , 0 , 0 );

obstacle1position = Vector3 (0,0.175,0);
obstacle1 = Instantiate(obstacle1, obstacle1position , transform.rotation);

obstacle2position = Vector3 (0.66,0.175,0);
obstacle2 = Instantiate(obstacle2, obstacle2position , transform.rotation);

obstacle3position = Vector3 (-0.66,0.175,-8);
obstacle3 = Instantiate(obstacle3, obstacle3position , transform.rotation);

obstacle4position = Vector3 (0,0.175,-12);
obstacle4 = Instantiate(obstacle4, obstacle4position , transform.rotation);

obstacle5position = Vector3 (0.66,0.175,-18);
obstacle5 = Instantiate(obstacle5, obstacle5position , transform.rotation);

obstacle6position = Vector3 (-0.66,0.175,-22);
obstacle6 = Instantiate(obstacle6, obstacle6position , transform.rotation);

obstacle7position = Vector3 (0,0.175,-25);
obstacle7 = Instantiate(obstacle7, obstacle7position , transform.rotation);

obstacle8position = Vector3 (-0.66,0.175,-25);
obstacle8 = Instantiate(obstacle8, obstacle8position , transform.rotation);


//Debug.Log("First set of Obstacles ready");
//tboost = Instantiate(tboost, transform.position , transform.rotation);
//Debug.Log("First set of power ups ready");

}

function OnTriggerEnter (trigger : Collider) 
	{
	     /////// !!!!!!!!!!!!!!!Tracks !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	     
	    if (trigger.gameObject.CompareTag ("track")) 
	         {
	         track1.transform.position = track3.transform.position - movetrack;
	         }  
	    if (trigger.gameObject.CompareTag ("track2")) 
	         {
			  track2.transform.position = track1.transform.position - movetrack;
	         }  
	    if (trigger.gameObject.CompareTag ("track3")) 
	         {
			  track3.transform.position = track2.transform.position - movetrack;
	         }   
	         
	             
	       /////// !!!!!!!!!!!!!!! Obstacles !!!!!!!!!!!!!!!!!!!!!!!!!!!!!        
	                     
	                         
	               if (trigger.gameObject.CompareTag ("obstacle")) 
	         {
	         trigger.gameObject.transform.position = trigger.gameObject.transform.position - moveobs;
	         }                      
	            
    }


function Update () 
{

}