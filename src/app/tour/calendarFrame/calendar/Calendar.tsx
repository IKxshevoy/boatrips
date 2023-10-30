import React from "react";

const Calendar = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<script src="https://fareharbor.com/embeds/script/calendar/boatrips/items/292229/?fallback=simple&flow=536599"></script>',
      }}
    ></div>
  );
};

export default Calendar;
