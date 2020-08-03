import React from "react";
import { Link } from "react-router-dom";
// import userService from '../../service/userService'

export class Saved extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { savedSpecialties } = this.props.user;
    return (
      <div className="saved">
        {savedSpecialties && (
          <div className="cards grid">
            {savedSpecialties.map((item, idx) => {
              return (
                <Link to={`/market/${item._id}`} key={idx}>
                  <div className="saved-item">
                    <h1 className="margin-center">{item.fullName}</h1>
                    <img src={item.profileImg} alt="profile" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
