function Update () {
	Physics.gravity = 
		Quaternion.AngleAxis(Input.GetAxis("Horizontal") * 90.0, Vector3.forward) *
		Quaternion.AngleAxis(Input.GetAxis("Vertical") * -90.0, Vector3.right) *
		(Vector3.up * -20.0);
}