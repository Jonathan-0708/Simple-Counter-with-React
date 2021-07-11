import React from "react";
import PropTypes from "prop-types";
import "bootstrap";
const Secondcounter = props => {
	let [cero1, cero2, cero3, cero4, cero5, cero6] = props.tiempo;

	return (
		<>
			<div className="container-fluid fondo mb-3 text-center text-white ">
				<div className="row justify-content-center">
					<div className="col-1 pt-4 far fa-clock fondo1 m-2 "></div>
					<div className="p-2 fondo1 m-2 ">{`${cero1}`} </div>
					<div className="p-2 fondo1 m-2 ">{`${cero2}`} </div>
					<div className="p-2 fondo1 m-2 ">{`${cero3}`} </div>
					<div className="p-2 fondo1 m-2 ">{`${cero4}`} </div>
					<div className="p-2 fondo1 m-2 ">{`${cero5}`}</div>
					<div className="p-2 fondo1 m-2 ">{`${cero6}`} </div>
				</div>
			</div>
		</>
	);
};
Secondcounter.propTypes = { tiempo: PropTypes.array };
export default Secondcounter;
