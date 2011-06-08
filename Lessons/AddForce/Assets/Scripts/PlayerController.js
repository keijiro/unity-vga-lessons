// プレイヤー（？）の動きを制御するスクリプト。

var moveForce : float;	// 移動に使う力の強さ。
var jumpForce : float;	// ジャンプに使う力の強さ。

function Update() {
	// ジャンプボタンが押されたら、ジャンプの処理を行う。
	if (Input.GetButtonDown("Jump")) {
		// 上方向にimpulseを与えることでジャンプ。
		rigidbody.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
	}
}

function FixedUpdate() {
	// ジョイスティックの軸の傾き量から移動方向を決める。
	var move : Vector3 =
	  Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	// ベクトルの長さをmoveForceに補正する。
	move = move.normalized * moveForce;
	// 力を与えて移動する。
	rigidbody.AddForce(move, ForceMode.Force);
}
