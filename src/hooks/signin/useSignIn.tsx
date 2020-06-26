import { useCallback } from 'react'
import { signin } from '../../api/signin'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../store/modules/auth'

/**
 * 로그인처리 커스텀 훅
 */
function useSiginin(): Array<any> {
  const history = useHistory()
  const dispatch = useDispatch()
  const signInSubmit = useCallback(async (data) => {
    const { email, pwd } = data
    const result = await signin(email, pwd)
    if (result.data.code === 200) {
      dispatch(loginSuccess())
      history.push('/')
    }
  }, [])

  return [signInSubmit]
}

export default useSiginin
