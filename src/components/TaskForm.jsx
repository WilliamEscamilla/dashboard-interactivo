import { useState } from 'react';

function TaskForm({ onAddTask }) {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    urgency: 'Medio',
    date: '',
    time: ''
  });
  const [error, setError] = useState('');

  const todayStr = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Toma la fecha de hoy y valida que no sea pasada
    const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
    const now = new Date();

    if (selectedDateTime < now) {
      setError('La fecha y hora de la actividad no pueden estar en el pasado.');
      return;
    }

    const newActivity = {
      ...formData
    };
    onAddTask(newActivity);
    setFormData({
      title: '',
      description: '',
      urgency: 'Medio',
      date: '',
      time: ''
    });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-6 border border-purple-200 dark:border-purple-800/30 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 m-0">Añadir nueva actividad</h3>

      {error && <p className="text-red-500 mb-4 font-bold text-sm">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Título:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full p-2 border border-purple-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
        </div>
        
        <div className="mb-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Descripción:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required className="w-full p-2 border border-purple-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" rows="2" />
        </div>
        
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Urgencia:</label>
          <select name="urgency" value={formData.urgency} onChange={handleChange} className="w-full p-2 border border-purple-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
            <option value="Alto">Alto</option>
            <option value="Medio">Medio</option>
            <option value="Bajo">Bajo</option>
          </select>
        </div>
        
        <div className="mb-2"></div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Fecha:</label>
          <input type="date" name="date" min={todayStr} value={formData.date} onChange={handleChange} required className="w-full p-2 border border-purple-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Hora:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full p-2 border border-purple-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
        </div>
      </div>
      
      <button type="submit" className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white border-none rounded-md cursor-pointer transition-colors font-medium">
        Añadir Tarea
      </button>
    </form>
  );
}

export default TaskForm;
