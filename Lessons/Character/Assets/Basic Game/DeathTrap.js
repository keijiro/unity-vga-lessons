var playerPrefab : GameObject;

function OnTriggerEnter(other : Collider) {
	if (other.gameObject.tag == "Player") {
		GetComponent(RagdollGenerator).Generate(other.transform, Vector3.up * 5.0);
		Destroy(other.gameObject);

		yield WaitForSeconds(0.8);

		Instantiate(playerPrefab);
	}
}
