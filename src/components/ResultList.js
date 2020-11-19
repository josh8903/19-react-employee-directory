import React from "react";

function ResultList(props) {
  return (
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Profile Photo</th>
      <th scope="col" onClick={props.handleSort}>Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
      {props.results.map((result, index) => {
       return  (

        <tr key={index}>
          <td><img alt="picture" src={result.picture.thumbnail}/></td>
          <td>{result.name.first} {result.name.last}
          </td>
          <td>{result.phone}
          </td>
          <td>{result.email}
          </td>
          <td>{result.location.city}
          </td>
        </tr>
      )})}
      </tbody>
      </table>
  );
}

export default ResultList;

/* <img alt={result.picture.thumbnail} </td>
          className="img-fluid" src={result.images.original.url} /> */
