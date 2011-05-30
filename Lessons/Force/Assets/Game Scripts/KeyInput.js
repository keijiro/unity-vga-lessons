function Update() {
    transform.rotation =
      Quaternion.AngleAxis(Input.GetAxis("Horizontal") * -45.0, Vector3.forward) *
      Quaternion.AngleAxis(Input.GetAxis("Vertical") * 45.0, Vector3.right);
	var scale : float = Input.GetButton("Jump") ? 3.0 : 1.0;
	transform.localScale = Vector3(scale, scale, scale);
}
