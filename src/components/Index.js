import React, { Component } from "react";
import SearchForm from "./SearchForm/SearchForm";
import ResultList from "./ResultList/ResultList";
import Hero from "./Hero/Hero";
import API from "../utils/API";

class Index extends Component {
  state = {
    search: "",
    allResults: [],
    filteredResults: [],
  };

  // init populates all employees and duplicates the array for us to filter
  // allResults array remains constant to eliminated further API calls
  componentDidMount() {
    API.getEmployeeData()
      .then((res) => {
        this.setState({
          allResults: res.data.results,
          filteredResults: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  // handles search input, adjusts value on the fly
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // filter on click search button, returns employees by name containing search term
  handleFormSubmit = (event) => {
    event.preventDefault();
    const filtered = this.state.allResults.filter((result) => {
      return (
        result.name.first.includes(this.state.search) ||
        result.name.last.includes(this.state.search)
      );
    });

    this.setState({ filteredResults: filtered });
  };

  // sort on click name col header
  handleSort = (event) => {
    event.preventDefault();
    // sort Z-A, runs if A-Z sort detected
    if (this.state.sort === "AZ name.first") {
      const sorted = this.state.filteredResults.sort((a, b) => {
        if (a.name.first > b.name.first) return -1;
        else return 1;
      });
      this.setState({ filteredResults: sorted, sort: "ZA name.first" });
      // sort A-Z, runs if Z-A sort not detected
    } else {
      const sorted = this.state.filteredResults.sort((a, b) => {
        if (a.name.first < b.name.first) return -1;
        else return 1;
      });
      this.setState({ filteredResults: sorted, sort: "AZ name.first" });
    }
  };

  // render components
  render() {
    return (
      <div>
        <Hero backgroundImage="./assets/img/bg.jpg">
          <h1>React Employee Directory</h1>
          <h4>A simple directory app built using react!</h4>
        </Hero>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList
          results={this.state.filteredResults}
          handleSort={this.handleSort}
        />
      </div>
    );
  }
}

export default Index;
