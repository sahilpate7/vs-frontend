// exampleNodes.js

import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';
import { useState } from 'react';
import { FieldClasses } from '../BaseNode';

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(data.transformType || 'Uppercase');

  return (
    <BaseNode
      id={id}
      data={data}
      label="Transform"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` }
      ]}
    >
      <label className={FieldClasses.label}>
        Type:
        <select value={transformType} onChange={(e) => setTransformType(e.target.value)} className={FieldClasses.select}>
          <option value="Uppercase">Uppercase</option>
          <option value="Lowercase">Lowercase</option>
        </select>
      </label>
    </BaseNode>
  );
};

export const FilterNode = ({ id, data }) => {
  const [filterText, setFilterText] = useState(data.filterText || '');

  return (
    <BaseNode
      id={id}
      data={data}
      label="Filter"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-passed` },
        { type: 'source', position: Position.Right, id: `${id}-failed`, style: { top: '75%' } }
      ]}
    >
      <label className={FieldClasses.label}>
        Contains:
        <input 
          type="text" 
          value={filterText} 
          onChange={(e) => setFilterText(e.target.value)} 
          className={FieldClasses.input}
        />
      </label>
    </BaseNode>
  );
};

export const JoinNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      label="Join"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-a`, style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: `${id}-b`, style: { top: '66%' } },
        { type: 'source', position: Position.Right, id: `${id}-result` }
      ]}
    >
      <div className={FieldClasses.label}>Joins inputs A and B</div>
    </BaseNode>
  );
};

export const LogNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      label="Logger"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-message` }
      ]}
    >
      <div className={FieldClasses.label}>
        <span>Check Console</span>
      </div>
    </BaseNode>
  );
};

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data.note || 'Type a note...');

  return (
    <BaseNode
      id={id}
      data={data}
      label="Note"
      style={{ backgroundColor: '#fff9c4', height: 'auto', minHeight: 80 }}
      handles={[]}
    >
      <textarea 
        value={note} 
        onChange={(e) => setNote(e.target.value)}
        className={FieldClasses.input}
        style={{ width: '100%', height: '100%', border: 'none', background: 'transparent' }} 
      />
    </BaseNode>
  );
};
