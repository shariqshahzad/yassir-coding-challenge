import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { STATUSES, AREAS, SHIFTS } from "../constants/constants";
import { useRef, useState } from "react";

const ReservationTableFilter = ({ handleFilter }) => {
  const areaMultiselectRef = useRef(null);
  const shiftMultiselectRef = useRef(null);
  const statusMultiselectRef = useRef(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [status, setStatus] = useState("");
  const [shift, setShift] = useState("");
  const [area, setArea] = useState("");

  const onClearFilter = () => {
    if (area.length === AREAS.length)
      areaMultiselectRef.current.handleSelectDeselectAll();
    else {
      areaMultiselectRef.current.handleSelectDeselectAll();
      setTimeout(() => {
        areaMultiselectRef.current.handleSelectDeselectAll();
      }, 0);
    }
    if (shift.length === SHIFTS.length)
      shiftMultiselectRef.current.handleSelectDeselectAll();
    else {
      shiftMultiselectRef.current.handleSelectDeselectAll();
      setTimeout(() => {
        shiftMultiselectRef.current.handleSelectDeselectAll();
      }, 0);
    }
    if (status.length === STATUSES.length)
      statusMultiselectRef.current.handleSelectDeselectAll();
    else {
      statusMultiselectRef.current.handleSelectDeselectAll();
      setTimeout(() => {
        statusMultiselectRef.current.handleSelectDeselectAll();
      }, 0);
    }
    setFromDate('');
    setToDate('');
    handleFilter({ });
  };

  const onApplyFilter = () => {
    handleFilter({ fromDate, toDate, status, shift, area });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="filter-section row gy-2 gx-3 align-items-center">
        <div className="col-auto">
          <div className="input-group">
            <div className="input-group-text">From Date</div>
            <input
              onInput={(e) => setFromDate(e.target.value)}
              type="date"
              className="form-control"
              id="autoSizingInputGroup"
              value={fromDate}
              placeholder="Username"
            />
          </div>
        </div>
        <div className="col-auto">
          <div className="input-group">
            <div className="input-group-text">To Date</div>
            <input
              onInput={(e) => setToDate(e.target.value)}
              type="date"
              className="form-control"
              value={toDate}
              id="autoSizingInputGroup"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">
            Status
          </label>
          <div className="input-group">
            <div className="input-group-text">Status</div>
            <DropdownMultiselect
              ref={statusMultiselectRef}
              handleOnChange={(e) => setStatus(e)}
              options={STATUSES}
              name="Status"
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">
            Shift
          </label>
          <div className="input-group">
            <div className="input-group-text">Shift</div>
            <DropdownMultiselect
              ref={shiftMultiselectRef}
              handleOnChange={(e) => setShift(e)}
              options={SHIFTS}
              name="Shift"
            />
          </div>
        </div>
        <div className="col-auto me-auto">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">
            Area
          </label>
          <div className="input-group">
            <div className="input-group-text">Area</div>
            <DropdownMultiselect
              ref={areaMultiselectRef}
              handleOnChange={(e) => setArea(e)}
              options={AREAS}
              name="Area"
              selected={area}
            />
          </div>
        </div>
        <div className="col-auto">
          <button
            onClick={onClearFilter}
            type="button"
            className="btn btn-secondary me-2"
          >
            CLEAR
          </button>
          <button
            onClick={onApplyFilter}
            type="button"
            className="btn btn-dark"
          >
            APPLY
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReservationTableFilter;
