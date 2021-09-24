import React from "react";

import { Link } from "react-router-dom";

export default function Header({ username }) {
  return (
    <div className="flex border-b p-4">
      <div className="flex items-center">
        <Link to={`/p/${username}`} className="flex items-center">
          <img
            className="rounded-full mr-4 h-8 w-8 flex"
            src={`/images/avatars/${username}.jpg`}
            alt={`${username} profile`}
          />
          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
}
