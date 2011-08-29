function Update() {
	var red : float = Mathf.Sin(Time.time * 100.0);
	renderer.material.color = Color(red, 0, 0, 0);
}
