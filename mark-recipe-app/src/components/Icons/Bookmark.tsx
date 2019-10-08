import * as React from 'react';

export default function Bookmark({ ...props }: {}) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path d="M13.938 2A4.068 4.068 0 0 1 18 6.042v13.54l-4-3.512-4 3.512V6.589C10 4.125 9.72 3.256 9.142 2h4.796zm0-2H4c2.834 1.042 4 3.042 4 6.589V24l6-5.269L20 24V6.042A6.062 6.062 0 0 0 13.938 0z" />
    </svg>
  )
}
