"use client";

import { useEffect, useRef } from "react";

export interface BarChartProps {
  chartName: string;
  className?: string;
}

export default function BarChart({ chartName, className }: BarChartProps) {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const init = async () => {
      const { initTE, Chart } = await import("tw-elements");
      initTE({ Chart });
      
      chartRef.current = new Chart(
        document.getElementById(`bar-chart-${chartName}`), {
          type: 'bar',
          data: {
            labels: ['Segunda', 'Terça' , 'Quarta' , 'Quinta' , 'Sexta' , 'Sábado' , 'Domingo'],
            datasets: [
              {
                label: 'Consumo de água (mililitros)',
                data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
              },
            ],
          },  
        }, {
          options: {
            backgroundColor: "rgb(150,215,255)",
          },
        },
      );
    };

    init();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartName]);

  const cn = `overflow-hidden ${className}`;

  return (
    <div className={cn}>
      <canvas id={`bar-chart-${chartName}`} />
    </div>
  );
}