// ダメージボールを制御するスクリプト。

function Start() {
	// 登場から1秒間ウェイトを置く。
	yield WaitForSeconds(1.0);
	
	// プレイヤーへの方向ベクトルを求める。
	var player : GameObject = GameObject.FindWithTag("Player");
	var direction : Vector3 = (player.transform.position - transform.position).normalized;
	
	// プレイヤー方向へ一瞬で加速する。
	rigidbody.AddForce(direction * 8.0, ForceMode.VelocityChange);
	
	// 3秒間留まる。
	yield WaitForSeconds(3.0);
	
	// 時間切れで死亡。
	Destroy(gameObject);
}

// コリジョン処理。
function OnCollisionEnter(collision : Collision) {
	// 衝突相手がプレイヤーであるかどうか？
	if (collision.gameObject.tag == "Player") {
		Debug.Log("DAMAGE!!");
		collision.gameObject.BroadcastMessage("ApplyDamage", 5.0);
	}
}
