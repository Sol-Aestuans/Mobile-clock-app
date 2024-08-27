import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTheme } from './useTheme';

// Custom hook for fetching data and location
const DateAndLocation = () => {
    const [currentTime, setCurrentTime] = useState(null);
    const [location, setLocation] = useState(null);
    const [greeting, setGreeting] = useState("");
    const [isNight, setIsNight] = useState(false)
    const [timezone, setTimezone] = useState("");
    const [fullTimezone, setFullTimezone] = useState(""); // unabbreviated timezone
    const [timePeriod, setTimePeriod] = useState("");
    const [day, setDay] = useState("");
    const [weekDay, setWeekDay] = useState("fdsf");
    const [weekNum, setWeekNum] = useState("");
    const { setTheme } = useTheme();
  
    useEffect(() => {
      const fetchTimeInfo = async () => {
        try {
          const response = await axios.get('http://worldtimeapi.org/api/ip');
          const data = response.data;
          const datetime = new Date(data.datetime);
          const hours = datetime.getHours();
          const rawMinutes = datetime.getMinutes(); // potentially need to append a zero
          const minutes = rawMinutes < 10 ? `0${rawMinutes}` : rawMinutes;
          const timeConversion = hours > 12 ? hours - 12 : hours === 0 ? 1 : hours ;
          const currentTime = `${timeConversion}:${minutes}`;

          setFullTimezone(data.timezone);
          setTimePeriod(hours >= 12 ? 'PM' : 'AM');
          setTimezone(data.abbreviation);
          setDay(data.day_of_year);
          setWeekDay(data.day_of_week);
          setWeekNum(data.week_number);
          
          // conditionally set greeting message based on time
          if(hours >= 5 && hours < 12){
            setIsNight(false);
            setGreeting("Good morning");
            setTheme("day");
          } else if(hours >= 12 && hours < 18){
            setIsNight(false);
            setGreeting("Good afternoon");
            setTheme("day");
          } else if (hours >= 18 || hours < 5){
            setIsNight(true);
            setGreeting("Good evening");
            setTheme("night");
          }
  
          // fetch location
          const locationResponse = await axios.get(`http://ip-api.com/json/${data.client_ip}`);
          const locationData = locationResponse.data;
          const location = `${locationData.city}, ${locationData.regionName}`;
  
          setCurrentTime(currentTime);
          setLocation(location);

          console.log(data)
          console.log("----------", fullTimezone)
        } catch (error) {
          console.log('Error fetching current time and location:', error);
        }
      }
  
      fetchTimeInfo();
   
  
      // fetch time every minute
      const intervalId = setInterval(fetchTimeInfo, 60000);
  

      
      // Clear interval on unmount
      return () => clearInterval(intervalId);
    }, []);
  
    return { currentTime, location, greeting, isNight, fullTimezone, timezone, timePeriod, day, weekDay, weekNum };
  };

export default DateAndLocation;