import calculatePresentValue from './calculatePresentValue';

// Calculate the vpl sum and the compound interest
function calculateVpl(fc: number[], i: number, valorInicial: number){
    let result = 0;

    for (let j = 0;j < fc.length;j++){
        result += calculatePresentValue(fc[j], i, j+1);
    }

    return result-valorInicial;
}

export default calculateVpl;