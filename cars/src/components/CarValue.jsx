import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({cars: {data, searchTerm}}) => //destructoring state to {cars: {data, searchTerm}} - kun interesseret i data og searchTerm
      data
         .filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
         .reduce((sum, car) => sum + car.cost, 0)
  );
  return <div className="car-value">Total Cost: {totalCost} kr.</div>;
}

export default CarValue;