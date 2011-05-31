var enemyPrefab : GameObject;
var interval : float;

private var timer : float;

function Start () {
	Instantiate(enemyPrefab, transform.position, transform.rotation);
}

function Update () {
	timer += Time.deltaTime;
	if (timer > interval) {
		Instantiate(enemyPrefab, transform.position, transform.rotation);
		timer = 0.0;
	}
}
