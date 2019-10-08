import * as React from 'react';

export default function Left({ ...props }: {}) {
  return (
    <svg width={24} height={24} {...props}>
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167L16.67 24 4.5 12.004z" />
    </svg>
  )
}
