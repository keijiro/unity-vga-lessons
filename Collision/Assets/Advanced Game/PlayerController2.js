private var score : int;

function Update() {
	transform.position.x += Input.GetAxis("Horizontal") * Time.deltaTime * 10;
	transform.position.x = Mathf.Clamp(transform.position.x, -5.5, 5.5);
}

function OnCollisionEnter(info : Collision) {
	if (info.gameObject.tag == "Item") {
		score++;
	}
}

function OnGUI() {
	GUILayout.BeginArea(Rect(0, 0, Screen.width, Screen.height));
	GUILayout.Label("SCORE: " + score.ToString());
	GUILayout.EndArea();
}
