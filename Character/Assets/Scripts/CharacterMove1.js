var walkSpeed : float = 3.0;

private var moveDirection : Vector3;

function Update() {
    var controller : CharacterController = GetComponent(CharacterController);

	moveDirection = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	moveDirection *= walkSpeed;
	
	if (moveDirection.magnitude > 0.1) {
		transform.LookAt(transform.position + moveDirection);
		animation.CrossFade("Walk");
	} else {
		animation.CrossFade("Idle");
	}

    controller.Move(moveDirection * Time.deltaTime);
}
