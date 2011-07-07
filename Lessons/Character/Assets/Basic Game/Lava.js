function OnTriggerEnter(other : Collider) {
	if (other.gameObject.tag == "Player") {
		Destroy(other.gameObject);
	}
}
