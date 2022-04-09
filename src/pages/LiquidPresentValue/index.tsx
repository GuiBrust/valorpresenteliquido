import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Button from '../../components/Button';
import PlusButton from '../../components/PlusButton';
import calculateVpl from '../../utils/calculateVpl';
import MathJax from 'react-mathjax2';
import './styles.css';

function LiquidPresentValue(){
    const [cashFlows, setCashFlows] = useState(['']);
    const [rate, setRate] = useState('');
    const [result, setResult] = useState('R$ 0.0');
    const [valorInicial, setValorInicial] = useState('');

    const vpl = 'VPL = sum_(t=0)^n (R_t - C_t)/(1 + i)^t';

    function handleAdd(){
        setCashFlows([
            ...cashFlows,
            ''
        ]);
    }

    function handleCalculate(){
        let fcs: number[] = [];

        for (let i = 0;i < cashFlows.length;i++)
            fcs.push(Number(cashFlows[i]));

        const i = Number(rate);
        const vIni = Number(valorInicial)

        setResult(`R$ ${calculateVpl(fcs, i, vIni).toFixed(2)}`);
    }

    return (
        <PageDefault>
            <h2 className='title'>Valor Presente Líquido</h2>

            <Input
                width='98%'
                height='40px'
                placeholder=' Investimento inicial'
                type='number'
                value={valorInicial}
                onChange={e => setValorInicial(e.target.value)}
            />

            <div className="fields-container">
                <h3>Fluxos de caixa</h3>

                <PlusButton onClick={handleAdd}>Adicionar</PlusButton>
                {cashFlows.map((CF, index) => {
                    return <Input
                        key={`${index}_Id`}
                        width='98%'
                        height='40px'
                        placeholder={` Período ${index+1}`}
                        type='number'
                        value={CF}
                        onChange={e => {
                            const newData = [...cashFlows];
                            newData[index] = e.target.value;
                            setCashFlows(newData);
                        }}
                    />
                })}
            </div>

            <Input
                width='98%'
                height='40px'
                placeholder=' Taxa (em %)'
                type='number'
                value={rate}
                onChange={e => setRate(e.target.value)}
            />
    
            <Button width='200px' onClick={handleCalculate}>Calcular</Button>

            <h3 className='result-text'>Resultado: {result}</h3>
        </PageDefault>
    );
}

export default LiquidPresentValue;