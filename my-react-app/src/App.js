import React  from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//        <label htmlFor="bar">bar</label>
//        <input type="text" onChange={() => {console.log("I am clicked")}} />

//       </div>
//     )
//     // const greeting = "Hi, Tom!";
//     // const dom = <h1 className="foo">{greeting}</h1>
//   }
// }
// const App = () => {
//   const profiles = [
//     { name: "taro", age: 10 },
//     { name: "Hanako", age: 5 },
//     { name: "Noname", age: 5 },
//   ]
//   return (
//     <div>
//       {
//         profiles.map(profile) => {
//           return <User name={profile.name} age={profile.age} key={index} />
//         }
//       }
//       <User name={} />
//     </div>
//   )
// }
// const User = (props) => {
//   return <div>Hi, I am {props.name}, and {props.age} years old!</div>
// }
const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanaklo", age: 5},
    {name: "Han"},
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}
const User = (props) => {
  return <div>Hi, im {props.name} and {props.age}</div>

}
User.defaultProps = {
  age: 1
}
export default App;
