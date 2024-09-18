import PropTypes from "prop-types";
import { getAvatar } from "../../utils/generate-image";

export function FollowItem({ name, user }) {
  const avatar = getAvatar(
    `${name + Math.floor(Math.random() * 1000)}@gmail.com`
  );

  return (
    <div className="flex justify-between items-center py-3 hover:bg-zinc-800 transition duration-200">
      <div className="flex items-center">
        <img
          src={avatar}
          alt="user avatar"
          className="w-12 h-12 mr-3 rounded-full"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-gray-500">@{user}</p>
        </div>
      </div>
      <button className="bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-twitter-light-gray transition duration-200">
        Follow
      </button>
    </div>
  );
}

FollowItem.propTypes = {
  name: PropTypes.string,
  user: PropTypes.string,
};
