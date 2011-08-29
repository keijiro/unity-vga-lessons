var frontWheels : WheelCollider[];
var rearWheels : WheelCollider[];

var torqueLow : float = 800.0;
var torqueHigh : float = 100.0;
var rpmLow : float = 200.0;
var rpmHigh : float = 700.0;
var steerAngle : float = 10.0;

function Start() {
	rigidbody.centerOfMass = Vector3(0, -0.5, 0.3);
}

function Update() {
	var handle : float = Mathf.Clamp(-5.0 * Input.acceleration.y, -1.0, 1.0);
	var torque = torqueLow + (torqueHigh - torqueLow) * (frontWheels[0].rpm - rpmLow) / (rpmHigh - rpmLow);
	for (var wheel in frontWheels) {
		wheel.motorTorque = Input.GetButton("Fire1") ? torque : 0.0;
		wheel.steerAngle = handle * steerAngle;
	}
}
