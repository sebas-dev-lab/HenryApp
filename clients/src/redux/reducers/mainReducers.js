/*==== Users Reducers ===== */
import adminReducers from "./adminReducers";
import instructorReducers from "./instructorReducers";
import studentReducers from "./studentReducers";
/*==== Auth Reducers ===== */
import authReducers from "./authReducers";
/*==== Cohort-group-pair ===== */
import cohortReducers from "./cohortReducers";
import groupReducers from "./groupReducers";
import pair_progReducers from "./pair-progReducers";
/* ==== Redux ==== */
import { combineReducers } from "redux";

const mainReducers = combineReducers({
  admin: adminReducers,
  student: studentReducers,
  instructor: instructorReducers,
  auth: authReducers,
  cohort: cohortReducers,
  group: groupReducers,
  pair_prog: pair_progReducers,
});

export default mainReducers;
