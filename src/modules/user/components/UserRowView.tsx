import React from 'react';
import { Card, Image } from 'antd';
import { Link } from 'react-router-dom';

import { UserModel } from '../models/user-model';

const UserRowView = ({ login, avatar_url, html_url }: UserModel) => (
  <Card
    style={{
      marginBottom: '16px',
    }}
    hoverable
    cover={
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image height={100} width={100} src={avatar_url} />
      </div>
    }
  >
    <Card.Meta
      title={
        <Link style={{ color: 'initial' }} to={`/users/${login}`}>
          <span>{login}</span>
        </Link>
      }
      description={
        <a href={html_url} rel="noopener noreferrer" target="_blank">
          {html_url}
        </a>
      }
    />
  </Card>
);

export default UserRowView;
