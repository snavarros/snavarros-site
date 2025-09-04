import React from "react";

interface DateDisplayProps {
  date?: Date;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date = new Date() }) => {
  const day = date.getDate();
  const month = date.toLocaleString("es", { month: "short" }); // ene, feb, mar
  const year = date.getFullYear();
  const weekday = date.toLocaleString("es", { weekday: "short" }); // lun, mar, mie

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-sm font-semibold text-white">
        {weekday.toUpperCase()}
      </span>
      <span className="text-6xl font-extrabold text-white">{day}</span>
      <span className="text-lg font-medium text-white tracking-wide">
        {month.toUpperCase()} {year}
      </span>
    </div>
  );
};

export default DateDisplay;