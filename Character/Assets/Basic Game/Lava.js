private var originalColor : Color;

function Start() {
	originalColor = renderer.material.color;
}

function Update() {
	var level = Mathf.Sin(Time.time * 2.2) * 0.2;
	renderer.material.color = originalColor + Color(level, 0, 0);
}
