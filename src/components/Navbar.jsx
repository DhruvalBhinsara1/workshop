export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-100/80 backdrop-blur-sm text-black py-3 px-9 flex justify-between items-center">
      <div className="font-bold text-xl">SneakPeak.co</div>
      <ul className="flex space-x-6">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
