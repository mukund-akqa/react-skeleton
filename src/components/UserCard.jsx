import { useNavigate } from "react-router-dom";
import Avatar from 'react-avatar';

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="user-card" onClick={() => navigate(`/post/${user.id}`)}>
      <Avatar name={user.name} className='avatar'/>
      <div className="info">
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
};
export default UserCard;
