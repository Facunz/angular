# 📌 Angular + Supabase + API - Proyecto Ejemplo

Esta aplicación demuestra el uso completo de Angular con Supabase y APIs externas, cumpliendo todos los requisitos especificados en la consigna.

## 🚀 Características Implementadas

### ✅ Angular Básico
- **Dos componentes principales**: `TaskItemComponent` y `PostCardComponent`
- **@Input() y @Output()**: Comunicación entre componentes padre e hijo
- **Binding de datos**: Muestra datos con `*ngFor` y condicionales con `*ngIf`
- **Formulario con validación**: Validación básica para crear tareas
- **Ruteo**: Implementación de rutas `/inicio` y `/dashboard`

### ✅ Supabase (ABM Completo)
- **Conexión**: Servicio Angular conectado a Supabase
- **Tabla `tasks`**: Estructura completa para gestión de tareas
- **Operaciones CRUD**:
  - ➕ **Agregar**: Crear nuevas tareas con título y descripción
  - 📋 **Listar**: Mostrar todas las tareas ordenadas por fecha
  - ❌ **Eliminar**: Borrar tareas con confirmación
  - ✏️ **Actualizar**: Marcar tareas como completadas/pendientes

### ✅ API Externa
- **JSONPlaceholder**: Consumo de `https://jsonplaceholder.typicode.com/posts`
- **HttpClient**: Servicio Angular para peticiones HTTP
- **Visualización**: Posts mostrados en tarjetas responsivas
- **Manejo de errores**: Estados de carga y error implementados

## 🛠️ Instalación y Configuración

### 1. Instalar dependencias
```bash
cd angular-supabase-app
npm install
```

### 2. Configurar Supabase

#### A. Crear cuenta y proyecto
1. Ir a [Supabase](https://supabase.com) y crear una cuenta
2. Crear un nuevo proyecto
3. Ir a Settings > API para obtener las credenciales

#### B. Crear la tabla
Ejecutar este SQL en el SQL Editor de Supabase:

```sql
CREATE TABLE tasks (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Crear política para permitir todas las operaciones
CREATE POLICY "Enable all operations for tasks" ON tasks
FOR ALL USING (true) WITH CHECK (true);
```

#### C. Configurar credenciales
Actualizar el archivo `src/app/services/supabase.service.ts`:

```typescript
const supabaseUrl = 'TU_SUPABASE_URL_AQUI';
const supabaseKey = 'TU_SUPABASE_ANON_KEY_AQUI';
```

### 3. Ejecutar la aplicación
```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## 📁 Estructura del Proyecto

```
src/app/
├── components/
│   ├── task-item/          # Componente hijo con @Input/@Output
│   └── post-card/          # Componente para mostrar posts
├── pages/
│   ├── inicio/             # Página principal con API externa
│   └── dashboard/          # Página de gestión de tareas
├── services/
│   ├── supabase.service.ts # Servicio para operaciones CRUD
│   └── api.service.ts      # Servicio para API externa
├── app.routes.ts           # Configuración de rutas
├── app.config.ts           # Configuración de la aplicación
└── app.ts                  # Componente principal
```

## 🎯 Funcionalidades por Página

### 🏠 Página Inicio (`/inicio`)
- **Hero section**: Presentación del proyecto
- **Características**: Resumen de funcionalidades implementadas
- **Posts API**: Lista de posts desde JSONPlaceholder
- **Navegación**: Enlace al Dashboard

### 📊 Página Dashboard (`/dashboard`)
- **Formulario**: Crear nuevas tareas con validación
- **Lista de tareas**: ABM completo con Supabase
- **Estadísticas**: Contadores de tareas totales, pendientes y completadas
- **Componente hijo**: `TaskItemComponent` con eventos @Output

## 🔧 Tecnologías Utilizadas

- **Angular 18+** (Zoneless, SSR/SSG)
- **Supabase** (Base de datos PostgreSQL)
- **JSONPlaceholder** (API externa para posts)
- **TypeScript**
- **CSS3** (Flexbox, Grid, Responsive)
- **RxJS** (Observables para HTTP)

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🎨 Características de UI/UX

- **Diseño moderno**: Gradientes y sombras CSS
- **Navegación intuitiva**: Navbar sticky con estados activos
- **Feedback visual**: Estados de hover, loading y error
- **Componentes reutilizables**: Cards, botones y formularios
- **Animaciones**: Transiciones suaves

## ⚠️ Notas Importantes

1. **Configuración Supabase**: Sin las credenciales correctas, solo funcionará la parte de la API externa
2. **Políticas RLS**: Las políticas están configuradas para permitir todas las operaciones (solo para desarrollo)
3. **API Externa**: JSONPlaceholder funciona sin configuración adicional
4. **Validaciones**: Implementadas tanto en frontend como en Supabase

## 📸 Capturas de Pantalla

### Ruteo entre páginas
- Navegación fluida entre `/inicio` y `/dashboard`
- Estados activos en la navbar

### ABM con Supabase
- Formulario de creación con validaciones
- Lista de tareas con opciones de completar/eliminar
- Estadísticas en tiempo real

### API Externa
- Posts cargados desde JSONPlaceholder
- Diseño de cards responsive
- Estados de carga y error

## 🤝 Contribución

Este es un proyecto educativo que demuestra:
- Conceptos fundamentales de Angular
- Integración con bases de datos (Supabase)
- Consumo de APIs REST
- Mejores prácticas de desarrollo frontend

---

**Desarrollado como ejemplo educativo de Angular + Supabase + API Externa** 🚀
