private var originalColor : Color;

function Start() {
	originalColor = renderer.material.color;
}

function OnTriggerEnter(other : Collider) {
	if (other.gameObject.tag == "Player") {
		Destroy(other.gameObject);
	}
}

function Update() {
	var level = Mathf.Sin(Time.time * 2.2) * 0.2;
	renderer.material.color = originalColor + Color(level, 0, 0);
}
