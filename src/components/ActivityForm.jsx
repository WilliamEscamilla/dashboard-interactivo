import { useState } from 'react';

function ActivityForm({ onAddActivity }) {

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
      ...formData,
      status: 'Pendiente'
    };
    onAddActivity(newActivity);
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
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #b649ffc5', borderRadius: '5px' }}>
      <h2>Añadir nueva actividad</h2>

      {error && <p style={{ color: '#ff4d4d', marginBottom: '10px', fontWeight: 'bold' }}>{error}</p>}

      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block' }}>Título:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required style={{ width: '80%', padding: '5px', boxSizing: 'border-box', border: '1px solid #b649ffc5' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block' }}>Descripción:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required style={{ width: '80%', padding: '5px', boxSizing: 'border-box', border: '1px solid #b649ffc5' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block' }}>Urgencia:</label>
        <select name="urgency" value={formData.urgency} onChange={handleChange} style={{ width: '80%', padding: '5px', boxSizing: 'border-box', border: '1px solid #b649ffc5' }}>
          <option value="Alto">Alto</option>
          <option value="Medio">Medio</option>
          <option value="Bajo">Bajo</option>
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block' }}>Fecha:</label>
        <input type="date" name="date" min={todayStr} value={formData.date} onChange={handleChange} required style={{ width: '80%', padding: '5px', boxSizing: 'border-box', border: '1px solid #b649ffc5' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block' }}>Hora:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required style={{ width: '80%', padding: '5px', boxSizing: 'border-box', border: '1px solid #b649ffc5' }} />
      </div>
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#8e4ca4ff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
        Añadir
      </button>
    </form>
  );
}

export default ActivityForm;
