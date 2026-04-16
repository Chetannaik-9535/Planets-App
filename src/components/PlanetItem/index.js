// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planetItemDetails} = props
  const {id, name, imageUrl, description} = planetItemDetails

  return (
    <div className="PlanetItem-container">
      {/*<h1 className="heading">PLANETS</h1>*/}
      <img src={imageUrl} className="image" alt={`planet ${name}`} />
      <h1 className="sub-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
