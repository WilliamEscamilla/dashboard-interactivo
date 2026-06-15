import { useState } from 'react';
import TaskFormView from './TaskFormView';

const INITIAL_STATE = { title: '', description: '', urgency: 'Medio', date: '', time: '' };

const TaskForm = ({ onAddTask }) => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [isOpen, setIsOpen] = useState(false);

  const getMinDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const getMinTime = () => {
    const today = new Date();
    const hh = String(today.getHours()).padStart(2, '0');
    const mm = String(today.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUrgencyChange = (value) => {
    setForm((prev) => ({ ...prev, urgency: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    const selectedDateTime = new Date(`${form.date}T${form.time}`);
    const now = new Date();
    if (selectedDateTime < now) {
      alert('No se puede seleccionar una fecha y hora pasada.');
      return;
    }

    onAddTask(form);
    setForm(INITIAL_STATE);
    setIsOpen(false);
  };

  const minDate = getMinDate();
  const minTime = form.date === minDate ? getMinTime() : undefined;

  return (
    <TaskFormView
      form={form}
      isOpen={isOpen}
      onToggle={() => setIsOpen((prev) => !prev)}
      onInputChange={handleInputChange}
      onUrgencyChange={handleUrgencyChange}
      onSubmit={handleSubmit}
      minDate={minDate}
      minTime={minTime}
    />
  );
};

export default TaskForm;