import { Row, Col, Spin } from 'antd';
import React from 'react';

import { UserModel } from '../models/user-model';
import UserRow from './UserRowView';

interface UserListViewProps {
  data: UserModel[];
  loading: boolean;
}

const UserListView = ({ data, loading }: UserListViewProps) => (
  <Spin spinning={loading}>
    <div style={{ padding: '50px' }}>
      <Row gutter={16}>
        {data.map(userData => (
          <Col span={4} key={userData.node_id}>
            <UserRow {...userData} />
          </Col>
        ))}
      </Row>
    </div>
  </Spin>
);

export default UserListView;
