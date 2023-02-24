import FlexChild from "./FlexChild"

const FlexParent = ({mode}) => {

  const sizes = [64, 64, 64]
  const wides = [64, 64, 64]
  if(mode === "1"){
    sizes[1] = 128
  } 
  if(mode === "2"){
    wides[2] = 128
  } 
  if(mode === "3"){
    wides[0] = 256
  } 

  return (
    <div className = "flex-parent">
      <FlexChild key="1" size={sizes[0]} wide={wides[0]}/>
      <FlexChild key="2" size={sizes[1]} wide={wides[1]}/>
      <FlexChild key="3" size={sizes[2]} wide={wides[2]}/>
    </div>
  )
}

export default FlexParent