function Update () {
	if (rigidbody.IsSleeping()) {
		renderer.material.color = Color.red;
	} else {
		renderer.material.color = Color.white;
	}
}