var frontWheels : WheelCollider[];
var rearWheels : WheelCollider[];

var torqueLow : float = 800.0;
var torqueHigh : float = 100.0;
var torqueBrake : float = 1000.0;
var rpmLow : float = 200.0;
var rpmHigh : float = 700.0;
var steerAngle : float = 10.0;

function Start() {
	rigidbody.centerOfMass = Vector3(0, -0.5, 0.3);
}

function Update() {
	var rpm = 0.5 * (frontWheels[0].rpm + frontWheels[1].rpm);

	var vertical = Input.GetAxis("Vertical");
	var motor = 0.0;
	var brake = 0.0;
	
	if (vertical < 0.0) {
		if (rpm > 0.0) {
			brake = torqueBrake;
		} else {
			motor = torqueHigh * vertical;
		}
	} else {
		rpm = Mathf.Clamp(rpm, rpmLow, rpmHigh);
		motor = torqueLow + (torqueHigh - torqueLow) * (rpm - rpmLow) / (rpmHigh - rpmLow);
		motor *= vertical;
	}
	
	for (var wheel in frontWheels) {
		wheel.motorTorque = motor;
		wheel.brakeTorque = brake;
		wheel.steerAngle = Input.GetAxis("Horizontal") * steerAngle;
	}
}
