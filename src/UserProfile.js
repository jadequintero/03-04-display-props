const name = "Jade";
const age = 31;
// const userProfile = <h2> Hello, i'M {name} and I'm {age}!<h2>;

function UserProfile(props){
  return <h1>Hi, my I'm {props.name} and I'm {props.age}</h1>
}

//const userName = <Hi, name="Jade", age="31"

export default UserProfile