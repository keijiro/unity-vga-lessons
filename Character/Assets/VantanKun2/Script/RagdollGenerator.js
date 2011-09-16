#pragma strict

// 既存のキャラクターをラグドールで置換するためのスクリプト。

var ragdollPrefab : GameObject; // ラグドールのプレハブ。

// ラグドールの生成。
function Generate(originalRoot : Transform, velocity : Vector3) {
	var ragdoll = Instantiate(ragdollPrefab) as GameObject;
	CopyTransformRecursively(originalRoot, ragdoll.transform, velocity);
}

// トランスフォームを再帰的にコピーする。
// ついでに初速の設定も行う。
private function CopyTransformRecursively(src : Transform, dst : Transform, velocity : Vector3) {
	dst.localPosition = src.localPosition;
	dst.localRotation = src.localRotation;
	if (dst.rigidbody) dst.rigidbody.velocity = velocity;
	for (var child in src) {
		var srcChild = child as Transform;
		var dstChild = dst.Find(srcChild.name);
		if (dstChild) CopyTransformRecursively(srcChild, dstChild, velocity);
	}
}
