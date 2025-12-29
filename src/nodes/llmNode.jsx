// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { FieldClasses } from '../components/BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      label="LLM"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: `${100/3}%` } },
        { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: `${200/3}%` } },
        { type: 'source', position: Position.Right, id: `${id}-response` }
      ]}
    >
      <div>
        <span className={FieldClasses.label}>This is a LLM.</span>
      </div>
    </BaseNode>
  );
}