import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import UserDetailsView from '../components/UserDetailsView';
import { fetchUser } from '../UserActions';
import { getIsLoadingUsers, getUserById } from '../UserReducer';

const UserContainer = () => {
  const { login }: { login: string } = useParams();
  const user = useSelector(state => getUserById(state, login));
  const loading = useSelector(getIsLoadingUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(login));
  }, [dispatch, login]);

  return (
    <Spin spinning={loading}>
      <UserDetailsView {...user} />
    </Spin>
  );
};

export default UserContainer;
