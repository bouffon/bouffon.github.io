import {useState} from 'react';

const Home = () => {

    //let name = 'mario';
    const [name,setName] = useState('mario'); //useState can be any data type
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        setName('luigi');
        setAge(30);
    } 

    const handleClickAgain = (name,e) =>{
        console.log('hello ' + name, e.target );
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick= {handleClick}>Click me</button>
            <p>{name} is {age} years old</p>
            <button onClick= {(e) => handleClickAgain('mario',e)}>Click me again</button>
        </div> //handleClickAgain is applied within an anonymous function
     );
}

 
export default Home;