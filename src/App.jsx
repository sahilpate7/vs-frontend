import { PipelineToolbar } from './components/toolbar';
import { PipelineUI } from './components/ui';
import { SubmitButton } from './components/submit';
import TopHead from './components/TopHead';

function App() {
  return (
    <div className='m-2 border border-gray-400 rounded-lg overflow-hidden relative'>
      <TopHead />
      <PipelineToolbar />
      <PipelineUI />
    </div>
  );
}

export default App;
