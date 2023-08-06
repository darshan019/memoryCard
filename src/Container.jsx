import { levelOneData, levelTwoData } from "./data";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";


function shuffle(arr) {
  let count = 0
  while(count < arr.length) {
    let currentIndex = count
    let randomIndex = Math.floor(Math.random() * arr.length)

    let temp = arr[currentIndex]
    arr[currentIndex] = arr[randomIndex]
    arr[randomIndex] = temp

    count++
  }
  return arr
}

function Container() {

  const [data, setData] = useState(JSON.parse(JSON.stringify(levelOneData)))
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [resetFlag, setResetFlag] = useState(false)
  
  
  function handleClick(id) {
    const index = data.findIndex(x => x.id === id)

    if(data[index].clicked === false) {

      setData(prevData => {
        const newData = [...prevData]
        newData[index].clicked = true
        return newData
      })

      setScore(score + 1)
    }
    else {
      alert('Game Over')
      setScore(0)
      setResetFlag(true)
      return
    }
    
  }

  useEffect(() => {
    if(resetFlag) setData(JSON.parse(JSON.stringify(levelOneData)))
    setResetFlag(false)
  }, [resetFlag])

  useEffect(() => {
    setData(shuffle(data))
  }, [data])

  useEffect(() => {
    if(score === 9) {
      setData(JSON.parse(JSON.stringify(levelTwoData)))
    }
    else if(score === 18) {
      alert("You have completed your crusade brother!")
      setScore(0)
      setResetFlag(true)
    }
    score > 0 ? setBestScore(prev => prev < score ? score : prev) : null
  }
  , [score])

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <div className="container">
        {data.map(chapter => {
          return (
            <div className="card" key={chapter.id}>
              <div className="img-box" onClick={() => handleClick(chapter.id)} style={{
              backgroundImage: `url('${chapter.image}')`
            }}></div>
            <p>{chapter.name}</p>
            </div>
          )
        })}
      </div>
        <Footer />
    </>
  )
}

export default Container