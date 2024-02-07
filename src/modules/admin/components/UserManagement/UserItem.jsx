import {
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import {
  Avatar,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import { deleteUserAPI } from '../../../../apis/userManagement';
import toast from 'react-hot-toast';
export default function UserItem({
  user,
  classes,
  onSelect,
  onOpen,
  onOpenJoinCourse,
  fetchUsers,
}) {
  const { taiKhoan, hoTen, email, soDT, maLoaiNguoiDung, tenLoaiNguoiDung } =
    user;
  const img = `https://ui-avatars.com/api/?name=${taiKhoan}`;

  const handleDeleteUser = async () => {
    try {
      await deleteUserAPI(taiKhoan);
      await fetchUsers();
      onSelect(null);
      toast.success('Xóa thành công');
    } catch (error) {
      console.log(error);
      toast.error('Xóa thất bại : ' + error);
    }
  };

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
        <div className="flex gap-2">
          <Tooltip content="Ghi danh">
            <IconButton
              variant="text"
              onClick={() => {
                onSelect(user);
                setTimeout(onOpenJoinCourse, 0);
              }}
            >
              <PlusCircleIcon className="h-6 w-6 text-primary-main" />
            </IconButton>
          </Tooltip>
          <Tooltip content="Cập nhật người dùng">
            <IconButton
              variant="text"
              onClick={() => {
                onSelect(user);
                setTimeout(onOpen, 0);
              }}
            >
              <PencilIcon className="h-6 w-6" />
            </IconButton>
          </Tooltip>
          <Tooltip content="Xóa người dùng">
            <IconButton variant="text" onClick={handleDeleteUser}>
              <TrashIcon className="h-6 w-6 text-red-500" />
            </IconButton>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
}
