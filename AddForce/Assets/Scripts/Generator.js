// 敵キャラを生成するスクリプト。

var enemyPrefab : GameObject;	// 敵キャラのプレハブ。
var interval : float;			// 敵キャラを生成する間隔。

private var timer : float;		// 敵キャラの生成間隔を計測する変数。

function Start () {
	// とりあえず、開始時にひとつだけ敵キャラを生成する。
	Instantiate(enemyPrefab, transform.position, transform.rotation);
}

function Update () {
	// 一定間隔で敵キャラの生成を行う。
	timer += Time.deltaTime;
	if (timer > interval) {
		Instantiate(enemyPrefab, transform.position, transform.rotation);
		timer = 0.0;
	}
}
