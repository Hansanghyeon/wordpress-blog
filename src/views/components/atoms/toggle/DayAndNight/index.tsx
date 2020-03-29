import React from 'react';
import './index.style.scss';

interface props {
  isDark?: boolean;
  onClick?: any;
}
const DayAndNightToggle = ({ isDark, onClick }: props) => {
  const _handleClick = () => {
    onClick();
  };
  return (
    <button
      type="button"
      className={`DayAndNight${isDark ? '-Night' : '-Day'}`}
      onClick={_handleClick}
    >
      <div className="toggleHandler">
        <div className="creater creater-1" />
        <div className="creater creater-2" />
        <div className="creater creater-3" />
      </div>
      <div className="star star-1" />
      <div className="star star-2" />
      <div className="star star-3" />
      <div className="star star-4" />
      <div className="star star-5" />
      <div className="star star-6" />
    </button>
  );
};

export default DayAndNightToggle;
