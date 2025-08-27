import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    

  const navigate = useNavigate();
  
const users = [{email : "yazidkhoualdi5@gmail.com", password : "1234", role :"client"},
    {email :"emailpro@gmail.com", password :"1111",role :"pro"}]


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((u)=>u.email === email && u.password === password);
    if (user){
        localStorage.setItem("currentUser",JSON.stringify(user));
        if(user.role ==="client"){
          navigate("/clientinterface")  
        }else{
            navigate("/Dashboard")
        }}else{
            alert("identifiants incorrects")
        }
    }



  return (


    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Connexion
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Adresse email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="exemple@email.com"
              required
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block text-gray-700 mb-1">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="********"
              required
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg transition"
           
          >
            Se connecter
          </button>
        </form>

        {/* Lien inscription */}
        <p className="mt-4 text-center text-gray-600">
          Pas encore de compte ?{" "}
          <a href="/register" className="text-yellow-500 hover:underline">
            S'inscrire
          </a>
        </p>
      </div>
    </div>
  );
}
