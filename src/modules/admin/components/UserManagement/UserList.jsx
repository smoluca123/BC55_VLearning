import React from 'react';
import UserItem from './UserItem';

export default function UserList({
  users,
  onSelect,
  onOpen,
  onOpenJoinCourse,
  fetchUsers,
}) {
  return (
    <>
      {users.map((user, index) => {
        const isLast = index === users.length - 1;
        const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

        return (
          <UserItem
            key={user.taiKhoan}
            user={user}
            classes={classes}
            onSelect={onSelect}
            onOpen={onOpen}
            onOpenJoinCourse={onOpenJoinCourse}
            fetchUsers={fetchUsers}
          />
        );
      })}
    </>
  );
}
