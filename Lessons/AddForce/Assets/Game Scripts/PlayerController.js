var moveForce : float;
var jumpForce : float;

function FixedUpdate() {
	var move : Vector3 =
	  Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	move = move.normalized * moveForce;
	rigidbody.AddForce(move, ForceMode.Force);
	
	if (Input.GetButtonDown("Jump")) {
		rigidbody.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
	}
}
