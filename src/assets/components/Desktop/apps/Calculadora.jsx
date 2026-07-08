import { useState } from "react";
import "./css/Calculadora.css";

export default function Calculadora({ closeApp, id }) {
    const [valor, setValor] = useState("");

    function adicionar(numero) {
        setValor((anterior) => anterior + numero);
    }

    function limpar() {
        setValor("");
    }

    function calcular() {
        try {
            setValor(eval(valor).toString());
        } catch {
            setValor("Erro");
        }
    }

    return (
        <div className="calculadora">
            <div className="fechar">
                <button onClick={() => closeApp(id)}>x</button>
            </div>
            <input
                type="text"
                value={valor}
                readOnly
                className="display"
            />

            <div className="botoes">
                <button onClick={limpar} className="limpar">C</button>
                <button onClick={() => adicionar("/")}>/</button>
                <button onClick={() => adicionar("*")}>×</button>        

                <button onClick={() => adicionar("7")}>7</button>
                <button onClick={() => adicionar("8")}>8</button>
                <button onClick={() => adicionar("9")}>9</button>
                <button onClick={() => adicionar("-")}>−</button>
                

                <button onClick={() => adicionar("4")}>4</button>
                <button onClick={() => adicionar("5")}>5</button>
                <button onClick={() => adicionar("6")}>6</button>
                <button onClick={() => adicionar("+")}>+</button>

                <button onClick={() => adicionar("1")}>1</button>
                <button onClick={() => adicionar("2")}>2</button>
                <button onClick={() => adicionar("3")}>3</button>
                <button onClick={calcular} className="igual">=</button>

                <button onClick={() => adicionar("0")} className="zero">0 </button>

                <button onClick={() => adicionar(".")}>.</button>
            </div>
        </div>
    );
}