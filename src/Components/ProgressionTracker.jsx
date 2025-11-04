import React from 'react';
import './ProgressionTracker.css';

function ProgressionTracker({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-tracker">
      <div className="progress-label">
        Progress: {completed}/{total} ({progress}%)
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressionTracker;
