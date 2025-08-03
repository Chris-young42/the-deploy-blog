# 选择官方 Node 镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 拷贝依赖文件并安装依赖
COPY package.json package-lock.json* ./
RUN npm install

# 拷贝项目文件
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 设置环境变量（可根据需要覆盖）
ENV PORT=3000

# 启动服务
CMD ["npm", "start"]
