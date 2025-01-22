"use client"

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  {
    SportCar: 17439,
    SUV: 9478,
    Coupe: 18197,
    Hatchback: 12510,
    MPV: 14406,
  },
]

const chartConfig: { [key: string]: { label: string; color: string } } = {
  SportCar: {
    label: "Sport Car",
    color: "#0D3559",
  },
  SUV: {
    label: "SUV",
    color: "#175D9C",
  },
  Coupe: {
    label: "Coupe",
    color: "#2185DE",
  },
  Hatchback: {
    label: "Hatchback",
    color: "#63A9E8",
  },
  MPV: {
    label: "MPV",
    color: "#A6CEF2",
  },
} satisfies ChartConfig

export function CarRentalChart() {
  const totalCars = Object.values(chartData[0]).reduce((acc, curr) => acc + curr, 0)

  return (
    <div className="w-full">
      <div className="flex justify-center lg:flex-row items-center lg:items-center ">
        <div className="w-full max-w-[200px] h-[200px] mx-auto lg:mx-0">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                data={chartData}
                innerRadius="65%"
                outerRadius="100%"
                startAngle={0}
                endAngle={360}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) - 10}
                              className="text-lg font-semibold fill-gray-900"
                            >
                              {totalCars.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 12}
                              className="text-xs fill-gray-500"
                            >
                              Rental Car
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </PolarRadiusAxis>
                {Object.entries(chartConfig).map(([key, config]) => (
                  <RadialBar
                    key={key}
                    dataKey={key}
                    stackId="a"
                    cornerRadius={6}
                    fill={config.color}
                    className="stroke-white stroke-2"
                  />
                ))}
              </RadialBarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        <div className="w-full lg:w-auto mt-4 lg:mt-0 lg:ml-4">
          {Object.entries(chartConfig).map(([key, config]) => (
            <div key={key} className="flex  justify-start mb-2 last:mb-0">
              <div className="flex items-center justify-center gap-2">
                <div
                  className="w-2 h-2 rounded-[100%]"
                  style={{ backgroundColor: config.color }}
                />
                <span className="text-sm text-gray-600">{config.label}</span>
              </div>
              <span className="text-sm font-medium text-gray-900 ml-4">
                {chartData[0][key as keyof typeof chartData[0]].toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
