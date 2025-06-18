"use client";

import { useEffect } from "react";

export interface LineChartProps {
  readonly chartName: string;
  readonly className?: string;
}

export default function LineChart({ chartName, className }: LineChartProps) {
  useEffect(() => {
    const init = async () => {
      const { initTE, Chart } = await import("tw-elements");
      initTE({ Chart });
      
      const chartInstance = new Chart(
        document.getElementById(`line-chart-${chartName}`), {
          type: 'line',
          data: {
            labels: ['Fevereiro', 'Março' , 'Abril' , 'Maio' , 'Junho' , 'Julho' , 'Agosto'],
            datasets: [
              {
                label: 'Peso',
                data: [55, 57, 56, 57, 59, 60, 62],
              },
            ],
          },  
        }, {
          options: {
            elements: {
              line: {
                backgroundColor: "rgba(59, 112, 202, 0.0)",
                borderColor: "rgb(34, 197, 94)",
                borderWidth: 4,
                tension: 0.0,
              },
              point: {
                borderColor: "rgb(34, 197, 94)",
                backgroundColor: "rgb(34, 197, 94)",
              },
            },
          },
        },
      );
      
      // Chart instance is stored for potential future use (cleanup, updates, etc.)
      console.debug('LineChart initialized:', chartInstance);
    };

    init();
  }, [chartName]);

  const cn = `overflow-hidden ${className}`;

  return (
    <div className={cn}>
      <canvas id={`line-chart-${chartName}`} />
    </div>
  );
};
