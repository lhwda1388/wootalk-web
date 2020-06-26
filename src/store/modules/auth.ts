import { createAction, handleActions } from 'redux-actions'

const state = {
  isLogged: false,
}

export const actionsTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
}

export const loginSuccess = createAction(actionsTypes.LOGIN_SUCCESS)

const reducer = handleActions(
  {
    [actionsTypes.LOGIN_SUCCESS]: (state, action) => {
      return {
        ...state,
        isLogged: true,
      }
    },
  },
  state
)

export default reducer
