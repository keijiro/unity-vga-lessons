var walkSpeed : float = 3.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;

private var moveDirection : Vector3;

function Update() {
    var controller : CharacterController = GetComponent(CharacterController);

	if (Input.GetButtonDown("Fire1")) {
		GetComponent("RagdollGenerator").Generate(transform, controller.velocity);
		Destroy(gameObject);
	}

    if (controller.isGrounded) {
        moveDirection = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
        moveDirection *= walkSpeed;
        
		if (Input.GetButtonDown("Jump")) {
            moveDirection.y = jumpSpeed;
            animation.Play("Jump");
        } else {
			if (moveDirection.magnitude > 0.1) {
				transform.LookAt(transform.position + moveDirection);
				animation.CrossFade("Walk");
			} else {
				animation.CrossFade("Idle");
			}
        }
    }

    moveDirection.y -= gravity * Time.deltaTime;

    controller.Move(moveDirection * Time.deltaTime);
}
