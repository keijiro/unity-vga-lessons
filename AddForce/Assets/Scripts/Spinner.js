// 一定速度で回転するオブジェクトを制御するスクリプト。

var angularVelocity : float; // 回転速度。

function FixedUpdate() {
	// 経過時間から回転量を求める。
	var angle : float = angularVelocity * Time.time;
	// 回転量に対応した量のY軸回転を与える。
	rigidbody.MoveRotation(Quaternion.AngleAxis(angle, Vector3.up));
}
