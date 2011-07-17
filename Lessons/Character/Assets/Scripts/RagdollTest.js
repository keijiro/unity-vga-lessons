private var isRagdoll : boolean;

function SwitchRagdoll(transform : Transform, enabled : boolean) {
	if (transform.rigidbody) {
		transform.rigidbody.isKinematic = !enabled;
	}
	for (var child in transform) {
		SwitchRagdoll(child as Transform, enabled);
	}
}

function PushRagdoll(transform : Transform, direction : Vector3) {
	if (transform.rigidbody) {
		transform.rigidbody.AddForce(direction * 5.0, ForceMode.Impulse);
	}
	for (var child in transform) {
		PushRagdoll(child as Transform, direction);
	}
}

function Start() {
	SwitchRagdoll(transform, isRagdoll);
}

function Update() {
	if (Input.GetButtonDown("Jump")) {
		isRagdoll = !isRagdoll;
		SwitchRagdoll(transform, isRagdoll);
		animation.enabled = !isRagdoll;
		if (isRagdoll) PushRagdoll(transform, Random.onUnitSphere);
	}
}
