import React, {useState} from "react";
//Semaforo hecho con React no uso la funcion cambiar estado, ni hago programacion declarativa, es mas, esto es lo mas imperativo que puede haber 

//create your first component
const Home = () => {

	const [activo, setActivo] = useState("opacity-25");
	
	const colorRojo = "rojo btn btn-danger ";
	const colorAmbar = "ambar btn btn-warning ";
	const colorVerde = "verde btn btn-success ";
	const colorLight =[colorRojo, colorAmbar, colorVerde];
	const changeColor = (e) =>{
		let valor = e.target.className;
		console.log(valor);
		if (valor === "rojo btn btn-danger opacity-25"){
			e.target.className="rojo btn btn-danger opacity-100";
		}else if (valor === "rojo btn btn-danger opacity-100"){
			e.target.className="rojo btn btn-danger opacity-25";
		}else if (valor === "ambar btn btn-warning opacity-25"){
			e.target.className="ambar btn btn-warning opacity-100"
		}else if (valor === "ambar btn btn-warning opacity-100"){
			e.target.className="ambar btn btn-warning opacity-25"
		}else if (valor === "verde btn btn-success opacity-25"){
			e.target.className="verde btn btn-success opacity-100"
		}else if (valor === "verde btn btn-success opacity-100"){
			e.target.className="verde btn btn-success opacity-25"
		}
	}

	return (
		<div className="semaforo ">
			<div className= { colorLight[0] + activo} onClick={changeColor}>9</div>
			<div className= { colorLight[1] + activo} onClick={changeColor}>9</div>
			<div className= { colorLight[2] + activo} onClick={changeColor}>9</div>
		</div>
	);
};







export default Home;
