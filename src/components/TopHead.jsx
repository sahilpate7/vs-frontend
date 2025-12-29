import {SubmitButton} from './submit';

const TopHead = () => {
  return (
    <div className='flex justify-between items-center bg-gray-50 py-1 px-1'>
         <h2 className='text-lg font-bold m-0 text-purple-500 pl-4'>Workflow</h2>
         <SubmitButton />
    </div>
  )
}

export default TopHead