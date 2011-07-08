var jumpSpeed : float = 10.0;
var gravity : float = -20;
var haxis : float;

private var vy : float;

function Start() {
   	animation["Walk"].speed = 2.0;

   	animation["Punch"].wrapMode = WrapMode.Once;
   	animation["Punch"].layer = 1;
}

function Update() {
	if (transform.position.y > 0.0) {
		transform.position.y += vy * Time.deltaTime;
		vy += gravity * Time.deltaTime;
		if (transform.position.y <= 0.0) {
			transform.position.y = 0.0;
			animation.Play("Crouch");
		}
	} else if (Input.GetButtonDown("Jump")) {
		vy = jumpSpeed;
		transform.position.y += vy * Time.deltaTime;
		animation.Play("Jump");
	} else {
		haxis = Input.GetAxis("Horizontal");
		if (Mathf.Abs(haxis) > 0.1) {
	        animation.CrossFade("Walk");
	    } else {
	        animation.CrossFade("Idle");
	    }
	}
	
	transform.position.x += haxis * 4.0 * Time.deltaTime;
	transform.rotation = Quaternion.AngleAxis(180.0 - haxis * 90.0, Vector3.up);
    
    if (Input.GetButtonDown("Fire1")) {
    	animation.CrossFade("Punch", 0.1);
    }
}
