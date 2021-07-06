import React from "react";
import PropTypes from "prop-types";
import "bootstrap";
const Secondcounter = props => {
	let [cero1, cero2, cero3, cero4, cero5, cero6] = props.tiempo;

	return (
		<>
			<div className="bg-dark text-center container-fluid text-white bg-dark  mb-3">
				<div className="row">
					<div className="col">
						<div className="far fa-clock p-2 ">
							{" "}
							{`  ${cero1} - ${cero2} - ${cero3} - ${cero4} - ${cero5} - ${cero6}`}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
Secondcounter.propTypes = { tiempo: PropTypes.array };
export default Secondcounter;
