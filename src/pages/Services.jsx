import React, { useState } from "react";

const classes = [
  // Sunday
  {
    name: "Pilates Flow",
    type: "Yoga",
    trainer: "Priya Sharma",
    duration: "8:00-9:00 AM",
    room: "Studio A",
    day: "Sunday",
  },
  {
    name: "Cardio Burn",
    type: "HIIT",
    trainer: "John Carter",
    duration: "10:00-11:00 AM",
    room: "Studio B",
    day: "Sunday",
  },
  {
    name: "Zumba Sunrise",
    type: "Zumba",
    trainer: "Sophia Lee",
    duration: "5:00-6:00 PM",
    room: "Studio C",
    day: "Sunday",
  },
  // Monday
  {
    name: "Morning Yoga",
    type: "Yoga",
    trainer: "Priya Sharma",
    duration: "7:00-8:00 AM",
    room: "Studio A",
    day: "Monday",
  },
  {
    name: "HIIT Blast",
    type: "HIIT",
    trainer: "John Carter",
    duration: "8:30-9:15 AM",
    room: "Studio B",
    day: "Monday",
  },
  {
    name: "Zumba Fun",
    type: "Zumba",
    trainer: "Sophia Lee",
    duration: "6:00-7:00 PM",
    room: "Studio C",
    day: "Monday",
  },
  // Tuesday
  {
    name: "Gentle Yoga",
    type: "Yoga",
    trainer: "Priya Sharma",
    duration: "7:30-8:30 AM",
    room: "Studio A",
    day: "Tuesday",
  },
  {
    name: "Express HIIT",
    type: "HIIT",
    trainer: "John Carter",
    duration: "9:00-9:45 AM",
    room: "Studio B",
    day: "Tuesday",
  },
  {
    name: "Zumba Energy",
    type: "Zumba",
    trainer: "Sophia Lee",
    duration: "7:00-8:00 PM",
    room: "Studio C",
    day: "Tuesday",
  },
  // Wednesday
  {
    name: "Power Yoga",
    type: "Yoga",
    trainer: "Priya Sharma",
    duration: "7:00-8:00 AM",
    room: "Studio A",
    day: "Wednesday",
  },
  {
    name: "Strength Circuit",
    type: "HIIT",
    trainer: "John Carter",
    duration: "8:30-9:15 AM",
    room: "Studio B",
    day: "Wednesday",
  },
  {
    name: "Zumba Groove",
    type: "Zumba",
    trainer: "Sophia Lee",
    duration: "6:00-7:00 PM",
    room: "Studio C",
    day: "Wednesday",
  },
  // Thursday
  {
    name: "Sun Salutation",
    type: "Yoga",
    trainer: "Priya Sharma",
    duration: "7:00-8:00 AM",
    room: "Studio A",
    day: "Thursday",
  },
  {
    name: "HIIT Power",
    type: "HIIT",
    trainer: "John Carter",
    duration: "8:30-9:15 AM",
    room: "Studio B",
    day: "Thursday",
  },
  {
    name: "Zumba Fiesta",
    type: "Zumba",
    trainer: "Sophia Lee",
    duration: "6:00-7:00 PM",
    room: "Studio C",
    day: "Thursday",
  },
  // Friday
  {
    name: "Sunrise Yoga",
    type: "Yoga",
    trainer: "Priya Sharma",
    duration: "7:00-8:00 AM",
    room: "Studio A",
    day: "Friday",
  },
  {
    name: "HIIT Express",
    type: "HIIT",
    trainer: "John Carter",
    duration: "8:30-9:15 AM",
    room: "Studio B",
    day: "Friday",
  },
  {
    name: "Zumba Party",
    type: "Zumba",
    trainer: "Sophia Lee",
    duration: "6:00-7:00 PM",
    room: "Studio C",
    day: "Friday",
  },
  // Saturday
  {
    name: "Weekend Yoga",
    type: "Yoga",
    trainer: "Priya Sharma",
    duration: "8:00-9:00 AM",
    room: "Studio A",
    day: "Saturday",
  },
  {
    name: "HIIT Challenge",
    type: "HIIT",
    trainer: "John Carter",
    duration: "10:00-11:00 AM",
    room: "Studio B",
    day: "Saturday",
  },
  {
    name: "Zumba Beats",
    type: "Zumba",
    trainer: "Sophia Lee",
    duration: "5:00-6:00 PM",
    room: "Studio C",
    day: "Saturday",
  },
];

// Fix days and todayName
const days = [
  "All",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const todayName = days[new Date().getDay() + 1]; // +1 because "All" is at index 0

const types = ["All", "Yoga", "HIIT", "Zumba"];

export default function Services() {
  const [selectedDay, setSelectedDay] = useState(todayName);
  const [selectedType, setSelectedType] = useState("All");

  const filteredClasses = classes.filter(
    (cls) =>
      (selectedDay === "All" || cls.day === selectedDay) &&
      (selectedType === "All" || cls.type === selectedType)
  );

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Weekly Class Schedule
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <div>
            <label className="font-semibold mr-2">Day:</label>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="px-3 py-2 rounded border border-gray-300"
            >
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-semibold mr-2">Type:</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 rounded border border-gray-300"
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredClasses.length === 0 ? (
            <div className="col-span-3 text-center text-gray-500">
              No classes found for this filter.
            </div>
          ) : (
            filteredClasses.map((cls, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start"
              >
                <h3 className="text-xl font-bold mb-2">{cls.name}</h3>
                <div className="mb-1">
                  <span className="font-semibold">Trainer:</span> {cls.trainer}
                </div>
                <div className="mb-1">
                  <span className="font-semibold">Duration:</span> {cls.duration}
                </div>
                <div className="mb-1">
                  <span className="font-semibold">Room:</span> {cls.room}
                </div>
                <span className="mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  {cls.type}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}