import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers, getIsLoadingUsers } from '../UserReducer';
import UserListView from '../components/UserListView';
import { fetchUsers } from '../UserActions';

const UsersContainer = () => {
  const loading = useSelector(getIsLoadingUsers);
  const data = useSelector(getUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <UserListView data={data} loading={loading} />;
};

export default UsersContainer;
