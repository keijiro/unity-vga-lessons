function OnCollisionEnter(info : Collision) {
	/*
	if (info.gameObject.name == "Golem" || info.gameObject.name == "Slime") {
		Debug.Log("ENEMY!!");
	} else if (info.gameObject.name == "Energy Capsule" || info.gameObject.name == "Coin") {
		Debug.Log("ITEM!!");
	}
	*/
	if (info.gameObject.tag == "Enemy") {
		Debug.Log("ENEMY!!");
	} else if (info.gameObject.tag == "Item") {
		Debug.Log("ITEM!!");
	}
}
