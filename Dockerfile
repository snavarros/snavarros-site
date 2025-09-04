# Stage: Build
FROM node:24-alpine AS builder

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Generar build de producción
RUN npm run build

# Stage final: contenedor ligero que solo sirve la build
FROM alpine:latest
WORKDIR /app

# Copiar la carpeta de build desde el stage anterior
COPY --from=builder /app/dist ./dist

# Instalar un servidor ligero para servir los archivos estáticos
RUN apk add --no-cache nodejs npm
RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "dist", "-l", "5000"]
