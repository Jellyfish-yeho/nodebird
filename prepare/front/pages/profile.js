import React from "react";
import Head from "next//head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import {useSelector} from "react-redux"

const Profile = () => {
  
  const me = useSelector((state)=>state.user.me)
  console.log("me:",me)
  const followerList = [{nickname: '해파리'},{nickname: '테스터1'}, {nickname: '테스터2'}];
  const followingList = [{nickname: '범슈슈'},{nickname: '테스터1'}, {nickname: '테스터2'}];
  return (
    <>
      <Head>
        <title>내 프로필 | {me}</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList}/>
        <FollowList header="팔로워 목록" data={followerList}/>
      </AppLayout>
    </>
  );
};

export default Profile;
