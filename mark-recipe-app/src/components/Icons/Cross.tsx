import * as React from 'react';

export default function Cross({ ...props }: {}) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path d="M23.954 21.03l-9.184-9.095 9.092-9.174L21.03-.046l-9.09 9.179L2.764.045l-2.81 2.81L9.14 11.96.045 21.144l2.81 2.81 9.112-9.192 9.18 9.1z" />
    </svg>
  )
}
