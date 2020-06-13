import React from 'react';

const BgColor = ({bgColor,setBgColor}) => {
      return (
        <div>
          background color:
          <select value={bgColor} onChange={event=>setBgColor(event.target.value)}>
            <option>white</option>
            <option>black</option>
          </select>
        </div>
      )
}

export default BgColor;
