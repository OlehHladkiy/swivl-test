import { Row, Col, Descriptions, Image } from 'antd';
import format from 'date-fns/format';
import React from 'react';

import { UserModel } from '../models/user-model';

const UserDetailsView = ({
  login,
  followers,
  following,
  company,
  avatar_url,
  email,
  blog,
  bio,
  location,
  created_at,
}: UserModel) => (
  <div style={{ padding: '50px' }}>
    <Row gutter={16}>
      <Col span={8}>
        <div style={{ padding: '10px', border: '1px solid #f0f0f0' }}>
          <Image src={avatar_url} width="100%" />
        </div>
      </Col>
      <Col span={16}>
        <Descriptions title="User Info" layout="vertical" bordered>
          <Descriptions.Item label={<b>Login</b>}>{login}</Descriptions.Item>
          <Descriptions.Item label={<b>Followers</b>}>
            {followers}
          </Descriptions.Item>
          <Descriptions.Item label={<b>Following</b>}>
            {following}
          </Descriptions.Item>
          <Descriptions.Item label={<b>Company</b>}>
            {company || '—'}
          </Descriptions.Item>
          <Descriptions.Item label={<b>Email</b>}>
            {email || '—'}
          </Descriptions.Item>
          <Descriptions.Item label={<b>Location</b>}>
            {location || '—'}
          </Descriptions.Item>
          <Descriptions.Item label={<b>Blog</b>}>
            {blog ? (
              <a href={blog} rel="noopener noreferrer" target="_blank">
                {blog}
              </a>
            ) : (
              '—'
            )}
          </Descriptions.Item>
          <Descriptions.Item label={<b>Bio</b>}>{bio || '—'}</Descriptions.Item>
          <Descriptions.Item label={<b>Joined GitHub</b>}>
            {Boolean(created_at)
              ? format(new Date(created_at), 'dd MMMM yyyy')
              : '—'}
          </Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  </div>
);

export default UserDetailsView;
