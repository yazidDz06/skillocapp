import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
      <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-500">Skilloc</h1>

        {/* Menu */}
        <nav className="space-x-6">
          <Link to="/messages" className="text-gray-700 hover:text-yellow-500">
            messages
          </Link>
          <Link to="/dashboardstats" className="text-gray-700 hover:text-yellow-500">
            Dashboard
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-yellow-500">
          Déconnexion
          </Link>
        </nav>
      </div>
    </header>
  );
}