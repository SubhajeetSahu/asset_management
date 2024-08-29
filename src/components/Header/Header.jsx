
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';

const Header = () => {
  return (
    <div className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <div className="text-xl font-semibold">Asset Management</div>
      <IconButton color="inherit" aria-label="user">
        <PersonIcon />
      </IconButton>
    </div>
  );
};

export default Header;
