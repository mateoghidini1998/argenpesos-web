import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils"; 

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  placeholder: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

export default function CustomDropdown({
  options,
  placeholder,
  selectedValue,
  setSelectedValue,
}: CustomDropdownProps) {
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Command role="listbox">
      <CommandInput 
        placeholder={`Buscar ${placeholder.toLowerCase()}...`} 
        value={search} 
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>No se encontraron opciones.</CommandEmpty>
        <CommandGroup>
          {filteredOptions.map((option) => (
            <CommandItem
              key={option.value}
              onSelect={() => setSelectedValue(option.value)}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  selectedValue === option.value ? "opacity-100" : "opacity-0"
                )}
              />
              {option.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
