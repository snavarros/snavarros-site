# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Build de producción
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Copiar archivos de build al Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración custom de Nginx para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Dar permisos de lectura
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

