function OnCollisionEnter(info : Collision) {
//	Debug.Log("OnCollisionEnter");

//	Debug.Log(info.gameObject.name);

//	Debug.Log(info.transform.position);

//	info.rigidbody.AddForce(Vector3.up * 2.0, ForceMode.Impulse);

//	Debug.Log(info.relativeVelocity);

	for (var contact : ContactPoint in info.contacts) {
		Debug.Log(contact.point);
	}
}

function OnCollisionExit(info : Collision) {
	Debug.Log("OnCollisionExit");
}
