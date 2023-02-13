import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name1</td>
            <td>Job1</td>
          </tr>
          <tr>
            <td>Name2</td>
            <td>job2</td>
          </tr>
          <tr>
            <td>Name3</td>
            <td>job3</td>
          </tr>
          {/* <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr> */}
        </tbody>
      </table>
    )
  }
}

export default Table