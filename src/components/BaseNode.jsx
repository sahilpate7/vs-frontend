// BaseNode.jsx

import { Handle } from 'reactflow';

export const BaseNode = ({ id, data, handles = [], style = {}, children, label }) => {
  return (
    <div style={{...style}} className='w-[200px] shadow-sm  shadow-purple-400 rounded-sm p-2 bg-white'>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={handle.id || `${id}-${handle.type}-${index}`}
          style={{backgroundColor: 'purple', ...handle.style}}
        />
      ))}
      <div className="custom-node__header bg-purple-100 p-1 text-center text-xs">
        <span>{label}</span>
      </div>
      <div className="custom-node__body flex flex-col gap-3 my-2">
        {children}
      </div>
    </div>
  );
};

export const FieldClasses = {
  input : "border border-purple-400 rounded-sm py-0.5 px-2 text-xs mt-1 font-normal w-full",
  select : "border border-purple-400 rounded-sm py-0.5 px-2 text-xs w-full mt-1 font-normal",
  label : "text-xs font-bold",
}