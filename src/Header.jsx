export default function Header(prop) {
  let score = prop.score
  let bestScore = prop.bestScore

  return (
    <div className="header">
      <h1 style={{
        fontWeight: 'normal'
      }}>ADEPTUS ASTARTES</h1>
      <div className="aquila"></div>
      <div className="scoreBoard">
        <p className="score">Score: {score}</p>
        <p className="score">Best Score: {bestScore}</p>
      </div>
    </div>
  )
}