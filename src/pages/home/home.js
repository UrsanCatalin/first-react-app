import Container from "../../components/container/container";
import Counter from "../../components/counter/counter";

const Home = () => {
    return(
        <div id="home">
            
            <h2>
                <span>1#</span>Home Page
            </h2>
            <Container className="container" width={300} height={150} bgColor="darkred">
                <img src="logo192.png" width={150}/>
            </Container>
            <Container className="container" width={200} height={150} bgColor="darkblue"/>

            <Container className="container" width={100} height={150} bgColor="darkgreen">
                <h4 style={{color: 'black'}}>Container 1</h4>
            </Container>
            <Counter initialValue={10} maxValue={50}/>
            <Counter initialValue={20}/>
            <Counter initialValue={30}/>
            <Counter />
        </div>
    )
}

export default Home;