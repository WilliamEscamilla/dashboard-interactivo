# Actividad de Aprendizaje 3 - Dashboard interactivo básico

## Estructura decarpetas
src/
├── App.jsx
├── components/
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── Card.jsx
│   ├── UserPanel.jsx
│   ├── StatsPanel.jsx
│   └── ActivityList.jsx
└── data/
    └── data.js

## ActivityList.jsx

Para la lista de actividades, hice una lista reutilizable que recibe como parámetros el título y la lista del useState en App.jsx y del formulario de ActivityForm.jsx. La lista muestra el título de la actividad, la urgencia, el estado, la fecha, la hora y un color dependiendo de la urgencia.

## ActivityForm.jsx

El formulario recibe la función handleAddActivity de App.jsx y un useState para manejar los datos del formulario. Utilicé validaciones para que no se puedan añadir fechas en el pasado y para que los campos obligatorios no estén vacíos.

## data.js

En esta carpeta se encuentra la lista de actividades iniciales que se muestran en el dashboard. Las moví del App.jsx a esta carpeta para tener una mejor organización.