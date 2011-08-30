// プレイヤーのステータスを管理するスクリプト。

// 現在のライフ。
private var life : float = 100.0;

function OnGUI() {
	// ラベルを使ってライフ値を表示する。
	GUILayout.Label("LIFE: " + life.ToString("F0"));
}

function ApplyDamage(amount : float) {
	life -= amount;
}

function RegainLife(amount : float) {
	life += amount;
}
