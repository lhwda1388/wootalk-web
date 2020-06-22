import React, { useCallback } from 'react'
import { AxiosResponse } from 'axios'
import { signin } from '../../api/signin'

function useSiginin() {
  const signInSubmit = useCallback((data) => {
    const { email, pwd } = data
    signin(email, pwd).then((res: AxiosResponse) => {})
  }, [])

  return [signInSubmit]
}

export default useSiginin
