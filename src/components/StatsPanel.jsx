import React from 'react';
import Card from './Card';

const StatsPanel = React.memo(({ stats }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-6">
      <Card
        title="Total de Tareas"
        value={stats.total}
        icon="📋"
        color="border-blue-500"
      />
      <Card
        title="Tareas Pendientes"
        value={stats.pendiente}
        icon="⏳"
        color="border-yellow-500"
      />
      <Card
        title="Tareas Completadas"
        value={stats.completada}
        icon="✅"
        color="border-green-500"
      />
    </section>
  );
});

export default StatsPanel;
