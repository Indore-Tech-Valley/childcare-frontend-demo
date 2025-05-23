import React from "react";
import Countdown from "../Countdown/Countdown";
import Header from "../../pages/Header/Header";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import PastEvents from "../PastEvents/PastEvents";
import JoinUs from "../JoinUs/JoinUs";

const EventsPage = () => {
  return (
    <div>
      <Header
        title={`Join Us for Our Latest Events`}
        image={`https://weecarepediatrics.com/wp-content/uploads/2023/05/Child-Immunization.png`}
      />
      {/* <Countdown /> */}
      <UpcomingEvents/>
      <PastEvents/>
      <JoinUs/>
    </div>
  );
};

export default EventsPage;
