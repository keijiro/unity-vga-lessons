var skin : GUISkin;
var bulletPrefab : GameObject;

private var count : int;
private var degree : float;
private var power : float;

function Update () {
	transform.rotation = Quaternion.AngleAxis(degree - 80.0, Vector3.forward);
}

function OnGUI() {
	GUI.skin = skin;
	
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	var title : String = "第" + (count + 1).ToString() + "射";
	GUILayout.BeginArea(Rect(0, 0, sw / 3, sh / 2), title, "window");
	GUILayout.BeginVertical();
	GUILayout.FlexibleSpace();
	
	GUILayout.Label("角度");
	degree = GUILayout.HorizontalSlider(degree, 0, 70);
	
	GUILayout.Label("パワー");
	power = GUILayout.HorizontalSlider(power, 4, 25);
	
	if (GUILayout.Button("Fire!")) {
		var pos : Vector3 = transform.position;
		var dir : Vector3 = transform.up;
		var bullet : GameObject = Instantiate(bulletPrefab,
		                                      pos + dir * 2.0,
		                                      Quaternion.identity);
		bullet.rigidbody.velocity = dir * power;
		count++;
	}
	
	GUILayout.FlexibleSpace();
	GUILayout.EndVertical();
	GUILayout.EndArea();
}
