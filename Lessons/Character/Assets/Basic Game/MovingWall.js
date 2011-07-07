private var origin : Vector3;

function Start() {
	origin = transform.position;
}

function Update() {
	transform.position = origin + Vector3.up * Mathf.Sin(Time.time * 2.1) * 2.0;
}
