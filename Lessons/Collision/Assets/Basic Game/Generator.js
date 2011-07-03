var cubePrefab : GameObject;
var interval : float;

private var timer : float;

function Update () {
	timer += Time.deltaTime;
	if (timer > interval) {
		Instantiate(cubePrefab,
		            transform.position + Vector3.right * Random.Range(-5.5, 5.5),
		            Random.rotation);
		timer = 0;
	}
}
