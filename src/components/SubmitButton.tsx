import { ReactNode } from 'react'
import { useFormStatus } from 'react-dom';


const SubmitButton = ({children}: {children: ReactNode}) => {
  const { pending, data, method, action } = useFormStatus();

  return (
    <>
      <button 
        disabled={pending}
        className={(pending ? 'bg-gray-400' : 'bg-blue-600') + " mt-2 text-white px-6 py-2 rounded"}>
          {pending ? (
            <span>Saving...</span>
          ): (
            <span>{children}</span>
          )}
      </button>
    </>
  )
}

export default SubmitButton