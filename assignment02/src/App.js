import React, { useState, useEffect } from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

// Import css
import './App.css';

// Import Components
import Wrapper from "./component/Wrapper";
import { Screen } from "./component/Screen";
import ButtonBox from "./component/ButtonBox";
import Button from "./component/Button";


const App = () => {

  // Variables (Set state)
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });


  // Small helper functions
  const removeSpaces = (num) => {
    return num.toString().replace(/\s/g, "");
  }
  const toLocaleString = (num) => {
    return String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
  }
  const math = (a, b, sign) => {
    return sign === "+" ? a + b : sign === "-" ? a - b : sign === "*" ? a * b : a / b;
  }


  // Sign Inverter function
  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
    });
  }


  // Reset and clear memory (Escape key)
  const resetClickHandler = () => {
    setCalc({ sign: "", num: 0, res: 0, });
  }

  // Removeing last number (BackSpace key)
  const backspaceHandler = () => {
    if (calc.num) {

      if (removeSpaces(calc.num).length === 1) {
        setCalc({ ...calc, num: 0 });
      }
      else {
        let tempNumber = removeSpaces(calc.num).slice(0, -1);
        tempNumber = toLocaleString(tempNumber);

        // Update values (number and result)
        setCalc({ ...calc, num: tempNumber });
      }
    }
  }

  // Comma for decimal numbers
  const commaClickHandler = (btn) => {
    setCalc({ ...calc, num: !calc.num.toString().includes(".") ? calc.num + btn : calc.num });
  }

  // Equal buttom
  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(math(Number(removeSpaces(calc.res)), Number(removeSpaces(calc.num)), calc.sign)),
        sign: "",
        num: 0,
      });
    }
  };

  // Number buttoms
  const numClickHandler = (btn) => {

    let tempNumber = 0;
    let tempRes = 0;

    if (removeSpaces(calc.num).length < 8) {
      if (removeSpaces(calc.num) % 1 === 0 && !calc.num.toString().includes(".")) {
        tempNumber = toLocaleString(Number(removeSpaces(calc.num + btn)));
      }
      else {
        tempNumber = toLocaleString(calc.num + btn);
      }

      if (!calc.sign) {
        tempRes = 0;
      }
      else {
        tempRes = calc.res;
      }

      // Update values (number and result)
      setCalc({ ...calc, num: tempNumber, res: tempRes });
    }
  }

  // Sign buttoms
  const signClickHandler = (btn) => {
    setCalc({
      ...calc,
      sign: btn,
      num: 0,
      res: !calc.num
        ? calc.res
        : !calc.res
          ? calc.num
          : toLocaleString(math(Number(removeSpaces(calc.res)), Number(removeSpaces(calc.num)), calc.sign)),
    });
  }


  // Listening keyboard keys and do action
  useEffect(() => {
    const keyDownHandler = event => {

      if (event.key === 'Enter') {
        event.preventDefault();
        equalsClickHandler();
      }
      else if (event.key === 'Escape') {
        event.preventDefault();
        resetClickHandler();
      }
      else if (Number(event.key) >= 0 && Number(event.key) <= 9) {
        event.preventDefault();
        numClickHandler(event.key);
      }
      else if (event.key === "+" || event.key === "-" || event.key === "/" || event.key === "*") {
        event.preventDefault();
        signClickHandler(event.key);
      }
      else if (event.key === '.') {
        event.preventDefault();
        commaClickHandler(event.key);
      }
      else if (event.key === "Backspace") {
        event.preventDefault();
        backspaceHandler();
      }

    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });


  return (
    <>

      <Wrapper>
        <Screen value={calc.num ? calc.num : calc.res} />
        <ButtonBox>
          <Button onClick={(e) => {

            // Convert value to string or integer
            let btn = e.target.value

            // Checking input button
            btn === "all-clear"
              ? resetClickHandler()
              : btn === "+-"
                ? invertClickHandler()
                : btn === "="
                  ? equalsClickHandler()
                  : btn === "/" || btn === "*" || btn === "-" || btn === "+"
                    ? signClickHandler(btn)
                    : btn === "."
                      ? commaClickHandler(btn)
                      : numClickHandler(btn);
          }}
          />

        </ButtonBox>
      </Wrapper>

      <div className='text-center'>
        <p>React version : {React.version}</p>
      </div>
      
    </>
  );
};

export default App;