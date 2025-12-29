// draggableNode.js

import { NODE_ICONS } from '../utils/nodeIcons';

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    const Icon = NODE_ICONS[type];
  
    return (
      <div
        className={`bg-white cursor-grab flex justify-center items-center rounded-lg py-2 px-4 min-w-[80px] h-[50px] hover:bg-purple-50 hover:shadow-purple-500 hover:shadow-sm transition-all duration-300 gap-2 ${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
          {Icon && <Icon className="text-black" />}
          <span className="text-black">{label}</span>
      </div>
    );
  };
  