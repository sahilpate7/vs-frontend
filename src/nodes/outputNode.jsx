// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { FieldClasses } from '../components/BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Output"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-value` }
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
        <select value={outputType} onChange={handleTypeChange} className={FieldClasses.select}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
}
