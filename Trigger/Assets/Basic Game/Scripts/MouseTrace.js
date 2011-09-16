function Update () {
	var screenPoint = Input.mousePosition;
	screenPoint.z = -camera.main.transform.position.z;
	var worldPoint = camera.main.ScreenToWorldPoint(screenPoint);
	transform.position = worldPoint;
}
