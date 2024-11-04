import { useCallback, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"; 
import { Button } from "@/components/ui/button"; 
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem
} from "@/components/ui/command"; 
import { Check, ChevronsUpDown } from "lucide-react"; 
import { cn } from "@/lib/utils"; 

export default function DynamicSelector({
  options,
  selectedValue,
  setSelectedValue,
  placeholder,
}) {
  const [open, setOpen] = useState(false);

  const handleSelect = useCallback((value: string) => {
    setSelectedValue(value)
    setOpen(false)
  }, [setSelectedValue])


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
      <PopoverContent className="p-0">
        <Command role="listbox">
          <CommandInput placeholder={`Buscar ${placeholder.toLowerCase()}...`} />
          <CommandList className="overflow-y-auto max-h-[200px]">
            <CommandEmpty>No se encontraron opciones.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                key={option.value}
                onSelect={() => handleSelect(option.value)}
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
      </PopoverContent>
    </Popover>
  );
}
