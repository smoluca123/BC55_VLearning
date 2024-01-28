import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import InfomationBox from './InfomationBox';
export default function Infomation() {
  const data = [
    {
      label: 'Thông tin cá nhân',
      value: 'infomation',
      element: <InfomationBox />,
    },
    {
      label: 'Khóa học',
      value: 'courses',
      element: <h1>Khoa hoc</h1>,
    },
  ];

  return (
    <Tabs value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
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
