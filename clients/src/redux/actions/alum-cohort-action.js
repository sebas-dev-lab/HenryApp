import * as actionTypes from "./actionTypes";


export const alumnCohortGLobal = (alumns) => (dispatch) => {
    
      dispatch({
        type: actionTypes.ALUMN_COHORT_GLOBAL,
        payload: alumns
      })
    }