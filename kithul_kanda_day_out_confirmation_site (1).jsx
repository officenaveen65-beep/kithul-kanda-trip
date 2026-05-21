import { useState } from "react";

export default function KithulKandaTripSite() {
  const [responses, setResponses] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");
  const [showAdmin, setShowAdmin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !status) {
      alert("Please enter your name and select an option.");
      return;
    }

    const newResponse = {
      name,
      status,
      note,
    };

    setResponses((prev) => [...prev, newResponse]);
    setName("");
    setStatus("");
    setNote("");

    alert("Your response has been submitted successfully!");
  };

  const confirmedCount = responses.filter(
    (person) => person.status === "Coming"
  ).length;

  return (
    <div className="min-h-screen bg-green-50 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100">
          <div className="bg-green-700 text-white p-8 text-center">
            <h1 className="text-4xl font-bold tracking-wide">
              KITHUL KANDA RESORT
            </h1>

            <p className="mt-3 text-lg">Day Out Confirmation</p>

            <div className="mt-4 inline-block bg-white/20 px-5 py-2 rounded-full text-sm">
              13 JUNE
            </div>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                alt="Resort"
                className="rounded-2xl h-full object-cover shadow-md"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-green-700 mb-4">
                Confirm Your Participation
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Will You Join?
                  </label>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStatus("Coming")}
                      className={`flex-1 py-3 rounded-xl font-semibold transition text-white ${
                        status === "Coming"
                          ? "bg-green-800"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      Coming ✅
                    </button>

                    <button
                      type="button"
                      onClick={() => setStatus("Not Coming")}
                      className={`flex-1 py-3 rounded-xl font-semibold transition text-white ${
                        status === "Not Coming"
                          ? "bg-red-700"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      Not Coming ❌
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Special Note
                  </label>

                  <textarea
                    rows={4}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Food preference, transport details, etc..."
                    className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-bold text-lg transition"
                >
                  Confirm Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAdmin(!showAdmin)}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition"
          >
            {showAdmin ? "Hide Admin Panel" : "View Admin Panel"}
          </button>
        </div>

        {showAdmin && (
          <div className="mt-8 bg-white rounded-3xl shadow-lg p-6 border border-green-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-green-700">
                Member Responses
              </h2>

              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                Confirmed: {confirmedCount}
              </div>
            </div>

            {responses.length === 0 ? (
              <div className="text-gray-500 text-center py-6">
                No responses yet.
              </div>
            ) : (
              <div className="space-y-4">
                {responses.map((person, index) => (
                  <div
                    key={`${person.name}-${index}`}
                    className="border border-green-100 rounded-2xl p-4 bg-green-50"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">{person.name}</h3>

                      <span
                        className={`px-4 py-1 rounded-full text-white text-sm font-semibold ${
                          person.status === "Coming"
                            ? "bg-green-600"
                            : "bg-red-500"
                        }`}
                      >
                        {person.status}
                      </span>
                    </div>

                    {person.note && (
                      <p className="mt-3 text-sm text-gray-600">
                        {person.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="text-center mt-8 text-sm text-gray-500">
          KITHUL KANDA RESORT • 13 JUNE • DAY OUT
        </div>
      </div>
    </div>
  );
}
