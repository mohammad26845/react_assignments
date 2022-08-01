import "./Button.css";

const Button = ({ onClick }) => {
    return (
        <>
            <button onClick={onClick} type="button" className=" btn btn-info" value="+">+</button>
            <button onClick={onClick} type="button" className=" btn btn-info" value="-">-</button>
            <button onClick={onClick} type="button" className=" btn btn-info" value="*">&times;</button>
            <button onClick={onClick} type="button" className=" btn btn-info" value="/">&divide;</button>

            <button onClick={onClick} type="button" value="7" className="btn btn-light ">7</button>
            <button onClick={onClick} type="button" value="8" className="btn btn-light ">8</button>
            <button onClick={onClick} type="button" value="9" className="btn btn-light ">9</button>

            <button onClick={onClick} type="button" className=" btn btn-info" value="+-">+-</button>

            <button onClick={onClick} type="button" value="4" className="btn btn-light ">4</button>
            <button onClick={onClick} type="button" value="5" className="btn btn-light ">5</button>
            <button onClick={onClick} type="button" value="6" className="btn btn-light ">6</button>


            <button onClick={onClick} type="button" value="1" className="btn btn-light ">1</button>
            <button onClick={onClick} type="button" value="2" className="btn btn-light ">2</button>
            <button onClick={onClick} type="button" value="3" className="btn btn-light ">3</button>


            <button onClick={onClick} type="button" value="0" className="btn btn-light">0</button>
            <button onClick={onClick} type="button" className="btn btn-secondary" value=".">.</button>
            <button onClick={onClick} type="button" className="btn btn-danger btn-sm" value="all-clear">AC</button>

            <button onClick={onClick} type="button" className="equal-sign btn btn-light" value="=">=</button>
        </>
    );
};

export default Button;