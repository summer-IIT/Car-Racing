﻿#pragma strict
private var rb: Rigidbody;
public var speed: float;
function Start () {
	rb=GetComponent.<Rigidbody>();
	rb.velocity=transform.forward*speed;
}
function OnTriggerEnter(other:Collider){
	if(other.tag=="Boundary"){
		Destroy(gameObject);
	}
}
