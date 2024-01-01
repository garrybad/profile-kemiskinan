import React from 'react'
import dynamic from 'next/dynamic';

const ColumnChart = dynamic(() => import('../components/column_chart'), { ssr: false });

function DataStatistik() {
  return (
    <div className='bg-neutral-50'>
        <ColumnChart />
    </div>
  )
}

export default DataStatistik