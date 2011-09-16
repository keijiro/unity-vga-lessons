// ボールを生成するスクリプト。

var damageBallPrefab : GameObject;	// ダメージボール。
var lifeBallPrefab : GameObject;	// 回復ボール。

function Start() {
	while (true) {
		// 1秒間ウェイトを置く。
		yield WaitForSeconds(1.0);
		
		// どちらのボールを生成するか、ランダムに決める（30%の確率で回復ボール）。
		var prefab : GameObject = Random.value < 0.3 ? lifeBallPrefab : damageBallPrefab;
		
		// 生成位置を決める（半径5.5の円周上）。
		var theta : float = Random.Range(0.0, Mathf.PI);
		var position : Vector3 = Vector3(Mathf.Cos(theta), 0.2, Mathf.Sin(theta)) * 5.5;
		
		// ボールを生成する。
		Instantiate(prefab, position, Quaternion.identity);
	}
}
