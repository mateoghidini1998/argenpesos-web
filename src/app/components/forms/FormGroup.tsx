'use client'
import { useEffect, useState } from "react";
type FormGroupProps = {
    label?: string;
    inputType?: 'input' | 'textarea' | 'select' | 'file';
    inputProps?: React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    selectOptions?: Array<{ value: string; label: string }>;
    error?: string; // Add error prop to handle the error message
  }
  
  export default function FormGroup({ label, inputType = 'input', inputProps, selectOptions = [], error }: FormGroupProps) {
    const [hasError, setHasError] = useState(false);
  
    useEffect(() => {
      setHasError(error !== undefined);
    }, [error]);
    
    return (
      <div className={`form-group flex flex-col h-full gap-2.5 ${inputProps?.className || ''}`}>
        {label && <label className="text-xs text-[#393E4F]" htmlFor={inputProps?.id}>{label}</label>}
        {inputType === 'input' && (
          <input 
            type="text" 
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-lightblue-primary"
            {...(inputProps as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {hasError && (
        <div className="text-red-500 text-[10px] mt-1">
          {error || 'Este campo es requerido'}
        </div>
      )}
        {inputType === 'textarea' && (
          <textarea 
            className="border border-gray-300 rounded px-4 py-2 w-full h-24 focus:outline-none focus:border-lightblue-primary"
            {...(inputProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        )}
        {hasError && (
        <div className="text-red-500 text-[10px] mt-1">
          {error || 'Este campo es requerido'}
        </div>
        )}
        {inputType === 'file' && (
          <input 
            type="file" 
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-lightblue-primary"
            {...(inputProps as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {hasError && (
        <div className="text-red-500 text-[10px] mt-1">
          {error || 'Este campo es requerido'}
        </div>
        )}
        {inputType === 'select' && (
          <div className="flex items-center justify-start text-[#393E4F] text-xs gap-[15px]">
            {selectOptions.map(option => (
              <label key={option.value} className="flex items-center">
                <input 
                  type="radio" 
                  value={option.value} 
                  name={inputProps?.name}
                  className="mr-2" 
                  {...(inputProps as React.InputHTMLAttributes<HTMLInputElement>)}
                />
                {option.label}
              </label>
            ))}
          </div>
        )}
        {hasError && (
        <div className="text-red-500 text-[10px] mt-1">
          {error || 'Este campo es requerido'}
        </div>
      )}
      </div>
    );
  }
  