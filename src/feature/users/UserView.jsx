import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { feachUser } from "./userSlice";

export const UserView = () => {
  useEffect(() => {
    dispatch(feachUser());
  }, []);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  return (
    <div>
      <h2>list of user</h2>
      {user.loading && <h2>loading...</h2>}
      {!user.loading && user.error ? <h2>{user.error}</h2> : null}
      {!user.loading && user.users.length ?(
          <ul>
              {user.users.map(user=>(<li key={user.id}>{user.name}</li>))}
          </ul>
      ):null}
    </div>
  );
};
