import React from 'react';

const ActivityList = ({ listTitle, activities }) => {

    // Determina el color del borde según la urgencia
    const getBorderColor = (urgency) => {
        switch (urgency.toLowerCase()) {
            case 'bajo':
                return 'border-2 border-green-500';
            case 'medio':
                return 'border-2 border-yellow-500';
            case 'alto':
                return 'border-2 border-red-500';
            default:
                return 'border-2 border-gray-500';
        }
    };

    return (
        <div>
            <h2>{listTitle}</h2>
            <ul>
                {activities.map((activity, index) => (
                    <li key={index} className={`${getBorderColor(activity.urgency)} p-4 rounded-lg mb-2`}>
                        <h4 className="text-white text-xl font-bold">{activity.title}</h4>
                        <p>Estado: {activity.status}</p>
                        <p>Fecha límite: {activity.date} a las {activity.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityList;