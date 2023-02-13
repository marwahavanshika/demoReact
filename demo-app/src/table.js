import React, { Component } from 'react'

// class Table extends Component {
//   render() {
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Job</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Name1</td>
//             <td>Job1</td>
//           </tr>
//           <tr>
//             <td>Name2</td>
//             <td>job2</td>
//           </tr>
//           <tr>
//             <td>Name3</td>
//             <td>job3</td>
//           </tr>
//           {/* <tr>
//             <td>Dennis</td>
//             <td>Bartender</td>
//           </tr> */}
//         </tbody>
//       </table>
//     )
//   }
// }

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

//   const TableBody = () => {
//     return (
//        <tbody>
//            <tr>
//              <td>Name1</td>
//              <td>Job1</td>
//            </tr>
//            <tr>
//              <td>Name2</td>
//              <td>job2</td>
//            </tr>
//            <tr>
//              <td>Name3</td>
//              <td>job3</td>
//            </tr>
//       </tbody>
//     )
//   }
//   class Tables extends Component {
//     render() {
//       return (
//         <table>
//           <TableHeader />
//           <TableBody />
//         </table>
//       )
//     }
//   }

const TableBody = () => {
    return <tbody />
  }

class Table extends Component {
    render() {
      const { characterData } = this.props
  
      return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} />
        </table>
      )
    }
  }

export default Table