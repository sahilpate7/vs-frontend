import { BsFillSendFill } from "react-icons/bs";
import { useStore } from '../utils/store';
import { shallow } from 'zustand/shallow';
import Modal from 'react-modal';
import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

Modal.setAppElement('#root');

export const SubmitButton = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [piplelineData, setPiplelineData] = useState(null);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '300px',
            maxWidth: '80%',
            padding: '0px'
        },
    };
    const { nodes, edges } = useStore(
        (state) => ({
          nodes: state.nodes,
          edges: state.edges,
        }),
        shallow
      );

    const handleSubmit = async () => {
        setPiplelineData(null);
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log(data);
                setPiplelineData(data);
                openModal();
            } else {
                alert('Failed to parse pipeline');
            }
        } catch (error) {
            alert('Error submitting pipeline');
        }
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <button 
                type="submit" 
                className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded cursor-pointer text-sm hover:bg-purple-600 transition-colors"
                onClick={handleSubmit}
            >
                <BsFillSendFill color="white"/>
                Submit
            </button>   
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div className="bg-purple-500 p-4 py-6 rounded text-white">
                    <h2 className="text-xl font-bold mb-2">Success</h2>
                    <p className="text-sm">Number of edges: {piplelineData?.num_edges}</p>
                    <p className="text-sm">Number of nodes: {piplelineData?.num_nodes}</p>   
                    <p className="text-sm">Is DAG: {piplelineData?.is_dag ? 'Yes' : 'No'}</p>
                    <button type="button" className="absolute top-2 right-2 cursor-pointer" onClick={closeModal}><IoCloseOutline size={20} />  </button>
                </div>
            </Modal>
        </>
    );
}
