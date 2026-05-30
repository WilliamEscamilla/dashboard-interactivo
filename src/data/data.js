export const users = [
  { id: 1, name: 'Ana García',   avatar: '👩‍💻', role: 'Desarrolladora' },
  { id: 2, name: 'Luis Pérez',   avatar: '👨‍🎨', role: 'Diseñador'      },
  { id: 3, name: 'Sara Ruiz',    avatar: '👩‍🔬', role: 'QA Engineer'    },
];

export const initialActivities = [
  {
    id: 1,
    userId: 1,
    title: 'Sacar la basura',
    urgency: 'Alto',
    status: 'Pendiente',
    date: '2026-06-15',
    time: '09:30'
  },
  {
    id: 2,
    userId: 1,
    title: 'Lavar la ropa',
    urgency: 'Medio',
    status: 'Pendiente',
    date: '2026-06-02',
    time: '14:30'
  },
  {
    id: 3,
    userId: 2,
    title: 'Hacer la cama',
    urgency: 'Bajo',
    status: 'Completada',
    date: '2026-05-30',
    time: '07:00'
  }
];
