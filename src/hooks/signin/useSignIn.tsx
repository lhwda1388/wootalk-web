import { useCallback } from 'react'
import { signin } from '../../api/signin'
import { useHistory } from 'react-router-dom'

function useSiginin(): Array<any> {
  const history = useHistory()
  const signInSubmit = useCallback(async (data) => {
    const { email, pwd } = data
    const result = await signin(email, pwd)
    if (result.data.code === 200) history.push('/')
  }, [])

  return [signInSubmit]
}

export default useSiginin
