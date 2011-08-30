// ダメージを受けた際の演出を制御するスクリプト。

private var originalColor : Color;	// マテリアルの元来の色。
private var effectFlag : boolean;	// 演出フラグ。

function Start() {
	// マテリアルの元来の色を保存しておく。
	originalColor = renderer.material.color;
}

// アニメーション結果に対して加算したいので、
// UpdateではなくLateUpdateを使う。
function LateUpdate() {
	if (effectFlag) {
		// マテリアルを赤点滅させる。
		renderer.material.color = Color.red * Mathf.Abs(Mathf.Sin(40.0 * Time.time));
		// 位置をランダムに揺らす。
		transform.localPosition += Random.onUnitSphere * 0.1;
	}
}

// ダメージメッセージの処理。
function ApplyDamage(amount : float) {
	// 演出をオン。
	effectFlag = true;
	// 0.33秒間、演出を続ける。
	yield WaitForSeconds(0.33);
	// 演出をオフにして、マテリアルの色を元に戻す。
	effectFlag = false;
	renderer.material.color = originalColor;
}
