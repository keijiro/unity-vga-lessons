var cubePrefab : GameObject;

private var timer : float;

function Update () {
	timer += Time.deltaTime;
	if (timer > 0.2) {
		Instantiate(cubePrefab,
		            transform.position + Vector3.right * Random.Range(-6.0, 6.0),
		            transform.rotation);
		timer = 0;
	}
}
