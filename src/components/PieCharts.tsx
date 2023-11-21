import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";



const data = [
  { value: 35, label: "35%" },
  { value: 25, label: "25%" },
  { value: 10, label: "10%" },
  { value: 25, label: "25%" },
  { value: 5, label: "5%" },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const PieCharts = () => {
  return (
    <>
      <div className="md:hidden block">
        <PieChart
          colors={["#8C62FF", "#4432CD", "#a01414", "#2DD4BF", "#FE964A"]}
          series={[{ data, innerRadius: 55, cornerRadius: 3, paddingAngle: 3 }]}
          width={250}
          height={200}
          className="w-40"
        >
          <PieCenterLabel>$949.99</PieCenterLabel>
        </PieChart>
      </div>
      <Stack>
        <div className="hidden md:flex">
          <PieChart
            colors={["#8C62FF", "#4432CD", "#a01414", "#2DD4BF", "#FE964A"]}
            series={[
              { data, innerRadius: 65, cornerRadius: 5, paddingAngle: 3 },
            ]}
            {...size}
          >
            <PieCenterLabel>$949.99</PieCenterLabel>
          </PieChart>
        </div>
      </Stack>
    </>
  );
};

export default PieCharts;
