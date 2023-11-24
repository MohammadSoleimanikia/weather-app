import { useState, useEffect } from "react";

function Future(props) {
  const [data, setData] = useState([]);
  const [extractedData, setExtractedData] = useState([]);

  // Using useEffect for future prediction every time cityName changed future data requested from API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${props.cityName}&units=metric&appid=2270e97332ee6c4df43830271accfc5c`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log('Error:', error);
      }
    }
    fetchData();
  }, [props.cityName]);

  // each time data is received and available extracting data initialized
  useEffect(() => {
    // Data fetch from JSON
    function isToday(dateString) {
      const today = new Date();
      const itemDate = new Date(dateString);
      return (
        today.getDate() === itemDate.getDate() &&
        today.getMonth() === itemDate.getMonth() &&
        today.getFullYear() === itemDate.getFullYear()
      );
    }

    // Function to extract desired information
    function extractData(json) {
      if (!json.list) {
        return []; // Return an empty array if list is not available
      }

      // Filter out data for today
      const filteredData = json.list.filter(item => !isToday(item.dt_txt));

      // Group data by day
      const groupedData = filteredData.reduce((result, item) => {
        const day = item.dt_txt.split(' ')[0];
        if (!result[day]) {
          result[day] = [];
        }
        result[day].push(item);
        return result;
      }, {});

      // Calculate min and max temperature for each day
      const result = Object.keys(groupedData).map(day => {
        const temperatures = groupedData[day].map(item => item.main.temp);
        const minTemperature = Math.min(...temperatures);
        const maxTemperature = Math.max(...temperatures);
        const condition = groupedData[day][0].weather[0].main;

        return {
          day,
          condition,
          minTemperature,
          maxTemperature,
        };
      });

      return result;
    }

    // Call extractData inside useEffect to ensure data is available
    setExtractedData(extractData(data));
  }, [data]);

  return (
    <div className="future">
      {extractedData.map((item, index) => (
        <div className="future-item" key={index}>
          <p className="date-item">{item.day}</p>
          <div>
            <p className="condition-item">{item.condition}</p>
            <p className="temper-item">{`${item.minTemperature}/${item.maxTemperature}`}</p>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Future;
