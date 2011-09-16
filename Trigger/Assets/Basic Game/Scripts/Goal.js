private var cleared : boolean;

function OnTriggerStay(other : Collider) {
	cleared = true;
	Destroy(other.gameObject);
}

function OnGUI() {
	if (cleared) {
		GUI.Label(Rect(0, 0, 100, 100), "CLEARED!!");
	}
}
