import { useEffect } from "react";
import ReservationsTable from "../components/ReservationsTable";
import reservationsResponse from "../response/serverResponse";

const ReservationManagement = () => {
    useEffect(()=>{
        console.log('manaegmetn reredenr')
    },[])
  reservationsResponse.reservations.map((res) => {
    res.firstName = res.customer.firstName;
    res.lastName = res.customer.lastName;
    return res;
  });
  return (
    <ReservationsTable reservationsData={reservationsResponse.reservations} />
  );
};
export default ReservationManagement;
