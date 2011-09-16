function Update() {
	transform.position.x += Input.GetAxis("Horizontal") * Time.deltaTime * 10;
}
