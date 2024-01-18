import React, {
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
} from "react";

type InputCodeProps = {
  length: number;
  label: string;
  loading?: boolean;
  onComplete?: (code: string) => void;
  onChange?: (code: string) => void;
};

const InputCode: React.FC<InputCodeProps> = ({
  length,
  loading,
  onComplete,
  onChange,
}) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const processInput = (e: ChangeEvent<HTMLInputElement>, slot: number) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1 && inputs.current[slot + 1]) {
      inputs.current[slot + 1]!.focus();
    }
    if (newCode.every((num) => num !== "")) {
      onComplete && onComplete(newCode.join(""));
    }
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>, slot: number) => {
    if (e.key === "Backspace" && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      if (inputs.current[slot - 1]) {
        inputs.current[slot - 1]!.focus();
      }
    }
  };

  useEffect(() => {
    onChange && onChange(code.join(""));
  }, [code, onChange]);

  return (
    <div className="flex flex-col items-start">
      <div className="flex justify-start items-center gap-2">
        {code.map((num, idx) => (
          <input
            key={idx}
            type="text"
            inputMode="numeric"
            className="border-2 bg-transparent border-gray-300  focus:outline-theme-purple/60 text-center h-[60px] w-full md:w-[40px] rounded-md text-2xl [&:nth-child(4)]:ml-4"
            maxLength={1}
            value={num}
            autoFocus={!code[0].length && idx === 0}
            readOnly={loading}
            onChange={(e) => processInput(e, idx)}
            onKeyUp={(e) => onKeyUp(e, idx)}
            ref={(ref) => inputs.current.push(ref)}
          />
        ))}
      </div>
    </div>
  );
};

export default InputCode;
