import React from 'react'
import dynamic from 'next/dynamic';
import Table from '../components/table';
import { Poppins } from 'next/font/google';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { Data1, Data2, Data3, Data4, Data5 } from '../model/model';
import { DATA_DUMMY1, DATA_DUMMY2, DATA_DUMMY3, DATA_DUMMY4, DATA_DUMMY5 } from '../dummy/dummy_data_statistik';

const ColumnChart = dynamic(() => import('../components/column_chart'), { ssr: false });
const PieChart = dynamic(() => import('../components/pie_chart'), { ssr: false });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '700']
})

function DataStatistik() {

  let dataCol1: ColDef[] = [
    { field: 'daerah', rowGroup: true, hide: true },
    { field: 'tahun' },
    { field: 'jumlah' },
    { field: 'persentase' },
  ]

  let dataTable1: Data1[] = DATA_DUMMY1;

  let dataCol2: (ColDef | ColGroupDef)[] = [
    { field: 'pulau' },
    {
      headerName: 'Persentase Penduduk Miskin (%)',
      children: [
        { field: 'pp_perkotaan', headerName: 'Perkotaan' },
        { field: 'pp_perdesaan', headerName: 'Perdesaan' },
        { field: 'pp_total', headerName: 'Total' },
      ]
    },
    {
      headerName: 'Jumlah Penduduk Miskin (juta orang)',
      children: [
        { field: 'jp_perkotaan', headerName: 'Perkotaan' },
        { field: 'jp_perdesaan', headerName: 'Perdesaan' },
        { field: 'jp_total', headerName: 'Total' },
      ]
    },
  ]

  let dataRow2: Data2[] = DATA_DUMMY2;

  let dataCol3: (ColDef | ColGroupDef)[] = [
    { field: 'provinsi' },
    {
      headerName: 'Jumlah Penduduk Miskin (ribu)',
      children: [
        {
          headerName: 'Perkotaan',
          children: [
            { field: 'kota_sep_22', headerName: 'Sep 2022' },
            { field: 'kota_mar_23', headerName: 'Mar 2023' },
          ]
        },
        {
          headerName: 'Perdesaan',
          children: [
            { field: 'desa_sep_22', headerName: 'Sep 2022' },
            { field: 'desa_mar_23', headerName: 'Mar 2023' },
          ]
        },
        {
          headerName: 'Total',
          children: [
            { field: 'total_sep_22', headerName: 'Sep 2022' },
            { field: 'total_mar_23', headerName: 'Mar 2023' },
          ]
        },
      ]
    },
  ]

  let dataRow3: Data3[] = DATA_DUMMY3;

  let dataCol4: (ColDef | ColGroupDef)[] = [
    { field: 'provinsi' },
    {
      headerName: 'Garis Kemiskinan (Rp/kapita/bulan)',
      children: [
        {
          headerName: 'Perkotaan',
          children: [
            { field: 'kota_sep_22', headerName: 'Sep 2022' },
            { field: 'kota_mar_23', headerName: 'Mar 2023' },
          ]
        },
        {
          headerName: 'Perdesaan',
          children: [
            { field: 'desa_sep_22', headerName: 'Sep 2022' },
            { field: 'desa_mar_23', headerName: 'Mar 2023' },
          ]
        },
        {
          headerName: 'Total',
          children: [
            { field: 'total_sep_22', headerName: 'Sep 2022' },
            { field: 'total_mar_23', headerName: 'Mar 2023' },
          ]
        },
      ]
    },
  ]

  let dataRow4: Data4[] = DATA_DUMMY4;

  let dataCol5: (ColDef | ColGroupDef)[] = [
    { field: 'provinsi' },
    {
      headerName: 'September 22',
      children: [
        { field: 'gk_kapita_sep_22', headerName: 'GK per Kapita' },
        { field: 'jumlah_art_rt_sep_22', headerName: 'Rata-Rata Jumlah ART pada RT Miskin' },
        { field: 'gk_rt_sep_22', headerName: 'GK per RT Miskin' },
      ]
    },
    {
      headerName: 'Maret 23',
      children: [
        { field: 'gk_kapita_mar_23', headerName: 'GK per Kapita' },
        { field: 'jumlah_art_rt_mar_23', headerName: 'Rata-Rata Jumlah ART pada RT Miskin' },
        { field: 'gk_rt_mar_23', headerName: 'GK per RT Miskin' },
      ]
    },
  ]

  let dataRow5: Data5[] = DATA_DUMMY5;

  return (
    <div className='bg-neutral-50 p-10'>
      <div className='mb-4'>
        <div className={`${poppins.className} text-black font-bold text-2xl text-center`}>Halaman Data & Statistik</div>
        <div className={`${poppins.className} font-normal text-base text-center sm:mx-40 text-black`}>Melalui infografik, grafik, dan analisis mendalam, halaman ini memberikan gambaran komprehensif tentang distribusi pendapatan, akses pendidikan, layanan kesehatan, dan tantangan ekonomi lainnya yang dihadapi oleh individu dan komunitas yang terpinggirkan.</div>
      </div>

      <div className='sm:grid grid-cols-2 gap-4 mb-4'>
        <div className="card w-full bg-neutral-50 shadow-xl rounded-lg mb-4 sm:m-0">
          <div className="card-body">
            <h2 className={`${poppins.className} card-title font-normal text-black`}>Jumlah dan Persentase Penduduk Miskin, September 2012 – Maret 2023</h2>
            <ColumnChart />
          </div>
        </div>

        <div className="card w-full bg-neutral-50 shadow-xl rounded-lg">
          <div className="card-body">
            <h2 className={`${poppins.className} card-title font-normal text-black`}>Jumlah dan Persentase Penduduk Miskin menurut Pulau, Maret 2023</h2>
            <PieChart />
          </div>
        </div>
      </div>

      <div className="card w-full bg-neutral-50 shadow-xl rounded-lg mb-4">
        <div className="card-body">
          <h2 className={`${poppins.className} card-title font-normal text-black`}>Jumlah dan Persentase Penduduk Miskin Menurut Daerah, Maret 2022 – Maret 2023</h2>
          <Table dataRow={dataTable1} dataCol={dataCol1} autoGroup={{ headerName: 'Daerah' }} />
        </div>
      </div>

      <div className="card w-full bg-neutral-50 shadow-xl rounded-lg mb-4">
        <div className="card-body">
          <h2 className={`${poppins.className} card-title font-normal text-black`}>Jumlah dan Persentase Penduduk Miskin Menurut Daerah, Maret 2022 – Maret 2023</h2>
          <Table dataRow={dataRow2} dataCol={dataCol2} />
        </div>
      </div>

      <div className="card w-full bg-neutral-50 shadow-xl rounded-lg mb-4">
        <div className="card-body">
          <h2 className={`${poppins.className} card-title font-normal text-black`}>Jumlah Penduduk Miskin Menurut Provinsi, September 2022 dan Maret 2023</h2>
          <Table dataRow={dataRow3} dataCol={dataCol3} />
        </div>
      </div>

      <div className="card w-full bg-neutral-50 shadow-xl rounded-lg mb-4">
        <div className="card-body">
          <h2 className={`${poppins.className} card-title font-normal text-black`}>Garis Kemiskinan per Kapita Menurut Provinsi dan Daerah, September 2022 dan Maret 2023</h2>
          <Table dataRow={dataRow4} dataCol={dataCol4} />
        </div>
      </div>

      <div className="card w-full bg-neutral-50 shadow-xl rounded-lg">
        <div className="card-body">
          <h2 className={`${poppins.className} card-title font-normal text-black`}>Garis Kemiskinan per Rumah Tangga Menurut Provinsi dan Daerah, September 2022 dan Maret 2023</h2>
          <Table dataRow={dataRow5} dataCol={dataCol5} />
        </div>
      </div>
    </div>
  )
}

export default DataStatistik