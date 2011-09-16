
function OnCollisionEnter(info : Collision) {
	if (info.gameObject.tag == "Floor") {
		Destroy(gameObject);
	} else if (info.gameObject.tag == "Player") {
		Destroy(info.gameObject);
	}
}
