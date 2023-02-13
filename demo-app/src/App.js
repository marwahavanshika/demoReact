import React, { Component } from 'react'
import Table from './table'

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <Tables />
//       </div>
//     )
//   }
// }


// class App extends Component {
//   render() {
//     const characters = [
//       {
//         name: 'name1',
//         job: 'Job1',
//       },
//       {
//         name: 'name2',
//         job: 'job2',
//       },
//       {
//         name: 'name3',
//         job: 'job2',
//       },
//       // {
//       //   name: 'name4',
//       //   job: 'Bartender',
//       // },
//     ]


//     return (
//       <div className="container">
//         <Table characterData={characters} />
//       </div>
//     )
//   }
// }

//states

class App extends Component {
  state = {
    characters: [

      {
        name: 'name1',
        job: 'Job1',
       },
       {
        name: 'name2',
         job: 'job2',
       },
       {
         name: 'name3',
          job: 'job3',
      },

    ]
  }
}

removeCharacter = (index) => {
  const { characters } = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}

export default App

