import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      let result = 0;

      switch (operation) {
        case '+':
          result = currentValue + inputValue;
          break;
        case '-':
          result = currentValue - inputValue;
          break;
        case '×':
          result = currentValue * inputValue;
          break;
        case '÷':
          result = inputValue !== 0 ? currentValue / inputValue : 0;
          break;
        default:
          return;
      }

      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = () => {
    if (operation && previousValue !== null) {
      performOperation('=');
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const formatDisplay = (value: string) => {
    // Limit display to reasonable length and format large numbers
    if (value.length > 12) {
      const num = parseFloat(value);
      if (Math.abs(num) >= 1e12) {
        return num.toExponential(5);
      }
      return num.toPrecision(8);
    }
    return value;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-calculator-gradient p-4">
      <div className="w-full max-w-sm rounded-3xl bg-card/90 backdrop-blur-sm shadow-calculator border border-border/20 p-6">
        <div className="mb-6 rounded-2xl bg-calculator-display p-6 shadow-inner">
          <div className="text-right">
            <div className="text-4xl font-light text-foreground tracking-tight leading-none">
              {formatDisplay(display)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {/* First Row */}
          <Button
            variant="clear"
            size="calculator"
            onClick={clear}
            className="col-span-2"
          >
            Clear
          </Button>
          <Button
            variant="clear"
            size="calculator"
            onClick={() => {
              setDisplay(display.slice(0, -1) || '0');
            }}
          >
            ⌫
          </Button>
          <Button
            variant="operator"
            size="calculator"
            onClick={() => performOperation('÷')}
            className={cn(operation === '÷' && 'bg-calculator-button-operator-hover')}
          >
            ÷
          </Button>

          {/* Second Row */}
          <Button
            variant="number"
            size="calculator"
            onClick={() => inputNumber('7')}
          >
            7
          </Button>
          <Button
            variant="number"
            size="calculator"
            onClick={() => inputNumber('8')}
          >
            8
          </Button>
          <Button
            variant="number"
            size="calculator"
            onClick={() => inputNumber('9')}
          >
            9
          </Button>
          <Button
            variant="operator"
            size="calculator"
            onClick={() => performOperation('×')}
            className={cn(operation === '×' && 'bg-calculator-button-operator-hover')}
          >
            ×
          </Button>

          {/* Third Row */}
          <Button
            variant="number"
            size="calculator"
            onClick={() => inputNumber('4')}
          >
            4
          </Button>
          <Button
            variant="number"
            size="calculator"
            onClick={() => inputNumber('5')}
          >
            5
          </Button>
          <Button
            variant="number"
            size="calculator"
            onClick={() => inputNumber('6')}
          >
            6
          </Button>
          <Button
            variant="operator"
            size="calculator"
            onClick={() => performOperation('-')}
            className={cn(operation === '-' && 'bg-calculator-button-operator-hover')}
          >
            -
          </Button>

          {/* Fourth Row */}
          <Button
            variant="number"
            size="calculator"
            onClick={() => inputNumber('1')}
          >
            1
          </Button>
          <Button
            variant="number"
            size="calculator"
            onClick={() => inputNumber('2')}
          >
            2
          </Button>
          <Button
            variant="number"
            size="calculator"
            onClick={() => inputNumber('3')}
          >
            3
          </Button>
          <Button
            variant="operator"
            size="calculator"
            onClick={() => performOperation('+')}
            className={cn(operation === '+' && 'bg-calculator-button-operator-hover')}
          >
            +
          </Button>

          {/* Fifth Row */}
          <Button
            variant="number"
            size="calculator"
            onClick={() => inputNumber('0')}
            className="col-span-2"
          >
            0
          </Button>
          <Button
            variant="number"
            size="calculator"
            onClick={inputDot}
          >
            .
          </Button>
          <Button
            variant="equals"
            size="calculator"
            onClick={calculate}
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;