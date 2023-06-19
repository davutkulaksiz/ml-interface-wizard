import LineChart from "../LineChart/LineChart";
import "./Analytics.css";

const Analytics = () => {
  const labels = [
    "01/1",
    "01/2",
    "01/3",
    "01/4",
    "02/1",
    "02/2",
    "02/3",
    "02/4",
    "03/1",
    "03/2",
    "03/3",
    "03/4",
    "04/1",
    "04/2",
    "04/3",
    "04/4",
    "05/1",
    "05/2",
    "05/3",
    "05/4",
    "06/1",
    "06/2",
    "06/3",
    "06/4",
    "07/1",
    "07/2",
    "07/3",
    "07/4",
    "08/1",
    "08/2",
    "08/3",
    "08/4",
    "09/1",
    "09/2",
    "09/3",
    "09/4",
    "10/1",
    "10/2",
    "10/3",
    "10/4",
    "11/1",
    "11/2",
    "11/3",
    "11/4",
    "12/1",
    "12/2",
    "12/3",
    "12/4",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Wallet Balance Weekly",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: `#000`,
        data: [
          1.5, 1.8, 1.1, 0.9, 1.3, 1.7, 2.1, 1.8, 2.1, 2.3, 1.9, 2.1, 1.6, 1.8,
          1.6, 1.4, 1.7, 1.5, 1.75, 1.5, 1.3, 1.5, 1.7, 1.9, 1.7, 1.8, 1.6, 1.9,
          2.1, 2.3, 2.7, 3.1,
        ],
      },
    ],
  };
  return (
    <div>
      <div>Analytics</div>
      <div>
        Diabetes Analytics
        <div
          style={{
            width: "60vw",
            backgroundColor: "grey",
            margin: "auto",
            textAlign: "center",
            color: "#000",
            fontSize: "25px",
          }}
        >
          Your (Dream) Wallet Balance
          <LineChart chartData={data} />
        </div>
      </div>
      <div>Diabetes Multiclass Analytics</div>
      <div>Regression Analytics</div>
    </div>
  );
};

export default Analytics;
