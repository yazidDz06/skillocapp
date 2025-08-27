import React, { useEffect, useState } from "react";
import initialWorkers from "./workers"; 

function Clientinterface() {
  const [region, setRegion] = useState("");
  const [role, setRole] = useState("");
  const [startTime, setStartTime] = useState("");
  const [workers, setWorkers] = useState([]);
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
 const [showForum, setShowForum] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  // Convertir HH:MM en minutes pour comparaison fiable
  const toMinutes = (time) => {
    if (!time) return null;
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  // Charger depuis localStorage
  useEffect(() => {
    const data = localStorage.getItem("workers");
    if (data) {
      setWorkers(JSON.parse(data));
    } else {
      setWorkers(initialWorkers);
    }
  }, []);
 const handleSend = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }}
  const handleSearch = (e) => {
    e.preventDefault();

    const wantedTime = toMinutes(startTime);

    const filtered = workers.filter((w) => {
      const regionMatch = region
        ? w.region.toLowerCase().includes(region.toLowerCase())
        : true;

      const roleMatch = role
        ? w.role.toLowerCase().includes(role.toLowerCase())
        : true;

      const timeMatch = wantedTime
        ? toMinutes(w.startTime) >= wantedTime
        : true;

      return regionMatch && roleMatch && timeMatch;
    });

    setResults(filtered);
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Welcome to <span className="text-gray-800">SkillApp</span>
      </h1>

      {/* Formulaire de recherche */}
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Région (ex: Alger)"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="text"
            placeholder="Métier (ex: Plombier, Peintre)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {/* Résultats */}
      {searched && (
        <div className="mt-8 w-full max-w-3xl">
          {results.length === 0 ? (
            <p className="text-gray-500 text-center">Aucun résultat trouvé.</p>
          ) : (
            <div className="grid gap-4">
              {results.map((w) => (
                <div
                  key={w.id}
                  className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center border border-gray-200"
                >
                  <div>
                    <p className="font-bold text-gray-800">{w.name}</p>
                    <p className="text-gray-600 text-sm">
                      {w.role} – {w.region} – Début : {w.startTime}
                    </p>
                  </div>
                  <div className="p-6">
      {/* Bouton pour afficher/masquer le forum */}
      <button
        onClick={() => setShowForum(!showForum)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        {showForum ? "Fermer le forum" : "Ouvrir le forum"}
      </button>

      {/* Forum qui apparaît seulement si showForum est true */}
      {showForum && (
        <div className="mt-6 border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-bold mb-4">Forum de discussion</h2>

          {/* Liste des messages */}
          <div className="mb-4 max-h-40 overflow-y-auto border p-2 rounded">
            {messages.length === 0 ? (
              <p className="text-gray-500">Aucun message pour l’instant...</p>
            ) : (
              messages.map((msg, index) => (
                <p key={index} className="p-1 border-b">
                  {msg}
                </p>
              ))
            )}
          </div>

          {/* Champ de saisie */}
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border rounded px-2 py-1"
              placeholder="Écris un message..."
            />
            <button
              onClick={handleSend}
              className="bg-green-500 text-white px-3 py-1 rounded-lg"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Clientinterface;



