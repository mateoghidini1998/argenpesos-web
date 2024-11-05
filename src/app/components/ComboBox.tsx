'use client'

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"; 
import { Button } from "@/components/ui/button"; 
import { ChevronsUpDown } from "lucide-react"; 
import CustomDropdown from "./CustomDropdown";

interface Option {
  value: string
  label: string
}

interface DynamicSelectorProps {
  options: Option[]
  selectedValue: string
  setSelectedValue: (value: string) => void
  placeholder: string
}

export default function DynamicSelector({
  options,
  selectedValue,
  setSelectedValue,
  placeholder,
}: DynamicSelectorProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between flex-1"
        >
          {selectedValue ? options.find(option => option.value === selectedValue)?.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="popover-content max-w-[300px] max-h-[50vh] p-0 overflow-y-auto overscroll-contain h-auto">
        <CustomDropdown 
            options={options}
            placeholder={placeholder}
            onSelect={handleSelect}
        />
      </PopoverContent>
    </Popover>
  );
}