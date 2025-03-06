import './App.css'
import Article from "./components/Article"

function App() {
  return (
    <div className='App'>
      <Article name="zale" titles={["tutorial reactjs", "tutorial nextjs", "tutorial nodejs"]} />

      <br />

      <Article name="ven" titles={["tutorial reactjs", "tutorial nextjs", "tutorial nodejs"]} />

    </div>
  )
}

export default App
