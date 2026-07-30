import React from 'react';
import './Watermark.css';

const Watermark = () => {
  return (
    <div className="watermark-banner">
      <p>
        ⚠️ <strong>Evaluation Project by Neraj Lal</strong>
        <a href="https://github.com/nerajlal/Medical-Resort-Task/blob/main/LICENSE" target="_blank" rel="noreferrer" className="watermark-link"> Read License</a>
      </p>
    </div>
  );
};

export default Watermark;
