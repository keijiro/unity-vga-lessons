var walkSpeed : float = 3.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;

private var moveDirection : Vector3;
private var prevGrounded : boolean;
private var isFinish : boolean;

function OnTriggerEnter(other : Collider) {
	if (other.gameObject.tag == "Finish") {
		isFinish = true;
	}
}

function Start() {
	animation["Punch"].wrapMode = WrapMode.Once;
	animation["Punch"].layer = 1;
}

function Update() {
    var controller : CharacterController = GetComponent(CharacterController);
    
    if (isFinish && controller.isGrounded) {
    	transform.rotation = Quaternion.AngleAxis(180, Vector3.up);
    	animation.Play("Greet");
    	return;
    }

    if (controller.isGrounded) {
        moveDirection =
          Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
        moveDirection *= walkSpeed;
        
    	if (!prevGrounded) {
    		animation.Play("Crouch");
    	} else if (Input.GetButton ("Jump")) {
            moveDirection.y = jumpSpeed;
            animation.Play("Jump");
        } else if (Input.GetButton("Fire1")) {
        	animation.CrossFade("Punch", 0.1);
        } else {
		    var direction : Vector3 = moveDirection;
    		direction.y = 0.0;
    		if (direction.magnitude > 0.33) {
	    		transform.LookAt(transform.position + direction);
            	animation.CrossFade("Walk");
    		} else {
            	animation.CrossFade("Idle");
		    }
        }
    }

    prevGrounded = controller.isGrounded;

    moveDirection.y -= gravity * Time.deltaTime;
    
    controller.Move(moveDirection * Time.deltaTime);
}
