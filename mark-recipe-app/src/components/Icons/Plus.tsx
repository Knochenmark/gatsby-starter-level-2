import * as React from 'react';

export default function Plus({ ...props }: {}) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path d="M24 10H14V0h-4v10H0v4h10v10h4V14h10z" />
    </svg>
  )
}
