import React from 'react'

const MenuBar = (props) => {

  let handleSelectionChange = (e) => {
    props.onSelectionChange(e.target.id)
    document.querySelector(".active").classList.remove("active")
    document.querySelector(`#${e.target.id}`).classList.add("active")
  }

  return (
    <div className="ui four item menu">
      <a className="item active" id="profile" onClick={handleSelectionChange}>
        <i className="user large icon" id="profile" />
      </a>

      <a className="item" id="photo" onClick={handleSelectionChange}>
        <i className="photo large icon" id="photo" />
      </a>

      <a className="item" id="cocktail" onClick={handleSelectionChange}>
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a className="item" id="pokemon" onClick={handleSelectionChange}>
        <i className=" themeisle large icon" id="pokemon" />
      </a>
    </div>
  )

}

export default MenuBar
