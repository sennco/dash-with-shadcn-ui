"use client"

import { DollarSignIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Bar, CartesianGrid, XAxis, BarChart, Tooltip, Legend } from "recharts";

export default function ChartOverview() {
  const chartData = [
    { month: "Janeiro", desktop: 186, mobile: 80 },
    { month: "Fevereiro", desktop: 305, mobile: 200 },
    { month: "Maço", desktop: 237, mobile: 120 },
    { month: "Abril", desktop: 73, mobile: 190 },
    { month: "Maio", desktop: 209, mobile: 130 },
    { month: "Junho", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  };

  return (
    <Card className="w-full md:w-1/2 md:max-w-[600px]">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-600">
            Overview vendas
          </CardTitle>
          <DollarSignIcon className="ml-auto w-4 h-4" />
        </div>
      </CardHeader>
      
      <CardContent className="min-h-[200px] w-full">
    
          <BarChart
            data={chartData}
            width={500} 
            height={300}
            style={{ maxWidth: '100%', margin: '0 auto' }}
            
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />
            <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
          </BarChart>

      </CardContent>
    </Card>
  );
}
