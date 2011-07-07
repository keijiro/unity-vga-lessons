function Start() {
	while (true) {
		animation.Play("Idle");
		yield WaitForSeconds(2.0);
		animation.Play("Greet");
		yield WaitForSeconds(2.0);
		animation.Play("Punch");
		yield WaitForSeconds(0.7);
	}
}
