import React from 'react';
import UserList from './UserList';
import { Typography } from '@material-tailwind/react';

export default function UserTable({
  TABLE_HEAD,
  users,
  onSelect,
  onOpen,
  onOpenJoinCourse,
  fetchUsers,
}) {
  return (
    <table className="mt-4 w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {TABLE_HEAD.map((head) => (
            <th
              key={head}
              className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                {head}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <UserList
          users={users}
          onSelect={onSelect}
          onOpen={onOpen}
          onOpenJoinCourse={onOpenJoinCourse}
          fetchUsers={fetchUsers}
        />
      </tbody>
    </table>
  );
}
