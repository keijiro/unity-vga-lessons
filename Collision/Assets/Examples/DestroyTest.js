function OnCollisionEnter(info : Collision) {
	if (info.gameObject.tag == "Enemy") {
		Debug.Log("ENEMY!!");
		Destroy(info.gameObject);
	} else if (info.gameObject.tag == "Item") {
		Debug.Log("ITEM!!");
		Destroy(info.gameObject);
	}
}
