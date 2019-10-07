import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        style={{ width: "60px" }}
        className="round-img"
      />
      <h3>{login}</h3>

      <div>
      
        <a href={html_url} className="btm btn-dark btn-sm my-1">
          Learn More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
