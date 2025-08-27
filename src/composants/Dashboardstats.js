import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function Dashboardstats() {
  const [stats, setStats] = useState({
    demandes: 0,
    offres: 0,
    candidatures: 0,
    messages: 0,
  });

  const [dernieresDemandes, setDernieresDemandes] = useState([]);

  // Simuler des données (tu pourras remplacer par ton API plus tard)
  useEffect(() => {
    setStats({
      demandes: 25,
      offres: 12,
      candidatures: 7,
      messages: 4,
    });

    setDernieresDemandes([
      { id: 1, client: "Entreprise A", service: "Développement Web", date: "2025-08-10" },
      { id: 2, client: "Client B", service: "Design UI/UX", date: "2025-08-12" },
      { id: 3, client: "Startup C", service: "Application Mobile", date: "2025-08-15" },
    ]);
  }, []);

  const data = [
    { name: "Jan", demandes: 4 },
    { name: "Fév", demandes: 6 },
    { name: "Mar", demandes: 8 },
    { name: "Avr", demandes: 12 },
    { name: "Mai", demandes: 18 },
    { name: "Juin", demandes: 25 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Tableau de bord (Pro)
      </h1>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold">Demandes reçues</h2>
          <p className="text-3xl font-bold text-yellow-500">{stats.demandes}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold">Offres disponibles</h2>
          <p className="text-3xl font-bold text-yellow-500">{stats.offres}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold">Candidatures envoyées</h2>
          <p className="text-3xl font-bold text-yellow-500">{stats.candidatures}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-3xl font-bold text-yellow-500">{stats.messages}</p>
        </div>
      </div>

      {/* Graphique d’évolution */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-xl font-semibold mb-4">Évolution des demandes</h2>
        <LineChart width={600} height={300} data={data}>
          <Line
            type="monotone"
            dataKey="demandes"
            stroke="#facc15"
            strokeWidth={3}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>

      {/* Tableau des dernières demandes */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Dernières demandes</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Client</th>
              <th className="p-3">Service</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {dernieresDemandes.map((d) => (
              <tr key={d.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{d.client}</td>
                <td className="p-3">{d.service}</td>
                <td className="p-3">{d.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

