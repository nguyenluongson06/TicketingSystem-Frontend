import { memo } from "react";
import '../css/tickets.css';

const Tickets = () => {
  return <div class='tickets_class'>
    <img class="avatar_class" src="https://vcdn1-giaitri.vnecdn.net/2023/08/03/blackpink-4614-1691044597.png?w=460&h=0&q=100&dpr=2&fit=crop&s=aJ3M-KRzhrzvOjjDlwrPjA"></img>
    <div class="ticket_main_content_class">
      <div class='ticket_content_date_class'>
        <h1 class='ticket_month_class'>AUG</h1>
        <h1 class='ticket_date_class'>20</h1>
      </div>
      <div class='ticket_content_class'>
        <h1>JYJ 2011 JYJ Worldwide Concert Barcelona</h1>
        <h2>Directly seated and inside for you to enjoy the show.</h2>
      </div>
    </div>

  </div>
};

export default memo(Tickets);