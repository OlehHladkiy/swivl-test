import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers, getLoadingUsers } from '../UserReducer';
import UsersListView from '../components/UsersListView';
import { fetchUsers } from '../UserActions';

const UsersContainer = () => {
  const loadingUsers = useSelector(getLoadingUsers);
  const users = useSelector(getUsers);

  const dispatch = useDispatch();

  console.log({ users, loadingUsers });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <UsersListView />;
};

export default UsersContainer;
