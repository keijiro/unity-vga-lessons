var walkSpeed : float = 3.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;

private var moveDirection : Vector3;
private var prevGrounded : boolean;
private var finished : boolean;

function Start() {
	animation["Punch"].wrapMode = WrapMode.Once;
	animation["Punch"].layer = 1;
}

function RotateCharacter(direction : Vector3) {
	direction.y = 0.0;
	if (direction.magnitude < 0.1) return;
	var rotation = Quaternion.LookRotation(direction);
	transform.localRotation =
      Quaternion.Slerp(rotation, transform.localRotation, Mathf.Exp(-10.0 * Time.deltaTime));
}

function OnTriggerEnter(other : Collider) {
	if (other.gameObject.tag == "Finish") {
		finished = true;
	}
}

function Update() {
    var controller : CharacterController = GetComponent(CharacterController);
    
    if (finished && controller.isGrounded) {
    	RotateCharacter(-Vector3.forward);
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
        } else {
		    var direction : Vector3 = moveDirection;
    		direction.y = 0.0;
    		if (direction.magnitude > 0.33) {
    			RotateCharacter(controller.velocity);
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
