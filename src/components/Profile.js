import React from 'react'


function Profile(){
  const firstName = "Amy";
  const lastName = "Mansell";

    return(  
    <aside>
        <div className="profile">
          <img className="profile__image" src="./profile-hex.png" />
        </div>
        <br />
        <div className="profile__name">
          <h2><span className="profile--bold">{firstName}</span> {lastName}</h2>
        </div>
    </aside>
)
}

export default Profile