var marker : GameObject; // 交差点を表示するためのマーカーオブジェクト

function Update () {
    // 親をグルグル回す。
    transform.parent.rotation
      = Quaternion.AngleAxis(45.0 * Time.time, Vector3.up);
    // レイキャストのヒット情報を受け取るための変数。
    var hit : RaycastHit;
    // 親の根本から親の方向に向けてレイキャスト。
    if (Physics.Raycast(transform.parent.position,
                        transform.parent.forward, hit)) {
        // ヒットした：赤色にして、交差点にマーカーを置く。
        renderer.material.color = Color.red;
        marker.transform.position = hit.point;
        // ヒットした相手の名前を取得して表示。
        Debug.Log(hit.collider.gameObject.name);
    } else {
        // ヒットしなかった：白色にして、マーカーを原点に戻す。
        renderer.material.color = Color.white;
        marker.transform.position = Vector3.zero;
    }
}
