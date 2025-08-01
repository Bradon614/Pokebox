import { Home, Gamepad2, CreditCard, Play, Newspaper } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-white shadow">
      <ul className="flex gap-8 py-4 px-6">
        <li className="flex flex-col items-center text-gray-500 hover:text-red-500">
          <Home size={24} />
          <span className="text-sm">Home</span>
        </li>
        <li className="flex flex-col items-center text-gray-500 hover:text-red-500">
          <Gamepad2 size={24} />
          <span className="text-sm text-center">Video Games<br />& Apps</span>
        </li>
        <li className="flex flex-col items-center text-gray-500 hover:text-red-500">
          <CreditCard size={24} />
          <span className="text-sm text-center">Trading Card<br />Game</span>
        </li>
        <li className="flex flex-col items-center text-gray-500 hover:text-red-500">
          <Play size={24} />
          <span className="text-sm text-center">Pokémon<br />Events</span>
        </li>
        <li className="flex flex-col items-center text-gray-500 hover:text-red-500">
          <Newspaper size={24} />
          <span className="text-sm">News</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
