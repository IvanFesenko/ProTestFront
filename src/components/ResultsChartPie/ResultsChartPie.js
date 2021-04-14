import { useEffect, useRef } from 'react';
import { useCanvasSize } from 'hooks';

const calculatePercent = (value, total) => {
  return ((value / total) * 100).toFixed(0);
};

const getTotal = data => {
  let sum = 0;
  data.forEach(({ value }) => {
    sum += value;
  });

  return sum;
};

const calculateStart = (data, index, total) => {
  if (index === 0) return 0;
  return calculateEnd(data, index - 1, total);
};

const calculateEndAngle = (data, index, total) => {
  const angle = (data[index].value / total) * 360;
  const inc = index === 0 ? 0 : calculateEndAngle(data, index - 1, total);
  return angle + inc;
};

const calculateEnd = (data, index, total) => {
  return degreeToRadians(calculateEndAngle(data, index, total));
};

const degreeToRadians = angle => {
  return (angle * Math.PI) / 180;
};

const calculateSlice = (value, total) => {
  return (2 * Math.PI * value) / total;
};

// const dataPoints = [
//   { label: 'Correct ', value: 67, color: '#FF6B01' },
//   { label: 'Incorrect  ', value: 20, color: '#D7D7D7' },
// ];

const ResultsChartPie = ({ dataPoints }) => {
  const canvasRef = useRef(null);
  const { canvasWidth, canvasHeight } = useCanvasSize();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const x = canvas.width / 2;
    const y = canvas.height / 2;
    let startAngle,
      endAngle,
      sliceAngle,
      total = getTotal(dataPoints);

    // Clear ALL
    context.restore();
    context.clearRect(0, 0, canvas.width, canvas.height);

    dataPoints.forEach(({ label, value, color }, i) => {
      startAngle = calculateStart(dataPoints, i, total);
      endAngle = calculateEnd(dataPoints, i, total);
      sliceAngle = calculateSlice(value, total);

      const rowLabel = 40 * (i + 1);

      context.fillStyle = color;
      context.beginPath();
      context.moveTo(x, y);
      context.arc(x, y, x < y ? x : y, startAngle, endAngle, false);
      context.fill();

      context.rect(canvas.width - 200, rowLabel, 25, 25); //
      context.fill();
    });

    // Line and Point, Label
    dataPoints.forEach(({ label, value, color }, i) => {
      startAngle = calculateStart(dataPoints, i, total);
      endAngle = calculateEnd(dataPoints, i, total);
      sliceAngle = calculateSlice(value, total);

      const pieRadius = Math.min(x, y);
      const labelX =
        x + (pieRadius / 2) * Math.cos(startAngle + sliceAngle / 2);
      const labelY =
        y + (pieRadius / 2) * Math.sin(startAngle + sliceAngle / 2);

      const rowLabel = 40 * (i + 1);

      if (value !== 0) {
        context.fillStyle = 'transparent';
        context.beginPath();
        context.moveTo(canvas.width - 210, rowLabel + 10); //
        context.lineTo(canvas.width - 260, rowLabel + 10); //
        context.lineTo(labelX, labelY);
        context.stroke();
        context.fill();

        context.fillStyle = '#fff';
        context.beginPath();
        context.arc(labelX, labelY, 5, 0, 2 * Math.PI); //
        context.fill();
      }

      context.font = '16px sans-serif';
      context.fillStyle = '#000';
      context.fillText(
        `${calculatePercent(value, total)}% ${label}`,
        canvas.width - 200 + 40,
        rowLabel + 20,
      );
    });
  }, [dataPoints]);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
};

export default ResultsChartPie;
