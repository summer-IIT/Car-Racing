#pragma strict
private var rb : Rigidbody;
public var tumble : float;
function Start () {
	rb = GetComponent.<Rigidbody>();
	rb.angularVelocity = Random.insideUnitSphere * 5;
}

