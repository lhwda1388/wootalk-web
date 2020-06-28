FROM nginx

# root 에 webapp 폴더를 생성
RUN mkdir /webapp

# workdir 고정
WORKDIR /webapp

# host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
COPY ./build ./

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

# 80 포트 오픈
EXPOSE 80

# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]