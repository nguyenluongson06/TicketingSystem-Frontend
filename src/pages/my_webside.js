import { memo } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Login from "./login";
import Home from "./home";
import Music from "./music";
import Sport from './sport';
import StageAndArt from './stage_and_art';
import TalkShow from './talk_show';
import MyTickets from './my_tickets';

const MyWebside = () => {
  let MainPages
  switch (window.location.pathname) {
    case "/music":
      MainPages = Music
      break;
    case "/sport":
      MainPages = Sport
      break;
    case "/stage_and_art":
      MainPages = StageAndArt
      break;
    case "/talk_show":
      MainPages = TalkShow
      break;
    case "/my_tickets":
      MainPages = MyTickets
      break;
    case "/login":
      MainPages = Login
      break;
    default:
      MainPages = Home
      break;
  }

  return <di>
    <Navbar />
    <MainPages />
    <Footer />
  </di>;
}
export default memo(MyWebside);