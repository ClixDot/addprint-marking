import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import './CustomSelect.css';

interface CustomSelectProps {
  options: string[];
  defaultValue?: string;
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  id?: string;
}

export default function CustomSelect({
  options,
  defaultValue,
  value,
  onChange,
  placeholder = 'Select an option',
  id,
}: CustomSelectProps) {
  const [selected, setSelected] = useState(value ?? defaultValue ?? '');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (opt: string) => {
    setSelected(opt);
    onChange?.(opt);
    setOpen(false);
  };

  return (
    <div className={`cselect-wrapper ${open ? 'open' : ''}`} ref={ref} id={id}>
      <button
        type="button"
        className="cselect-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={`cselect-value ${!selected ? 'placeholder' : ''}`}>
          {selected || placeholder}
        </span>
        <ChevronDown size={16} className="cselect-chevron" />
      </button>

      {open && (
        <ul className="cselect-dropdown" role="listbox">
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={selected === opt}
              className={`cselect-option ${selected === opt ? 'selected' : ''}`}
              onClick={() => handleSelect(opt)}
            >
              <span>{opt}</span>
              {selected === opt && <Check size={14} className="cselect-check" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
