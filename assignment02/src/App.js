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

  // Variables
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
    return sign === "+" ? a + b : sign === "-" ? a - b : sign === "X" ? a * b : a / b;
  }




  const invertClickHandler = () => {
    console.log("");
  }

  const percentClickHandler = () => {
    console.log("");
  }



  // Reset and clear memory 
  const resetClickHandler = () => {
    setCalc({ sign: "", num: 0, res: 0, });
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
      
      console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        event.preventDefault();
        equalsClickHandler();
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        resetClickHandler();
      }
      if (Number(event.key) >= 0 && Number(event.key) <= 9 ) {
        event.preventDefault();
        numClickHandler(event.key);
      }
      if (event.key === "+" || event.key === "-" || event.key === "/" || event.key === "*" ) {
        event.preventDefault();
        signClickHandler(event.key);
      }
      if (event.key === '.') {
        event.preventDefault();
        commaClickHandler(event.key);
      }

    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });




  return (
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
              : btn === "%"
                ? percentClickHandler()
                : btn === "="
                  ? equalsClickHandler()
                  : btn === "/" || btn === "*" || btn === "-" || btn === "+"
                    ? signClickHandler(btn)
                    : btn === "."
                      ? commaClickHandler(btn)
                      : numClickHandler(btn);

        }}
        />
        {console.log(calc)}

      </ButtonBox>
    </Wrapper>
  );
};

export default App;