var jumpForce : float;
var interval : float;

private var timer : float;

function Update () {
	timer += Time.deltaTime;
	if (timer > interval) {
		rigidbody.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
		timer = 0.0;
	}
}
