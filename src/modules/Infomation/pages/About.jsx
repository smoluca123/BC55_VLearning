import React from 'react';
import BannerAbout from '../components/Abount/BannerAbout';
import ItemAbout from '../components/ItemAbout';
const dataContent = [
  {
    subTitle: 'V LEARNING ?',
    title: 'Nơi hội tụ kiến thức',
    text: 'Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của một lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một lớp học trực tuyến thú vị và hấp dẫn.',
    url: 'https://demo2.cybersoft.edu.vn/static/media/hero-flex.553afb64.png',
  },
  {
    subTitle: 'Chương trình học V learning',
    title: 'Hệ thống học hàng đầu',
    text: 'Giảng viên đều là các chuyên viên thiết kế đồ họa và giảng viên của các trường đại học danh tiếng trong thành phố: Đại học CNTT, KHTN, Bách Khoa,…Trang thiết bị phục vụ học tập đầy đủ, phòng học máy lạnh, màn hình LCD, máy cấu hình mạnh, mỗi học viên thực hành trên một máy riêng.100% các buổi học đều là thực hành trên máy tính. Đào tạo với tiêu chí: “học để làm được việc”, mang lại cho học viên những kiến thức hữu ích nhất, sát với thực tế nhất.',
    url: 'https://demo2.cybersoft.edu.vn/static/media/education-hero.62147e5c.png',
  },
  {
    subTitle: 'Tầm nhìn V learning',
    title: 'Đào tạo lập trình chuyên sâu',
    text: 'Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu cho sự phát triển công nghiệp phần mềm trong thời đại công nghệ số hiện nay, góp phần giúp sự phát triển của xã hội, đưa Việt Nam thành cường quốc về phát triển phần mềm.giúp người học phát triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.',
    url: 'https://demo2.cybersoft.edu.vn/static/media/olstudy.96378086.png',
  },
  {
    subTitle: 'Sứ mệnh V learning',
    title: 'Phương pháp đào tạo hiện đại',
    text: 'Sử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền tảng công nghệ giáo dục, kết hợp phương pháp truyền thống, phương pháp trực tuyến, lớp học đảo ngược và học tập dựa trên dự án thực tế, phối hợp giữa đội ngũ training nhiều kinh nghiệm và yêu cầu từ các công ty, doanh nghiệp. Qua đó, V learning giúp người học phát triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.',
    url: 'https://demo2.cybersoft.edu.vn/static/media/students.fc2d9ab7.png',
  },
];
export default function About() {
  return (
    <div>
      <div className="">
        <BannerAbout />
        <div className="">
          {dataContent.map(({ subTitle, title, text, url }, index) => {
            return (
              <ItemAbout
                subtitle={subTitle}
                title={title}
                content={text}
                url={url}
                isReverse={index % 2 !== 0 ? true : false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
