import React from 'react';
import Card from './Card';

const StatsPanel = React.memo(({ stats }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-6">
      <Card
        title="Total de Tareas"
        value={stats.total}
        color="border-blue-600"
      />
      <Card
        title="Tareas Pendientes"
        value={stats.pendiente}
        color="border-yellow-600"
      />
      <Card
        title="Tareas Completadas"
        value={stats.completada}
        color="border-green-600"
      />
    </section>
  );
});

export default StatsPanel;
