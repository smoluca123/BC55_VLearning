import { PencilIcon } from '@heroicons/react/24/outline';
import {
  Avatar,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
export default function UserItem({ user, classes }) {
  const { taiKhoan, hoTen, email, soDT, maLoaiNguoiDung, tenLoaiNguoiDung } =
    user;
  const img = `https://ui-avatars.com/api/?name=${taiKhoan}`;

  return (
    <tr key={taiKhoan}>
      <td className={classes}>
        <div className="flex items-center gap-3">
          <Avatar src={img} alt={taiKhoan} size="sm" />
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {taiKhoan}
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal opacity-70"
            >
              {email}
            </Typography>
          </div>
        </div>
      </td>
      <td className={classes}>
        <div className="flex flex-col">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {hoTen}
          </Typography>
        </div>
      </td>
      <td className={classes}>
        <div className="flex flex-col">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {soDT}
          </Typography>
        </div>
      </td>
      <td className={classes}>
        <div className="w-max">
          <Chip
            variant="ghost"
            size="sm"
            value={tenLoaiNguoiDung}
            color={maLoaiNguoiDung === 'GV' ? 'red' : 'green'}
          />
        </div>
      </td>

      <td className={classes}>
        <Tooltip content="Edit User">
          <IconButton variant="text">
            <PencilIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>
      </td>
    </tr>
  );
}
