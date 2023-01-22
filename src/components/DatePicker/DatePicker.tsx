import React, { useEffect, useState, HTMLAttributes, useRef } from 'react';

import {
  ArrowContainer,
  DateContainer,
  DateRowContainer,
  HiddenInput
} from './styles';
import {
  getDayName,
  getRelativeWeek,
  getDateString,
  isDateInTheFuture,
  getCurrentDate,
  triggerInputOnChangeEvent
} from './utils';
import prevArrow from './chevron-prev.png';
import nextArrow from './chevron-next.png';

const DatePicker: React.FC<HTMLAttributes<HTMLInputElement>> = (props) => {
  const [weekModifier, setWeekModifier] = useState(0);
  const [week, setWeek] = useState<Date[]>([]);
  const [date, setDate] = useState(getDateString(new Date()));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const newWeek = getRelativeWeek(weekModifier);

    setWeek(newWeek);
  }, [weekModifier]);

  useEffect(() => {
    if (inputRef.current) {
      triggerInputOnChangeEvent(inputRef.current, date);
    }
  }, [date]);

  return (
    <div>
      <HiddenInput type="date" readOnly {...props} ref={inputRef} />
      <DateRowContainer>
        <ArrowContainer
          alt="Previous"
          onClick={() => setWeekModifier(weekModifier + 1)}
          src={prevArrow}
        />
        {week.map((day) => {
          const isSelected = date === getDateString(day);
          const currentDate = getCurrentDate();

          const isFuture = isDateInTheFuture(
            getDateString(currentDate),
            getDateString(day)
          );

          return (
            <DateContainer
              role="button"
              tabIndex={0}
              key={day.toISOString()}
              onClick={() => setDate(getDateString(day))}
              isSelected={isSelected}
              isFuture={isFuture}
            >
              <div>{getDayName(day, 2)} </div>
              <div>{day.getDate()}</div>
            </DateContainer>
          );
        })}
        <ArrowContainer
          alt="Next"
          onClick={() => setWeekModifier(weekModifier - 1)}
          src={nextArrow}
        />
      </DateRowContainer>
    </div>
  );
};

export default DatePicker;
