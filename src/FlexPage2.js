import FlexParent from "./FlexParent"

const FlexPage2 = () => {
  return (
    <div className="flex-page">
      <FlexParent key="1" mode="1"/>
      <FlexParent key="2" mode="2"/>
      <FlexParent key="3" mode="3"/>            
    </div>
  )
}

export default FlexPage2