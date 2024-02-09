import React, { useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import TableCourseInActive from './TableCourseInActive';
import TableCourseActive from './TableCourseActive';

export default function TabCourses({
  selectedUser,
  triggerRender,
  onTriggerRender,
}) {
  const [activeTab, setActiveTab] = useState('courseInactive');
  const data = [
    {
      label: 'Khóa học chờ xác thực',
      value: 'courseInactive',
      element: (
        <TableCourseInActive
          onTriggerRender={onTriggerRender}
          selectedUser={selectedUser}
        />
      ),
    },
    {
      label: 'Khóa học đã ghi danh',
      value: 'courseActive',
      element: (
        <TableCourseActive
          triggerRender={triggerRender}
          selectedUser={selectedUser}
        />
      ),
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none',
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? 'text-gray-900' : ''}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, element }) => (
          <TabPanel key={value} value={value}>
            {element}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
