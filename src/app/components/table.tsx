'use client';

import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  StrictMode,
} from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import 'ag-grid-enterprise';
import {
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  createGrid,
} from 'ag-grid-community';
import { Data1, Data2, Data3, Data4 } from '../model/model';

export interface props {
  dataRow: (Data1 | Data2 | Data3 | Data4)[]
  dataCol: (ColDef | ColGroupDef)[]
  autoGroup?: ColDef
}

function Table({ dataRow, dataCol, autoGroup }: props) {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    {
      mission: 'Voyager',
      company: 'NASA',
      location: 'Cape Canaveral',
      date: '1977-09-05',
      rocket: 'Titan-Centaur ',
      price: 86580000,
      successful: true,
    },
    {
      mission: 'Apollo 13',
      company: 'NASA',
      location: 'Kennedy Space Center',
      date: '1970-04-11',
      rocket: 'Saturn V',
      price: 3750000,
      successful: false,
    },
    {
      mission: 'Falcon 9',
      company: 'SpaceX',
      location: 'Cape Canaveral',
      date: '2015-12-22',
      rocket: 'Falcon 9',
      price: 9750000,
      successful: true,
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: 'mission', headerName: 'Col B' },
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    { field: 'price' },
    { field: 'successful' },
    { field: 'rocket' },
  ]);

  const groupDefaultExpanded = 1;

  return (
    <div
      className={
        // "ag-theme-quartz-dark"
        "ag-theme-material"
      }
      style={{ width: '100%', height: '500px' }}
    >
      <AgGridReact rowData={dataRow} columnDefs={dataCol} autoGroupColumnDef={autoGroup} groupDefaultExpanded={groupDefaultExpanded}/>
    </div>
  )
}

export default Table