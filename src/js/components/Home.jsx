import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [rojo, setRojo] = useState("secondary")
	const [amarillo, setAmarillo] = useState("secondary")
	const [verde, setVerde] = useState("secondary")

	function prenderRojo() {
		setRojo("danger")
		setAmarillo("secondary")
		setVerde("secondary")
	}

	function prenderAmarillo() {
		setAmarillo("warning")
		setRojo("secondary")
		setVerde("secondary")
	}
	function prenderVerde() {
		setVerde("success")
		setRojo("secondary")
		setAmarillo("secondary")
	}

	return (
		<div className="text-center">


			<h1 className="text-center mt-5">Semaforo</h1>
			<div className="d-flex justify-content-center">
				<div className="bg-dark p-2" style={{ width: "120px" }}>
					<div className={`bg-${rojo} rounded-circle mb-2`} onClick={prenderRojo} style={{ width: "100px", height: "100px" }}></div>
					<div className={`bg-${amarillo} rounded-circle mb-2`} onClick={prenderAmarillo} style={{ width: "100px", height: "100px" }}></div>
					<div className={`bg-${verde} rounded-circle mb-2`} onClick={prenderVerde} style={{ width: "100px", height: "100px" }}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;