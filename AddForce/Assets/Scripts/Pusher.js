/*
function Start() {
	yield WaitForSeconds(2.0);
	rigidbody.AddForce(Vector3.right * 20.0, ForceMode.Impulse);
}
*/

function Update() {
	rigidbody.AddForce(Vector3.right * 10.0, ForceMode.Acceleration);
}
