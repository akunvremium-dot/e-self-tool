import React from 'react';

type DataPoint = {
  label: string;
  score: number; // 0 to 100
  color: string;
};

export default function RadarChart({ data, zoneHexColor }: { data: DataPoint[], zoneHexColor: string }) {
  const size = 300;
  const center = size / 2;
  const radius = 100;
  
  // Calculate coordinates for a given value (0-100) and index
  const getCoordinates = (value: number, index: number, total: number) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2; // -PI/2 to start at top
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  const totalPoints = data.length;

  // Build the polygon points string for the data
  const dataPolygon = data.map((d, i) => {
    const { x, y } = getCoordinates(d.score, i, totalPoints);
    return `${x},${y}`;
  }).join(' ');

  // SVG grid backgrounds (e.g. 5 levels: 20, 40, 60, 80, 100)
  const levels = [20, 40, 60, 80, 100];

  return (
    <div className="w-full flex justify-center py-6">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Draw grid polygons */}
        {levels.map((level, levelIdx) => {
          const gridPolygon = data.map((_, i) => {
            const { x, y } = getCoordinates(level, i, totalPoints);
            return `${x},${y}`;
          }).join(' ');
          
          return (
            <polygon
              key={`level-${levelIdx}`}
              points={gridPolygon}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          );
        })}

        {/* Draw axes lines */}
        {data.map((_, i) => {
          const { x, y } = getCoordinates(100, i, totalPoints);
          return (
            <line
              key={`axis-${i}`}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          );
        })}

        {/* Draw data polygon area */}
        <polygon
          points={dataPolygon}
          fill={`${zoneHexColor}30`}
          stroke={zoneHexColor}
          strokeWidth="2"
          className="transition-all duration-1000 origin-center"
        />

        {/* Draw data points and labels */}
        {data.map((d, i) => {
          const { x, y } = getCoordinates(d.score, i, totalPoints);
          // Label slightly further out
          const labelCoords = getCoordinates(125, i, totalPoints); // 125% radius for label
          
          // Determine text anchor based on x position
          let textAnchor: "middle" | "end" | "start" = "middle";
          if (labelCoords.x < center - 10) textAnchor = "end";
          if (labelCoords.x > center + 10) textAnchor = "start";

          return (
            <g key={`point-${i}`}>
              <circle
                cx={x}
                cy={y}
                r="4"
                fill={d.color}
                stroke="#080B12"
                strokeWidth="2"
              />
              <text
                x={labelCoords.x}
                y={labelCoords.y}
                textAnchor={textAnchor}
                dominantBaseline="middle"
                fill="rgba(255,255,255,0.6)"
                fontSize="11"
                fontWeight="500"
                className="select-none"
              >
                {d.label}
              </text>
              <text
                x={labelCoords.x}
                y={labelCoords.y + 14}
                textAnchor={textAnchor}
                dominantBaseline="middle"
                fill="rgba(255,255,255,0.4)"
                fontSize="10"
                fontFamily="monospace"
                className="select-none"
              >
                {Math.round(d.score)}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
