// textNode.js

import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode';
import { FieldClasses } from '../BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [dimensions, setDimensions] = useState({ height: 'auto' });
  const [handleList, setHandleList] = useState([]);
  const textareaRef = useRef(null);
  const hiddenDivRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const implementHandle = () => {
    const variableName = currText.match(/{{(.*?)}}/);
    if(variableName){
      setHandleList([
        { type: 'source', position: Position.Right, id: `${id}-output` },
        { type: 'target', position: Position.Left, id: `${id}-input` }
      ])
    } else {
      setHandleList([
        { type: 'source', position: Position.Right, id: `${id}-output` },
      ])
    }
  }

  useEffect(() => {
    if (hiddenDivRef.current) {
      const { offsetHeight } = hiddenDivRef.current;
      setDimensions({
        height: offsetHeight
      });
    }
    implementHandle();
  }, [currText]);

  return (
    <BaseNode
      id={id}
      data={data}
      label="Text"
      handles={handleList}
    >
      <label className={FieldClasses.label} style={{ display: 'flex', flexDirection: 'column' }}>
        Text:
        <textarea 
          ref={textareaRef}
          value={currText} 
          onChange={handleTextChange} 
          className={`${FieldClasses.input} nodrag nowheel`}
          style={{ 
            height: dimensions.height === 'auto' ? 'auto' : `${dimensions.height}px`,
            overflow: 'hidden', 
            resize: 'none',
            minHeight: '22px',
            maxHeight: '200px',
          }}
        />
        <div 
          ref={hiddenDivRef}
          className={FieldClasses.input}
          style={{
             position: 'absolute',
             visibility: 'hidden',
             whiteSpace: 'pre-wrap',
             wordWrap: 'break-word',
             width: '100%',
             height: 'auto',
             top: 0,
             left: 0,
             minHeight: '22px',
             pointerEvents: 'none'
          }}
        >
          {currText} 
        </div>
      </label>
    </BaseNode>
  );
}
