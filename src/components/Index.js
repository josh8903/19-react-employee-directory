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

  // When this component mounts/page loads, populate with employees
  componentDidMount() {
    API.getEmployeeData()
      .then((res) => {
        console.log(res);
        console.log(res.data.results);
        this.setState({
          allResults: res.data.results,
          filteredResults: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, the string in the input field becomes the filter criteria for the first/last name or the phone number
  handleFormSubmit = (event) => {
    event.preventDefault();

    const filtered = this.state.allResults.filter((result) => {
      return (
        result.name.first.includes(this.state.search) ||
        result.phone.includes(this.state.search) ||
        result.name.last.includes(this.state.search)
      );
    });

    this.setState({ filteredResults: filtered });
  };

  // responds to click on the first name to sort alphabetically
  // BROKEN (prints console.log "sorted", but no functionality)
  handleSort = (event) => {
    event.preventDefault();
    console.log("sort");
    const sorted = this.state.filteredResults.sort((a, b) => {
      return a.sorted > b.sorted;
    });
    this.setState({ filteredResults: sorted });
  };

  // renders the page with components
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
