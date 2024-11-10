# Challenge Mercado Libre

Este proyecto es una implementación del challenge técnico de Mercado Libre, que consiste en una aplicación de búsqueda de productos que replica la funcionalidad principal del sitio de Mercado Libre.

## 🚀 Estructura del Proyecto

El proyecto está dividido en dos partes principales:

/
├── client/ # Frontend en React
└── server/ # Backend en Node.js

## 🖥 Frontend

### Tecnologías Utilizadas

- React.js
- TypeScript
- SASS Modules
- React Router DOM
- Context API
- Jest & React Testing Library

### Características
- Búsqueda de productos en tiempo real
- Vista detallada de productos
- SEO optimizado

### Instalación y Ejecución

````bash
cd client
npm install
npm start

La aplicación estará disponible en `http://localhost:5173`

### Pruebas

```bash
npm test
## ⚙️ Backend

### Tecnologías Utilizadas
- Node.js
- Express
- TypeScript
- Jest
- API de Mercado Libre

### Endpoints

#### Búsqueda de productos
GET /api/items?q=:query

#### Detalle de producto
GET /api/items/:id

### Instalación y Ejecución
```bash
cd server
npm install
npm run dev

El servidor estará disponible en `http://localhost:8080`

### Variables de Entorno
Crear un archivo `.env` en la carpeta server:
>PORT=4000

## 🔍 Funcionalidades Principales

1. **Buscador de Productos**
   - Campo de búsqueda con autocompletado
   - Resultados paginados
   - Filtros por categoría

2. **Vista de Resultados**
   - Listado de productos con información relevante
   - Breadcrumbs de categorías
   - Paginación

3. **Detalle de Producto**
   - Información detallada del producto
   - Imágenes
   - Descripción
   - Precio y disponibilidad


## 👨‍💻 Autor

[Tu Nombre]
- GitHub: [@tuUsuario](https://github.com/tuUsuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tuPerfil)
````
