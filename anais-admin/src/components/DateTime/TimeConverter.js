import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function TimeConverter(props) {

  const { timeToConvert } = props;

  const [minutes, setMinutes] = useState()
  const [hours, setHours] = useState()

  useEffect(() => {
    getFullTime(timeToConvert)
  }, [])

  const getFullTime = (timeToConvert) => {
    var num = timeToConvert
    var hoursTemp = Math.floor(num / 60)
    setHours(hoursTemp)
    var minutesTemp = num % 60
    setMinutes(minutesTemp)

  }

  return (
    <span> {hours}h {minutes}min</span>
  );
}

TimeConverter.propTypes = {
  timeToConvert: PropTypes.number
};