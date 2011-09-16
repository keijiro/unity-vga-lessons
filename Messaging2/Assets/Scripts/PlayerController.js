// プレイヤーの動きを制御するスクリプト。

var walkSpeed : float = 3.0;		// 歩く速度。
var jumpSpeed : float = 8.0;		// ジャンプの初速。
var gravity : float = 20.0;			// 重力加速度。

private var velocity : Vector3;		// 現在の速度。
private var prevGrounded : boolean;	// 「前フレームで接地していた。」

function Start() {
	// 歩きアニメーションを小走りにする。
	animation["Walk"].speed = 1.5;
}

function Update() {
    var controller : CharacterController = GetComponent(CharacterController);
    
	// 接地中限定の処理。
    if (controller.isGrounded) {
    	// キー入力から速度を決める。
        velocity = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
        velocity *= walkSpeed;
        
    	if (!prevGrounded) {
    		// 着地したばかりなので、しゃがみを再生する。
    		animation.Play("Crouch");
    	} else if (Input.GetButton ("Jump")) {
    		// ジャンプ開始処理。縦方向の初速を与えてジャンプを再生する。
            velocity.y = jumpSpeed;
            animation.Play("Jump");
        } else {
        	// 通常の歩行処理。旋回とアニメーションの切り替え。
    		if (velocity.magnitude > 0.33) {
    			RotateCharacter(controller.velocity);
            	animation.CrossFade("Walk");
    		} else {
            	animation.CrossFade("Idle");
		    }
        }
    }

	// 設置状態を次のフレームで参照するための保存しておく。
    prevGrounded = controller.isGrounded;

	// 重力による加速。
    velocity.y -= gravity * Time.deltaTime;
    
    // キャラクターコントローラーの移動。
    controller.Move(velocity * Time.deltaTime);
}

// directionの方角にキャラクターを回転させる関数。
// 指数関数補間を使っている。
private function RotateCharacter(direction : Vector3) {
	direction.y = 0.0;
	if (direction.magnitude < 0.1) return;
	var rotation = Quaternion.LookRotation(direction);
	var expCoeff = Mathf.Exp(-10.0 * Time.deltaTime);
	transform.localRotation = Quaternion.Slerp(rotation, transform.localRotation, expCoeff);
}
