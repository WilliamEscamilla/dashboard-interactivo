# Actividad de Aprendizaje 3 - Dashboard interactivo básico

## Estructura de carpetas
src/
├── App.jsx
├── index.css
├── main.jsx
├── assets/
├── components/
│   ├── ActivityList/
│   │   ├── ActivityList.jsx
│   │   ├── ActivityListView.jsx
│   │   └── TaskItem.jsx
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── HeaderView.jsx
│   ├── Login/
│   │   ├── Login.jsx
│   │   └── LoginView.jsx
│   ├── Sidebar/
│   │   ├── Sidebar.jsx
│   │   └── SidebarView.jsx
│   ├── StatsPanel/
│   │   ├── StatsPanel.jsx
│   │   └── StatsPanelView.jsx
│   ├── SwitchUserModal/
│   │   ├── SwitchUserModal.jsx
│   │   └── SwitchUserModalView.jsx
│   ├── TaskForm/
│   │   ├── TaskForm.jsx
│   │   └── TaskFormView.jsx
│   ├── UserPanel/
│   │   ├── UserPanel.jsx
│   │   └── UserPanelView.jsx
│   ├── WelcomeModal/
│   │   ├── WelcomeModal.jsx
│   │   └── WelcomeModalView.jsx
│   └── ui/
│       ├── Badge.jsx
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Label.jsx
│       └── Select.jsx
├── context/
│   ├── AuthContext.jsx
│   └── AuthProvider.jsx
├── data/
│   └── data.js
└── hooks/
    └── useTasks.js

## useTasks.js (Custom Hook)

Este custom hook sirve para organizar toda la lógica del estado de las actividades. Maneja el estado de las tareas, los filtros de estado (Todos, Pendiente, Completada) y de urgencia (Todos, Alto, Medio, Bajo). También realiza el cálculo de las estadísticas de forma dinámica para el usuario activo y expone las funciones para agregar una nueva tarea y marcar tareas como completadas.

## Context API (AuthContext.jsx y AuthProvider.jsx)

Este contexto sirve para manejar el estado global de la sesión del usuario. Este sistema permite iniciar sesión, registrar nuevos usuarios simulados, cambiar entre cuentas activas solicitando una contraseña de validación, y manejar la visualización de modales de bienvenida y cambio de cuenta.

## Sidebar.jsx

Implementé una barra lateral de navegación con tres pestañas principales: Dashboard, Mis Tareas y Estadísticas. Cambiar de pestaña modifica un estado en `App.jsx`, lo que nos permite alternar la visibilidad de los paneles de estadísticas y la lista de tareas según lo que se decida visualizar.

## UserPanel.jsx y Autenticación (Login, Modals)

Este componente muestra los usuarios disponibles en el sistema. Al hacer clic en un usuario, se abre un modal (`SwitchUserModal`) que solicita la contraseña para confirmar el cambio de cuenta. Una vez validado, se actualiza el estado del usuario activo en la aplicación mediante el `AuthContext`, filtrando automáticamente las tareas y actualizando las estadísticas correspondientes a ese usuario, además de mostrar un mensaje de bienvenida (`WelcomeModal`). Si no hay sesión activa, se muestra la pantalla de `Login` que permite ingresar a una cuenta existente o crear una nueva.

## StatsPanel.jsx

El panel de estadísticas recibe los datos calculados desde el hook `useTasks.js` y renderiza tarjetas reutilizables: Total de Tareas, Tareas Pendientes y Tareas Completadas. Estas cambian dinámicamente según el usuario que esté activo y las tareas que tenga asignadas.

## ActivityList.jsx

Para la lista de actividades, utilicé un contenedor que renderiza las tareas filtradas del usuario activo. Añadí selectores para que se puedan filtrar las tareas tanto por su estado como por su nivel de urgencia. Cada elemento de la lista muestra el título, la urgencia (con color personalizado), la descripción, la fecha/hora y un botón para marcar la tarea como completada si aún está pendiente. También incluye el componente `TaskForm` dentro de su estructura.

## TaskForm.jsx

Este formulario maneja la creación de nuevas tareas a través de un estado interno. Cuenta con controles y validaciones, impidiendo que el usuario pueda agregar actividades con fechas y horas en el pasado, y asegurando que los campos obligatorios se llenen correctamente antes de enviar el formulario.

## Componentes UI (src/components/ui/)

Creé una carpeta con componentes de interfaz de usuario genéricos y reutilizables (`Badge`, `Button`, `Input`, `Label`, `Select`). Esto permite mantener un diseño consistente en toda la aplicación y facilita la creación de nuevos formularios y vistas.

## App.jsx y Header.jsx (Modo Oscuro)

Actualicé la estructura principal de la aplicación para incorporar la validación de sesión (`useAuth`) y envolver todo dentro del proveedor de contexto. Además, el `Header` incluye ahora un botón para alternar entre el modo claro y el modo oscuro, el cual cambia de manera dinámica la apariencia global de la interfaz de usuario.

## data.js

En este archivo definí la lista de usuarios con sus respectivos roles e incluí las actividades iniciales asignadas a cada uno. Esto nos da datos de prueba desde el inicio de la aplicación.