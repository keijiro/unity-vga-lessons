var playerPrefab : GameObject;

function OnTriggerEnter(other : Collider) {
	if (other.gameObject.tag == "Player") {
		Destroy(other.gameObject);
		yield WaitForSeconds(0.8);
		Instantiate(playerPrefab);
	}
}
