export const initialUsers = [
  { id: 1, name: 'Gerardo Reyero', role: 'Actor', email: 'gerardo@correo.com', password: '123456' },
  { id: 2, name: 'Mario Castañeda', role: 'Director', email: 'mario@correo.com', password: '123456' },
  { id: 3, name: 'Sr. Pelo', role: 'Animador', email: 'sr.pelo@correo.com', password: '123456' },
];

export const initialActivities = [
  {
    id: 1,
    userId: 1,
    title: 'Grabar Dragon Ball Z',
    description: 'Grabar la película de Dragon Ball Z: La resurrección de Freezer.',
    urgency: 'Alto',
    status: 'Pendiente',
    date: '2026-06-15',
    time: '09:30'
  },
  {
    id: 2,
    userId: 2,
    title: 'Dirigir Chainsaw Man',
    description: 'Dirigir la película de Chainsaw Man.',
    urgency: 'Medio',
    status: 'Pendiente',
    date: '2026-06-02',
    time: '14:30'
  },
  {
    id: 3,
    userId: 3,
    title: 'Animación 1 minuto.',
    description: 'Animar 1 minuto del video de los youtubers de anécdotas animadas.',
    urgency: 'Bajo',
    status: 'Completada',
    date: '2026-05-30',
    time: '07:00'
  },
  {
    id: 4,
    userId: 1,
    title: 'Grabar La casa de los dibujos',
    description: 'Grabar a Capitanazo de La casa de los dibujos .',
    urgency: 'Bajo',
    status: 'Pendiente',
    date: '2026-06-15',
    time: '12:30'
  },
];
