import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [speed, setSpeed] = useState(30);
  const [autonomyEnabled, setAutonomyEnabled] = useState(true);
  const [cameraView, setCameraView] = useState("Front");

  const cameraOptions = ["Front", "Rear", "Left", "Right"];

  return(
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div className="card">
        <h2>Vehicle Control</h2>
        <label>Speed: {speed} km/h</label>
        <input
          type="range"
          className="slider"
          min="0"
          max="100"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
        <div className="toggle" onClick={() => setAutonomyEnabled(!autonomyEnabled)}>
          {autonomyEnabled ? "Autonomy Enabled" : "Autonomy Disabled"}
        </div>
      </div>

      <div className="card">
        <h2>Camera Feed</h2>
        <div className="grid grid-cols-2 gap-2">
          {cameraOptions.map((view) => (
            <button
              key={view}
              className={`button ${cameraView === view ? "default" : "outline"}`}
              onClick={() => setCameraView(view)}
            >
              {view}
            </button>
          ))}
        </div>
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
          <span>{cameraView} Camera Feed</span>
        </div>
      </div>

      <div className="card">
        <h2>System Diagnostics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>Status: <span className="text-green-500">Operational</span></div>
          <div>Battery: <span className="text-yellow-600">72%</span></div>
          <div>GPS: <span className="text-blue-500">Locked</span></div>
          <div>Temp: <span className="text-red-600">45°C</span></div>
        </div>
      </div>
    </div>
  );
}