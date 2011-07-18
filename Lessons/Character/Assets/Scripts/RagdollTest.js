function Update() {
	if (Input.GetButtonDown("Jump")) {
		GetComponent("RagdollGenerator").Generate(transform, Vector3(0, 0, -2));
		Destroy(gameObject);
	}
}
