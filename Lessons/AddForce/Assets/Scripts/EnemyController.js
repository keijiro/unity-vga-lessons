// 敵キャラ（？）の動きを制御するスクリプト。

var moveForce : float;		// 移動に使う力の強さ。
var jumpForce : float;		// ジャンプに使う力の強さ。
var jumpInterval : float;	// ジャンプの間隔（秒）。

private var target : GameObject;	// 移動目標のゲームオブジェクトへの参照。
private var jumpTimer : float;		// ジャンプの間隔を計るためのタイマー。

function Start () {
	// 移動目標をプレイヤー（Playerタグの付いたゲームオブジェクト）に設定する。
	target = GameObject.FindWithTag("Player");
}

function FixedUpdate () {
	// 移動目標との座標の差分によって、移動方向を決める。
	var move : Vector3 = target.transform.position - transform.position;
	// 縦方向の差分は無視する。
	move.y = 0.0;
	// ベクトルの長さをmoveForceに補正する。
	move = move.normalized * moveForce;
	// 自分自身のrigidbodyに力を与えて移動する。
	rigidbody.AddForce(move, ForceMode.Force);
}

function Update () {
	// -10よりも下に落下した場合に自滅する。
	if (transform.position.y < -10.0) {
		Destroy(gameObject);
		return;
	}
	// 一定間隔でジャンプする。
	jumpTimer += Time.deltaTime;
	if (jumpTimer > jumpInterval) {
		// 上方向にimpluseを与えることでジャンプ。
		rigidbody.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
		// タイマーをリセットする。
		jumpTimer = 0.0;
	}
}
