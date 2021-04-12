import React, { useEffect, useState } from "react";
import apis from "../apis";
/*
class SortDataByAge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: [],
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    this.setState({ data: await apis.sortDataByAge() });
    this.setState({ isLoading: false });
  };

  render() {
    const { data, isLoading } = this.state;
    if (!isLoading) {
      console.log(isLoading);
      console.log(data.data);
      // return <div>helloo</div>;
      //return data.data[0]._id;
      return data.data.map((element) => {
        return (
          <li>
            ID: {element.ID}, Name: {element.FirstNameLastName}, Email:{" "}
            {element.EmailAddress}
          </li>
        );
      });
      //return data.map((element) => <li>{element}</li>);
    } else {
      console.log(isLoading);
      return <div>Loading Still</div>;
    }
  }
}*/

const SortDataByAge = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  async function getData() {
    try {
      setLoading(true);
      const data = await apis.sortDataByAge();
      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  if (error) return "Failed to load resource A";
  let list;
  if (!loading) {
    list = data.data.map((element) => {
      return (
        <li key={element.ID}>
          ID: {element.ID}, Name: {element.FirstNameLastName}, Email:{" "}
          {element.EmailAddress}
        </li>
      );
    });
  }
  const loop = () => {
    let list = [];
    for (var i = 0; i < data.data.length; i++) {
      list.push(
        "ID: " +
          data.data[i].ID +
          " Name: " +
          data.data[i].FirstNameLastName +
          " Email: " +
          data.data[i].EmailAddress
      );
    }
    return list;
  };
  return loading ? "Loading..." : loop();
};

export default React.memo(SortDataByAge);
