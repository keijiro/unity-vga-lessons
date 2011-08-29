function Update() {
	var green : float = Mathf.Sin(Time.time * 12.0);
	renderer.material.color = Color(0, green, 0, 0);
}
