// import React, { useState } from "react";
// import { useTable } from "react-table";

// const Table = () => {
//   // Define state
//   const [cellValue, setCellValue] = useState("");

//   // Add data here to show in table
//   const data = React.useMemo(
//     () => [
//       {
//         reactCol1: "hey",
//         reactCol2: "world"
//       },
//       {
//         reactCol1: "her",
//         reactCol2: "is the"
//       },
//       {
//         reactCol1: "Example",
//         reactCol2: "react-table"
//       }
//     ],
//     []
//   );

//   // Define column of the table
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "React",

//         // Accessor is the "key" in the data
//         accessor: "reactCol1"
//       },
//       {
//         Header: "Table",
//         accessor: "reactCol2"
//       }
//     ],
//     []
//   );

//   // Function to get cell value
//   const getCellValue = (cell) => {
//     setCellValue(cell.value);
//   };

//   // Create the instance of table by
//   // using hooks of react-table
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow
//   } = useTable({ columns, data });

//   return (
//     <>
//       {/* show cell value */}
//       <h3>Select cell value: {cellValue}</h3>
//       <table {...getTableProps()}
//         style={{ border: "1px solid blue" }}>

//         <thead>
//           {headerGroups}
//         </thead>
//       </table>
//     </>
//   );
// };

// export default Table;
