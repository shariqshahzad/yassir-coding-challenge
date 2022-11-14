import ReservationsTableBody from "./ReservationsTableBody";
import ReservationsTableHead from "./ReservationsTableHead";
import { useState,useRef } from "react";
import ReservationTableFilter from "./ReservationTableFilter";
import { dateFilter } from "../utils/utils";

const ReservationsTable = ({ reservationsData }) => {
  const filteredData = useRef(...reservationsData);
  const [tableData, setTableData] = useState(reservationsData);
  const [renderHead,setRenderHead] = useState(0);

  const columns = [
    { label: "Id", accessor: "id" },
    { label: "First Name", accessor: "firstName" },
    { label: "Last Name", accessor: "lastName" },
    { label: "Status", accessor: "status" },
    { label: "Date", accessor: "businessDate" },
    { label: "Shift", accessor: "shift" },
    { label: "Area", accessor: "area" },
  ];

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  const handleFilter = ({ toDate, fromDate, shift, status, area }) => {
    filteredData.current = reservationsData.filter((td) => {
      return (
        (status?.length > 0 ? status.includes(td.status) : true) &&
        (shift?.length > 0 ? shift.includes(td.shift) : true) &&
        (area?.length > 0 ? area.includes(td.area) : true) &&
        dateFilter(td.businessDate, toDate, fromDate)
      );
    });
    setTableData([...filteredData.current]);
    setRenderHead(renderHead+1);
    // .current.clearSearchFields();
  };

  const columnSearchHandler = (accessor, value) => {
    const searchAppliedData = filteredData.current.filter((reservation) =>
      reservation[accessor].toString().toLowerCase().includes(value)
    );
    setTableData(searchAppliedData);
  };

  return (
    <div>
      <ReservationTableFilter handleFilter={handleFilter} />
      <table className="table">
        <ReservationsTableHead
          key={renderHead}
          columnSearchHandler={columnSearchHandler}
          columns={columns}
          handleSorting={handleSorting}
        />
        <ReservationsTableBody columns={columns} tableData={tableData} />
      </table>
    </div>
  );
};

export default ReservationsTable;
