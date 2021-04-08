// import {CanvasJSChart} from 'canvasjs-react-charts'
import { useEffect, useRef } from 'react'


const calculatePercent = (value, total) => {
        
    return (value / total * 100).toFixed(0);
};

const getTotal = (data) => {
    var sum = 0;
    data.forEach(({value}) =>{
        sum += value;
    })
        
    return sum;
};

const calculateStart = (data, index, total) => {
    if(index === 0) {
            return 0;
    }

    return calculateEnd(data, index-1, total);
};

const calculateEndAngle = (data, index, total) => {
    const angle = data[index].value / total * 360;
    const inc = ( index === 0 ) ? 0 : calculateEndAngle(data, index-1, total);

    return ( angle + inc );
};

const calculateEnd = (data, index, total) => {

    return degreeToRadians(calculateEndAngle(data, index, total));
};

const degreeToRadians = (angle) => {
    return angle * Math.PI / 180
}

const calculateSlice = (value, total) =>{
    return 2 * Math.PI * value / total;
}

const ResultsChartPie = ({dataPoints}) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        // Clear ALL
        context.restore();
        context.clearRect(0, 0, canvas.width, canvas.height);

        var x = canvas.width / 2,
            y = canvas.height / 2;
        var startAngle,
            endAngle,
            sliceAngle,
            total = getTotal(dataPoints);

        // Sort
        // dataPoints.sort((a, b) => (b.value - a.value) )

        dataPoints.forEach(({label, value, color}, i) => {
            startAngle = calculateStart(dataPoints, i, total);
            endAngle = calculateEnd(dataPoints, i, total);
            sliceAngle = calculateSlice(value, total);

            console.log({x, y, startAngle, endAngle});

            const rowLabel = 40*(i+1)

            context.fillStyle = color;
            context.beginPath();
            context.moveTo(x, y);
            context.arc(x, y, y, startAngle, endAngle, false);
            context.fill();

            context.rect(canvas.width - 200, rowLabel, 25, 25);
            context.fill();


        }); 


        // Line and Point, Label
        dataPoints.forEach(({label, value, color}, i) => {
            startAngle = calculateStart(dataPoints, i, total);
            endAngle = calculateEnd(dataPoints, i, total);
            sliceAngle = calculateSlice(value, total);

            const pieRadius = Math.min(x,y);
            const labelX = x + (pieRadius / 2) * Math.cos(startAngle + sliceAngle/2);
            const labelY = y + (pieRadius / 2) * Math.sin(startAngle + sliceAngle/2);

            const rowLabel = 40*(i+1)

            if(value !== 0){
                context.fillStyle = 'transparent';
                context.beginPath();
                context.moveTo(canvas.width - 210, rowLabel+10);
                context.lineTo(canvas.width - 260, rowLabel+10);
                context.lineTo(labelX, labelY);
                context.stroke();
                context.fill();

                context.fillStyle = '#fff';
                context.beginPath();
                context.arc(labelX, labelY, 5, 0, 2 * Math.PI);
                context.fill();
            }

            context.font = "16px sans-serif";
            context.fillStyle = "#000";
            context.fillText( `${calculatePercent(value, total)}% ${label}`, canvas.width - 200 + 40, rowLabel+20);
            
        }); 

    }, [dataPoints])

    return (

        <canvas ref={canvasRef} width="800" height="280" />
        
    )
}

export default ResultsChartPie