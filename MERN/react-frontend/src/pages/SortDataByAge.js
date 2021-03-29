import React, { Component } from "react";
import apis from "../apis";

class SortDataByAge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    this.setState({ data: await apis.sortDataByAge() });
  };

  render() {
    const { data, isLoading } = this.state;
    console.log(data);
    return <div>Finished Sorting Data by Age</div>;
  }
}

export default SortDataByAge;
