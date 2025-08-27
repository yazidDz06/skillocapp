

const workers = [
  {
    id: 1,
    name: "Mourad",
    role: "Plombier",
    region: "Alger",
    startTime: "09:00",
    contact: "ali@example.com",
  },
  {
    id: 2,
    name: "Khaled",
    role: "peintre",
    region: "Lyon",
    startTime: "10:30",
    contact: "sara@example.com",
  }]

const STORAGE_KEY = "workers";

if (!localStorage.getItem(STORAGE_KEY)) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(workers));
}

export default workers;
