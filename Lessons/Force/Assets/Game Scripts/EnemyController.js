var moveForce : float;
var jumpForce : float;
var jumpInterval : float;

private var target : GameObject;
private var jumpTimer : float;

function Start () {
	target = GameObject.FindWithTag("Player");
}

function Update () {
	if (transform.position.y < -10.0) {
		Destroy(gameObject);
		return;
	}
	
	var move : Vector3 = target.transform.position - transform.position;
	move.y = 0.0;
	move = move.normalized * moveForce;
	
	rigidbody.AddForce(move, ForceMode.Force);
	
	jumpTimer += Time.deltaTime;
	if (jumpTimer > jumpInterval) {
		rigidbody.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
		jumpTimer = 0.0;
	}
}
