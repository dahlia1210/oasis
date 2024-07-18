import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //1.
  const numBookings = bookings.length;
  //2/
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  //3.
  const checkins = confirmedStays.length;
  //4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        color="blue"
        value={numBookings}
        title="Bookings"
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        color="green"
        value={formatCurrency(sales)}
        title="Sales"
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        color="indigo"
        value={checkins}
        title="Check-ins"
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        color="yellow"
        value={Math.round(occupation * 100) + '%'}
        title="Occupancy rate"
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
