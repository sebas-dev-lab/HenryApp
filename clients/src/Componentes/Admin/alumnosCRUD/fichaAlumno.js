import React, { useEffect } from "react";
import { useState } from "react";
import s from "../../../styles/fichaAlumno.module.css";
import { Typography, Breadcrumbs, TextField, Button } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { useSelector, useDispatch } from "react-redux";
import fotoPerfil from "../../utils/fotoPerfil.jpg";

import { Link } from "react-router-dom";

import Footer from "../../Footer";
import { getAllCohort } from "../../../redux/actions/cohortActions";
import { getAllGroups } from "../../../redux/actions/groupActions";
import { getStudent } from "../../../redux/actions/studentActions";

const Perfil = ({ userData, toggle }) => {
	const dispatch = useDispatch();

	const cohorts = useSelector((store) => store.cohort.allCohort);
	const groups = useSelector((store) => store.group.allGroups);
	const user = useSelector((store) => store.student.student);
  console.log('user******', user);
	
	const [edit, setEdit] = useState(false);
	const [data, setData] = useState({
		name: "",
		lastName: "",
		dni: null,
		city: "",
		googleId: "",
		githubId: "",
	});

	const Editar = () => {
		setEdit(!edit);
	};

	const update = () => {
		// dispatch(editUserData(user.code, data));
		Editar();
	};

	const handlerChange = (e) => {
		e.preventDefault();
		setData({ ...data, [e.target.name]: e.target.value });
	};

	useEffect(() => {
    dispatch(getAllCohort());
		dispatch(getAllGroups());
		dispatch(getStudent(userData.code));
	}, []);

	return (
		<div>
			<div>
				<Breadcrumbs aria-label="breadcrumb" className={s.miga}>
					<Link color="inherit" onClick={toggle}>
						Cerrar
					</Link>
				</Breadcrumbs>
			</div>
			{user && (
				<div className={s.cont_print}>
					<div className={s.todo}>
						<div className={s.cont_info}>
							<div className={s.info}>
								<div className={s.perfil}>
									<div className={s.img}>
										<img src={fotoPerfil} alt="" />
									</div>
									<div className={s.nombre}>
										<h1>{user.name}</h1>
									</div>
								</div>
								<div className={s.form}>
									<h1>Datos Personales</h1>
									<div>
										<TextField
											disabled
											id="standard-disabled"
											label="Nombre"
											defaultValue={user.name}
											style={{ margin: 8, width: "90%" }}
											fullWidth
											margin="normal"
											InputLabelProps={{
												shrink: true,
											}}
										/>
										<TextField
											disabled
											id="standard-disabled"
											label="Apellido"
											defaultValue={user.lastName}
											style={{ margin: 8, width: "90%" }}
											fullWidth
											margin="normal"
											InputLabelProps={{
												shrink: true,
											}}
										/>
										<TextField
											disabled
											id="standard-disabled"
											label="DNI"
											defaultValue={user.dni}
											style={{ margin: 8, width: "90%" }}
											fullWidth
											margin="normal"
											InputLabelProps={{
												shrink: true,
											}}
										/>
										<TextField
											disabled
											id="standard-disabled"
											label="Ciudad"
											style={{ margin: 8, width: "90%" }}
											fullWidth
											margin="normal"
											InputLabelProps={{
												shrink: true,
											}}
										/>
									</div>
								</div>
							</div>
							<div className={s.info2}>
								<div className={s.form}>
									<>
										<h1>Cuentas Asociadas</h1>
										<div>
											<TextField
												disabled
												id="standard-disabled"
												label="Cuenta Google"
												defaultValue={user.email}
												style={{ margin: 8, width: "90%" }}
												fullWidth
												margin="normal"
												InputLabelProps={{
													shrink: true,
												}}
											/>
											<TextField
												disabled
												id="standard-disabled"
												label="Cuenta GitHub"
												style={{ margin: 8, width: "90%" }}
												fullWidth
												margin="normal"
												InputLabelProps={{
													shrink: true,
												}}
											/>
										</div>
									</>
								</div>
								<div className={s.form}>
									<h1>Henry</h1>
									<div className={s.infoHenry}>
										<label>Cohorte</label>
										<Typography>
											Cohorte: {user.cohorte && user.cohorte.name}
											<Breadcrumbs aria-label="breadcrumb">
												<Link color="inherit" onClick={toggle}>
													{user.cohorte && user.cohorte.name}
												</Link>
											</Breadcrumbs>
											<Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"                    
                        >
                        <MenuItem value="todos">
                          <em>...</em>
                        </MenuItem>
                        {cohorts.length !== 0 ? (
                          cohorts.map((c) => {
                            return <MenuItem value={c}>{c.name}</MenuItem>;
                          })
                        ) : (
                          <p>no hay cohortes cargados</p>
                        )}
                      </Select>
										</Typography>					

										<label>Grupo</label>
										<Typography>Tus compañeros de PP esta semana son:</Typography>

										<label>Nombre PM´s</label>
										<Typography>Tus PM´s en esta etapa seran:</Typography>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Perfil;
