var angularVelocity : float;

function FixedUpdate() {
	rigidbody.MoveRotation(transform.rotation *
						   Quaternion.AngleAxis(angularVelocity * Time.fixedDeltaTime, Vector3.up));
}
