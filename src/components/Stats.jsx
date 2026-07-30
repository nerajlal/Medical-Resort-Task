import React, { useState, useEffect } from 'react';
import { stats } from '../data';
import './Stats.css';

const CountUpNumber = ({ endString }) => {
  const [count, setCount] = useState(0);
  const match = endString.match(/^(\d+)(.*)$/);
  
  const numericPart = match ? parseInt(match[1], 10) : NaN;
  const suffix = match ? match[2] : endString;

  useEffect(() => {
    if (isNaN(numericPart)) return;
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = numericPart / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericPart) {
        setCount(numericPart);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [numericPart]);

  if (isNaN(numericPart)) return <span>{endString}</span>;
  return <span>{count}{suffix}</span>;
};

const Stats = () => {
  return (
    <section className="stats">
      <div className="container stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h2 className="stat-value"><CountUpNumber endString={stat.value} /></h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
