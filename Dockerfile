# Usa una imagen base de Node.js
FROM node:18

# Configura el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de paquetes y sus bloqueos
COPY package*.json ./

# Instalar herramientas de compilación
RUN apt-get update && \
    apt-get install -y make g++ python3

# Instalar dependencias de Node.js
RUN npm install

RUN npm install -g sqlite3

# Reconstruir sqlite3 específicamente
RUN npm rebuild sqlite3

# Si necesitas limpiar las herramientas de compilación después de instalar las dependencias, puedes hacerlo así:
# RUN apt-get remove -y make g++ python3 && apt-get autoremove -y

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Construye la aplicación si es necesario
RUN npm run build

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]
