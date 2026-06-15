import Button from '../ui/Button';
import Input from '../ui/Input';
import Label from '../ui/Label';
import Select from '../ui/Select';

const URGENCY_OPTIONS = [
  { value: 'Alto', label: 'Alto' },
  { value: 'Medio', label: 'Medio' },
  { value: 'Bajo', label: 'Bajo' },
];

const TaskFormView = ({ form, isOpen, onToggle, onInputChange, onUrgencyChange, onSubmit, minDate, minTime }) => (
  <div className="mb-6">
    <Button
      label={isOpen ? 'Cancelar' : 'Agregar Tarea'}
      onClick={onToggle}
      variant={isOpen ? 'danger' : 'primary'}
    />

    {isOpen && (
      <form onSubmit={onSubmit} className="border-2 border-gray-300 dark:border-gray-600 p-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="md:col-span-2 flex flex-col gap-1">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              name="title"
              type="text"
              value={form.title}
              onChange={onInputChange}
              placeholder="Nombre de la tarea"
              required
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-1">
            <Label htmlFor="description">Descripción</Label>
            <Input
              id="description"
              name="description"
              type="text"
              value={form.description}
              onChange={onInputChange}
              placeholder="Descripción (opcional)"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="urgency">Urgencia</Label>
            <Select
              value={form.urgency}
              onChange={onUrgencyChange}
              options={URGENCY_OPTIONS}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="date">Fecha</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={form.date}
              onChange={onInputChange}
              required
              min={minDate}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="time">Hora</Label>
            <Input
              id="time"
              name="time"
              type="time"
              value={form.time}
              onChange={onInputChange}
              required
              min={minTime}
            />
          </div>

        </div>

        <div className="mt-4">
          <Button label="Agregar" type="submit" variant="primary" />
        </div>
      </form>
    )}
  </div>
);

export default TaskFormView;