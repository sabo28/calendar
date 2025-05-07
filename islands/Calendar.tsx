import { useState } from "preact/hooks";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div>
      <h2>{today.toLocaleString("de-DE", { month: "long", year: "numeric" })}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {dates.map((day) => {
          const dateStr = `${year}-${(month + 1).toString().padStart(2, "0")}-${day
            .toString()
            .padStart(2, "0")}`;
          return (
            <button
              type="button"
              key={day}
              onClick={() => setSelectedDate(dateStr)}
              style={{
                padding: "0.5rem",
                background: selectedDate === dateStr ? "#663399" : "#eee",
                color: selectedDate === dateStr ? "white" : "black",
                borderRadius: "0.5rem",
              }}
            >
              {day}
            </button>
          );
        })}
      </div>
      {selectedDate && <p>📅 Ausgewählt: {selectedDate}</p>}
    </div>
  );
}
