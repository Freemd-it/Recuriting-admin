import React from 'react';
import DatePicker from 'react-datepicker';
import './announceDate.scss';

const announceDate = ({data, handleAnnounceDateChange}) => {
  return (
    <div className='announce_date_container'>
      <h4>서류 전형 발표 날짜</h4>
      <DatePicker
        selected={data.get('announceDate')}
        dateFormat="yyyy-MM-dd"
        onChange={handleAnnounceDateChange}
      />
    </div>
  );
};

export default announceDate;
