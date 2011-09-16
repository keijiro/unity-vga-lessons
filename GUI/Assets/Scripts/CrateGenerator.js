var cratePrefab : GameObject;

function Start () {
	var ox : float = transform.position.x;
	for (var x : int = 0; x < 3; ++x) {
		for (var y : int = 1; y < 8; ++y) {
			Instantiate(cratePrefab,
			            Vector3(ox + x, y, 0),
			            Quaternion.identity);
		}
	}
}
