// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { FieldClasses } from '../components/BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Input"
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` }
      ]}
    >
      <label className={FieldClasses.label}>
        Name:
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange} 
          className={FieldClasses.input}
        />
      </label>
      <label className={FieldClasses.label}>
        Type:
        <select value={inputType} onChange={handleTypeChange} className={FieldClasses.select}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
}
