import { useEffect, useState } from "react";

const ReservationsTableHead = ({
  columns,
  tableData,
  handleSorting,
  columnSearchHandler,
}) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  useEffect(()=>{
    console.log('updates')
  },[])
  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor }) => {
          const cl =
            sortField === accessor && order === "asc"
              ? "up"
              : sortField === accessor && order === "desc"
              ? "down"
              : "default";
          return (
            <th
              key={accessor}
              onClick={() => handleSortingChange(accessor)}
              className={cl}
            >
              {label}
            </th>
          );
        })}
      </tr>
      <tr>
        {columns.map(({ label, accessor }) => {
          return (
            <td key={accessor}>
              {accessor === "firstName" || accessor === "lastName" ? (
                <input
                  onChange={(e) =>
                    columnSearchHandler(accessor, e.target.value)
                  }
                  type="text"
                  id="filter"
                  placeholder={label}
                />
              ) : (
                ""
              )}
            </td>
          );
        })}
      </tr>
    </thead>
  );
};

export default ReservationsTableHead;
