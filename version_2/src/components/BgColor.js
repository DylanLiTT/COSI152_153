import React from 'react';

const BgColor = ({bgColor,setBgColor}) => {
      return (
        <div>
          Day/Night Mode:
          <select value={bgColor} onChange={event=>setBgColor(event.target.value)}>
            <option>white</option>
            <option>black</option>
          </select>
        </div>
      )
}

export default BgColor;
