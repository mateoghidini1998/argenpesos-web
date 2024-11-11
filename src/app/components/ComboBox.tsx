import React, { useEffect, useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"; 
import { ChevronsUpDown } from "lucide-react"; 
import CustomDropdown from "./CustomDropdown";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Option {
  value: string;
  label: string;
}

interface DynamicSelectorProps {
  options: Option[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  placeholder: string;
}

export default function DynamicSelector({
  options,
  selectedValue,
  setSelectedValue,
  placeholder,
}: DynamicSelectorProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return isMobile ? (
    <div className="relative w-[200px]">
      <select
        value={selectedValue}
        onChange={handleChange}
        className="w-full appearance-none bg-background border border-input hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className='text-sm py-1.5 px-2'>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronsUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none" />
    </div>
  ) : (
    <ScrollArea>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className='flex items-center border-[1px] border-solid border-[#e5e7eb] pt-1 px-3 h-full'>
          <button
            className="justify-between flex items-center flex-grow w-full !h-[36px] rounded-md"
            role="combobox"
            aria-expanded={open}
          >
            {selectedValue ? options.find((option) => option.value === selectedValue)?.label : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="popover-content max-h-[50vh] p-0 overflow-y-auto overscroll-contain h-auto">
          <CustomDropdown 
            options={options} 
            placeholder={placeholder} 
            selectedValue={selectedValue} 
            setSelectedValue={setSelectedValue} 
          />
        </PopoverContent>
      </Popover>
    </ScrollArea>
  );
}
