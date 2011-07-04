var ballPrefab : GameObject;

function OnTriggerEnter(other : Collider) {
	Destroy(other.gameObject);
	Instantiate(ballPrefab);
}
