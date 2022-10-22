# 构建基础镜像
FROM node:16-alpine

RUN mkdir -p /usr/local/bin/app/

WORKDIR /usr/local/bin/app

# 当前路径下的页面复制到镜像中
COPY ./ ./

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]
