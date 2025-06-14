import React,{useState,useEffect} from 'react'

const Intro = () => {
  const [index, setIndex] = useState(false)
  
  useEffect(() => {
    const intervalDelayMilliseconds = 3990
    const interval = setInterval(() => {
      setIndex(true)
    }, intervalDelayMilliseconds)
    return () => clearInterval(interval)
  })

  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16)
    return '#' + n.slice(0, 6)
  }

  const lineElements = []

  const randomColors = []

  for (let i = 0; i < 50; i++) {
    randomColors.push(randomHexColorCode())
  }
  randomColors.map((color) => {
    const randomMargin = Math.floor(Math.random() * 1000)

    lineElements.push(
      <div className='line' style={{
        '--c':`${color}`,
        '--m':`${randomMargin}`
      }}></div>
    )
  })

  return (
    <div>
      <div className="background">
      {/* {index?<div className="aman">this was CSS btw</div>:null} */}
        <div className="logo">
          <div className="brush1">
            <div className="color"></div>
            <div className="lines flex">
              {index ? lineElements.map((e) => e) : null}
            </div>
          </div>
          <div className="brush2">
            <div className="color2"></div>
          </div>
          <div className="brush3"></div>
        </div>
        
      </div>
    </div>
  )
}

export default Intro