import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import {useDispatch,useSelector} from "react-redux"
import {logoutAction} from "../reducers/user"

const UserProfile = () => {
  const dispatch = useDispatch()
  const id = useSelector((state)=>state.user.me?.id)
  const onLogOut = useCallback(() => {
    dispatch(logoutAction())
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>JF</Avatar>} title={id} />
      <Button onClick={onLogOut}>LOG-OUT</Button>
    </Card>
  );
};

export default UserProfile;
