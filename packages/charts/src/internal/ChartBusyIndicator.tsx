import { useEffect, useState } from 'react';
import { classNames } from './ChartContainer.module.css.js';

interface ChartBusyIndicatorProps {
  delay: number;
  className?: string;
}

function ChartBusyIndicator({ delay, className }: ChartBusyIndicatorProps) {
  const [visible, setVisible] = useState(delay <= 0);

  useEffect(() => {
    if (delay <= 0) {
      return;
    }
    const id = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(id);
  }, [delay]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={className}
      role="progressbar"
      aria-label="Please wait"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext="Busy"
    >
      <div className={classNames.busyIndicatorCircles}>
        <span className={`${classNames.busyIndicatorCircle} ${classNames.circleAnimation0}`} />
        <span className={`${classNames.busyIndicatorCircle} ${classNames.circleAnimation1}`} />
        <span className={`${classNames.busyIndicatorCircle} ${classNames.circleAnimation2}`} />
      </div>
    </div>
  );
}

export { ChartBusyIndicator };
