var freq : float;

function Update () {
	var y : float = Mathf.Abs(Mathf.Sin(Time.time * freq));
	transform.position.y = y * 3.0;
	transform.localScale.y = 0.5 + y;
	
	var angle : float = Mathf.Sin(Time.time * freq * 3.0) * 5.0;
	transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);
}
