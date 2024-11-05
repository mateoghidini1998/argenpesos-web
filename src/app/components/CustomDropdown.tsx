import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  placeholder: string;
  onSelect: (value: string) => void;
}

export default function CustomDropdown({
  options,
  placeholder,
  onSelect,
}: CustomDropdownProps) {
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        className="w-full p-2 mb-2 border rounded"
      />
      <ul className="max-h-60 overflow-y-auto">
        {filteredOptions.map((option) => (
          <li
            key={option.value}
            onClick={() => onSelect(option.value)}
            className="p-2 hover:bg-gray-100 cursor-pointer"
          >
            {option.label}
          </li>
        ))}
        {filteredOptions.length === 0 && (
          <li className="p-2 text-gray-500">No options found</li>
        )}
      </ul>
    </div>
  );
}
