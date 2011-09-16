function OnTriggerStay(other : Collider) {
	var dx : float = other.transform.position.x - transform.position.x;
	var force : Vector3 = Vector3(dx * 0.9, 20.0, 0.0);
	other.rigidbody.AddForce(force * Time.deltaTime, ForceMode.Impulse);
}
