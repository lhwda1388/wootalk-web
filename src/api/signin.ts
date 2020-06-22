import http from './http'

/**
 * 로그인
 * @param email 이메일
 * @param pwd 패스워드
 */
export const signin = (email: string, pwd: string) => {
  return http.post('/auth/signin', {
    email: email,
    pwd: pwd,
  })
}
