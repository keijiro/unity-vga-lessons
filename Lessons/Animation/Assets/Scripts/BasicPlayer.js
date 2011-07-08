function Start() {
   	animation["Walk"].speed = 2.0;

   	animation["Punch"].wrapMode = WrapMode.Once;
   	animation["Punch"].layer = 1;
}

function Update() {
	var haxis = Input.GetAxis("Horizontal");
	
	transform.position.x += haxis * 4.0 * Time.deltaTime;
	
	transform.rotation = Quaternion.AngleAxis(180.0 - haxis * 90.0, Vector3.up);
	
    if (Mathf.Abs(haxis) > 0.1) {
        animation.CrossFade("Walk", 0.2);
    } else {
        animation.CrossFade("Idle", 0.2);
    }
    
    if (Input.GetButtonDown("Fire1")) {
    	animation.CrossFade("Punch", 0.1);
    }
}
