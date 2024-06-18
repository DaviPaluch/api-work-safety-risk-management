FROM node

# Defina o diretório de trabalho
WORKDIR /usr/app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código para o contêiner
COPY . .

# Copie o arquivo .env para o contêiner
COPY .env .env

# Gere os arquivos do Prisma
RUN npx prisma generate

# Adicione o comando para aplicar as migrações
RUN npx prisma migrate dev

# Exponha a porta
EXPOSE 3000


# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]

