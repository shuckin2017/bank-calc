import React from "react";

export const СalculationResult = ({ calc }) => {
  const { totalYears, totalAmountYear } = calc;
  const result = [];
  const summ = [];
  console.log(result);
  for (let i = 0; i < totalYears; i++) {
    result.push(
      <div className="calc-result__item" key={i}>
        <input type="checkbox" />
        <label>
          {totalAmountYear} рублей <span>в {i + 1}-ый год</span>
        </label>
      </div>
    );
  }
  return (
    <div className="content-block__result calc-result">
      <span>Итого можете внести в качестве досрочных:</span>
      <div className="calc-result__inner">{result}</div>
    </div>
  );
};
