# 🚀 Guía de Configuración Paso a Paso

## ✅ Verificación Rápida

Después de la instalación, puedes verificar que todo funciona:

1. **API Externa**: La página de inicio debería mostrar posts de JSONPlaceholder
2. **Ruteo**: Navegar entre "Inicio" y "Dashboard" debería funcionar
3. **Supabase**: Configuración requerida para el ABM de tareas

## 📋 Configuración de Supabase

### Paso 1: Crear cuenta y proyecto
1. Ir a [https://supabase.com](https://supabase.com)
2. Crear una cuenta gratuita
3. Crear un nuevo proyecto
4. Esperar a que se complete la configuración (1-2 minutos)

### Paso 2: Obtener credenciales
1. En tu proyecto de Supabase, ir a **Settings** → **API**
2. Copiar:
   - **Project URL** (ejemplo: `https://abc123.supabase.co`)
   - **Project API keys** → **anon** key (clave pública)

### Paso 3: Configurar en la aplicación
1. Abrir `src/app/services/supabase.service.ts`
2. Reemplazar:
   ```typescript
   const supabaseUrl = 'TU_SUPABASE_URL';
   const supabaseKey = 'TU_SUPABASE_ANON_KEY';
   ```
   Con tus credenciales reales:
   ```typescript
   const supabaseUrl = 'https://abc123.supabase.co';
   const supabaseKey = 'tu-clave-anonima-aqui';
   ```

### Paso 4: Crear la tabla
1. En Supabase, ir a **SQL Editor**
2. Copiar y ejecutar el contenido de `database-setup.sql`
3. ¡Listo! El ABM de tareas ya debería funcionar

## 🎯 Funcionalidades por Probar

### 📄 Página Inicio (`/inicio`)
- ✅ **Navegación**: Cambiar entre páginas con la navbar
- ✅ **API Externa**: Ver posts cargados desde JSONPlaceholder
- ✅ **Responsive**: Probar en diferentes tamaños de pantalla
- ✅ **Componentes**: `PostCardComponent` mostrando datos con @Input

### 📊 Página Dashboard (`/dashboard`)
- ✅ **Formulario**: Crear nuevas tareas con validación
- ✅ **ABM Supabase**: Agregar, listar y eliminar tareas
- ✅ **Componente hijo**: `TaskItemComponent` con @Input/@Output
- ✅ **Estados**: Loading, error y datos cargados
- ✅ **Interactividad**: Marcar tareas como completadas

## 🔍 Verificación de Requisitos

### Angular Básico ✅
- [x] Dos componentes: `TaskItemComponent`, `PostCardComponent`
- [x] @Input() y @Output() implementados
- [x] *ngFor para listas de tareas y posts
- [x] *ngIf para estados de carga y errores
- [x] Formulario con validación (required, minlength)
- [x] Ruteo: `/inicio` y `/dashboard`

### Supabase ✅
- [x] Conexión configurada
- [x] Tabla `tasks` con estructura completa
- [x] Agregar registros (CREATE)
- [x] Listar registros (READ)
- [x] Eliminar registros (DELETE)
- [x] Actualizar registros (UPDATE - marcar completado)

### API Externa ✅
- [x] JSONPlaceholder configurado
- [x] Servicio Angular con HttpClient
- [x] Datos mostrados en cards/tabla

## 🎨 Características Extra Implementadas

- **Diseño responsive** con CSS Grid y Flexbox
- **Estados de UI** (loading, error, vacío)
- **Validaciones de formulario** con feedback visual
- **Navegación sticky** con estados activos
- **Estadísticas** de tareas (total, pendientes, completadas)
- **Confirmaciones** para acciones destructivas
- **Animaciones CSS** y efectos hover
- **Estructura modular** y componentes reutilizables

## 🛠️ Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start
# o
ng serve

# Compilar para producción
npm run build

# Generar nuevos componentes
ng generate component nombre-componente

# Ejecutar tests
npm test
```

## 🐛 Solución de Problemas

### La página de inicio no carga posts
- **Causa**: Problema de conectividad a internet
- **Solución**: Verificar conexión, JSONPlaceholder es un servicio público

### El dashboard no guarda tareas
- **Causa**: Credenciales de Supabase no configuradas
- **Solución**: Seguir los pasos de configuración arriba

### Error de compilación
- **Causa**: Dependencias faltantes
- **Solución**: Ejecutar `npm install`

### Problemas de estilo
- **Causa**: CSS no se está aplicando
- **Solución**: Verificar que `ng serve` esté ejecutándose

---

¡Tu aplicación Angular + Supabase + API está lista! 🎉
