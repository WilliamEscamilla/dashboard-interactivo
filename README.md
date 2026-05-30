# Actividad de Aprendizaje 3 - Dashboard interactivo básico

## Estructura de carpetas
src/
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── components/
│   ├── ActivityList.jsx
│   ├── Card.jsx
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── StatsPanel.jsx
│   ├── TaskForm.jsx
│   └── UserPanel.jsx
├── data/
│   └── data.js
└── hooks/
    └── useTasks.js

## useTasks.js (Custom Hook)

Creé este custom hook para centralizar y organizar toda la lógica del estado de las actividades. Maneja el estado de las tareas, los filtros de estado (Todos, Pendiente, Completada) y de urgencia (Todos, Alto, Medio, Bajo). También realiza el cálculo de las estadísticas de forma dinámica para el usuario activo y expone las funciones para agregar una nueva tarea y marcar tareas como completadas.

## Sidebar.jsx

Implementé una barra lateral de navegación con tres pestañas principales: Dashboard, Mis Tareas y Estadísticas. Cambiar de pestaña modifica un estado en `App.jsx`, lo que nos permite alternar la visibilidad de los paneles de estadísticas y la lista de tareas según lo que se decida visualizar.

## UserPanel.jsx

Este componente muestra los usuarios disponibles en el sistema (Gerardo Reyero, Mario Castañeda y Sr. Pelo). Al hacer clic en un usuario, se actualiza el estado del usuario activo en la aplicación, lo que filtra automáticamente las tareas y actualiza las estadísticas correspondientes a ese usuario.

## StatsPanel.jsx y Card.jsx

El panel de estadísticas recibe los datos calculados desde el hook `useTasks.js` y renderiza tres tarjetas reutilizables (`Card.jsx`): Total de Tareas, Tareas Pendientes y Tareas Completadas. Estas cambian dinámicamente según el usuario que esté activo y las tareas que tenga asignadas.

## ActivityList.jsx

Para la lista de actividades, utilicé un contenedor que renderiza las tareas filtradas del usuario activo. Añadí selectores para que se puedan filtrar las tareas tanto por su estado como por su nivel de urgencia. Cada elemento de la lista muestra el título, la urgencia (con color personalizado), la descripción, la fecha/hora y un botón para marcar la tarea como completada si aún está pendiente. También incluye el componente `TaskForm.jsx` dentro de su estructura.

## TaskForm.jsx

Este formulario maneja la creación de nuevas tareas a través de un estado interno. Cuenta con controles y validaciones, impidiendo que el usuario pueda agregar actividades con fechas y horas en el pasado, y asegurando que los campos obligatorios se llenen correctamente antes de enviar el formulario.

## data.js

En este archivo definí la lista de usuarios con sus respectivos roles e incluí las actividades iniciales asignadas a cada uno. Esto nos da datos de prueba desde el inicio de la aplicación.
