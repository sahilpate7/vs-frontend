// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className='bg-gray-100 py-4 px-5 shadow-lg rounded-bl-lg rounded-br-lg'>
           
            <div className='flex flex-wrap gap-5'>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='transform' label='Transform' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='join' label='Join' />
                <DraggableNode type='log' label='Log' />
                <DraggableNode type='note' label='Note' />
            </div>
        </div>
    );
};
