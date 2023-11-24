import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  //   console.log(resultData);
  // console.log(input);

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Invested Value</th>
            <th>Intrest (Year)</th>
            <th>Totoal Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((yearData) => {
            const totalIntrest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;

              
            const totalAmountInvested = yearData.valueEndOfYear - totalIntrest;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalIntrest)}</td>
                {/* <td>{yearData}</td> */}
                <td>{formatter.format(totalAmountInvested)}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Result</p>
    </>
  );
}
