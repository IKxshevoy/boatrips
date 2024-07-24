import React from "react";

const Calendar = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<script src="https://fareharbor.com/embeds/script/calendar/boatrips/items/375985/?fallback=simple&full-items=yes&flow=536599"></script><script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"></script>',
      }}
    ></div>
  );
};

export default Calendar;
