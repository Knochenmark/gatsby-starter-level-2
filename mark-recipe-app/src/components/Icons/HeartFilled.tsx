import * as React from 'react';

export default function HeartFilled({ ...props }: {}) {
  return (
    <svg width={24} height={24} {...props}>
      <path d="M12 4.419C9.174-1.276.001.355.001 7.689.001 14.959 9.904 18.627 12 23c2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
    </svg>
  )
}
