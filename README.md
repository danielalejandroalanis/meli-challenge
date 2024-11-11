# Challenge Mercado Libre

Este proyecto es una implementación del challenge técnico de Mercado Libre, que consiste en una aplicación de búsqueda de productos que replica la funcionalidad principal del sitio de Mercado Libre.

## 🚀 Estructura del Proyecto

El proyecto está dividido en dos partes principales:

```
├── client/ # Frontend en React
└── server/ # Backend en Node.js
```

## 🖥 Frontend

### Tecnologías Utilizadas

- React.js
- TypeScript
- SASS Modules
- React Router DOM
- Context API
- Jest & React Testing Library

## 🛠 Herramientas de Desarrollo

### Husky
El proyecto utiliza Husky para gestionar los git hooks, asegurando la calidad del código antes de cada commit:

- **Pre-commit**: Ejecuta lint-staged para verificar y formatear el código
- **Pre-push**: Ejecuta las pruebas para asegurar que todo funciona correctamente

Para que Husky funcione correctamente después de clonar el repositorio:

```bash
npm install
npm run prepare
```

### Características
- Búsqueda de productos en tiempo real
- Vista detallada de productos
- SEO optimizado

### Instalación y Ejecución

```bash
cd client
npm install
npm start
```

La aplicación estará disponible en `http://localhost:5173`

### Pruebas

```bash
npm test
```

## ⚙️ Backend

### Tecnologías Utilizadas
- Node.js
- Express
- TypeScript
- Jest
- API de Mercado Libre

### Endpoints

#### Búsqueda de productos
```http
GET /api/items?q=:query
```
#### Detalle de producto
```http
GET /api/items/:id
```

### Instalación y Ejecución
```bash
cd server
npm install
npm run dev
```

El servidor estará disponible en `http://localhost:8080`

### Variables de Entorno
Crear un archivo `.env` en la carpeta server:
```env
PORT=3333
```

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

## 🔄 Mejoras Futuras

### Frontend
- **Responsive Design**
  - Implementar un diseño completamente responsive siguiendo la metodología Mobile First
  - Agregar breakpoints personalizados para diferentes dispositivos
  - Optimizar imágenes para diferentes tamaños de pantalla

- **Arquitectura y Código**
  - Implementar Domain Driven Design (DDD) para mejor organización del código
  - Migrar a Test Driven Development (TDD) para mejor cobertura de tests
  - Implementar Storybook para documentación de componentes
  - Agregar Cypress para pruebas end-to-end

- **Performance**
  - Implementar lazy loading para imágenes
  - Optimizar bundle size con code splitting
  - Implementar service workers para modo offline
  - Mejorar métricas de Core Web Vitals

- **UX/UI**
  - Agregar modo oscuro
  - Implementar filtros avanzados de búsqueda
  - Añadir animaciones y transiciones
  - Mejorar la accesibilidad (WCAG 2.1)
  - Implementar internacionalización (i18n)

### Backend
- **Documentación**
  - Agregar ejemplos de uso para cada endpoint
  - Documentar tipos de errores y códigos de respuesta

- **Testing**
  - Aumentar cobertura de pruebas unitarias
  - Agregar pruebas de integración
  - Implementar tests de carga con k6 o JMeter
  - Agregar pruebas de seguridad

- **Arquitectura**
  - Implementar caché con Redis
  - Agregar rate limiting
  - Implementar sistema de logs estructurados
  - Mejorar manejo de errores

- **Seguridad**
  - Implementar autenticación y autorización
  - Agregar CORS configurado correctamente
  - Implementar helmet para headers de seguridad
  - Añadir sanitización de inputs
  - Implementar límites de tamaño en requests

## 👨‍💻 Autor
Daniel Alejandro Alanis
- GitHub: [@danielalejandroalanis](https://github.com/danielalejandroalanis)
- LinkedIn: [Daniel Alejandro Alanis](https://www.linkedin.com/in/danielalejandroalanis/)
````
