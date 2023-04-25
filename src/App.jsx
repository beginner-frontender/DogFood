import testData from "./assents/data.json";
import Card from "./components/Card/Card";
import Header from "./components/Header";

const promoData = ["=)", "*-*", "0|0", "x_x", ":)", ";(", "^_^"];
// map преабразовывает 1 элемент массива в другой для всех элементов
console.log(testData)

const Promo = (props) => {
    return (
        <div className="promo__block">
            <div className="promo__img"/>
            <p className="promo__text">{props.text  || "*-*"}</p>
        </div>
    )
}

const App = () => {
    return (<>
      <Header/>
      <div>
        <h1> First Page</h1>
        <div className="container">
          {testData.map((pro, i) => 
            (<Card key= {i} img={pro.pictures} name={pro.name} price={pro.price}/>)
            )}
          {promoData.map(el => <Promo key={`${el}1`} text={el}/>)}
        </div>
      </div>
    </>
    )
  }

export default App;