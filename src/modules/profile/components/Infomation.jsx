import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import InfomationBox from './InfomationBox';
import { useState } from 'react';
import MyCourses from './MyCourses/';
const data = [
  {
    label: 'Thông tin cá nhân',
    value: 'infomation',
    element: <InfomationBox />,
  },
  {
    label: 'Khóa học',
    value: 'courses',
    element: <MyCourses />,
  },
];
export default function Infomation() {
  const [activeTab, setActiveTab] = useState(data[0].value);

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            'bg-transparent border-b-2 border-primary-main shadow-none rounded-none',
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => {
              setActiveTab(value);
            }}
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
