import React from 'react';
import './App.css';
import { useApplicationState } from './store';

const TimerDisplay: React.FC<{ seconds: number }> = ({ seconds }) => (
  <div>
    <span>stopwatch:</span>
    <span>{seconds.toFixed(1)}</span>
  </div>
);

const TimerToggle: React.FC<{
  running: boolean;
  onToggle: () => void;
}> = ({ running, onToggle }) => (
  <div>
    <button onClick={onToggle}>
      {running ? "stop" : "start"}
    </button>
  </div>
  );

const Names: React.FC<{
  names?: string[]
}> = ({ names }) => names ? (
  <>
    <div>Data</div>
    <div>{JSON.stringify(names)}</div>
  </>
) : null;

function App() {
  const { seconds, running, names, onToggle } = useApplicationState(); 
  return (
    <div>
      <TimerDisplay seconds={seconds} />
      <TimerToggle running={running} onToggle={onToggle} />
      <Names names={names} />
    </div>
  );
}

export default App;
