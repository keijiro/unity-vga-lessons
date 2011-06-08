// 一定間隔でジャンプする動きのスクリプト。

var jumpForce : float;	// ジャンプの力の強さ。
var interval : float;	// ジャンプする間隔。

private var timer : float;	// ジャンプする間隔を計測する変数。

function FixedUpdate () {
	// 一定間隔でジャンプの処理を行う。
	timer += Time.deltaTime;
	if (timer > interval) {
		// 上方向にimpulseを与えることでジャンプ。
		rigidbody.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
		// タイマー変数のリセット。
		timer = 0.0;
	}
}
