import * as React from 'react';

export default function Remove({ ...props }: {}) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" {...props}>
      <path d="M19 24H5a2 2 0 0 1-2-2V5H2V3h6V1.5C8 .673 8.673 0 9.5 0h5c.825 0 1.5.671 1.5 1.5V3h6v2h-1v17a2 2 0 0 1-2 2zm0-19H5v16.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V5zm-9 4a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0V9zm6 0a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0V9zm-2-7h-4v1h4V2z" />
    </svg>
  )
}
