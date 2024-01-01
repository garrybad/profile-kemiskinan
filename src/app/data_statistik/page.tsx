import React from 'react'
import dynamic from 'next/dynamic';

const ColumnChart = dynamic(() => import('../components/column_chart'), { ssr: false });
const PieChart = dynamic(() => import('../components/pie_chart'), { ssr: false });

function DataStatistik() {
  return (
    <div className='bg-neutral-50'>
        <ColumnChart />
        <PieChart />
    </div>
  )
}

export default DataStatistik