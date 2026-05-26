import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <div className="flex">

        {/* Sidebar */}

        <div className="w-64 min-h-screen bg-zinc-900 border-r border-zinc-800 p-6">

          <h1 className="text-2xl font-bold text-blue-500">
            Dashboard
          </h1>

          <div className="mt-10 space-y-4">

            <button className="w-full text-left px-4 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-all">
              Home
            </button>

            <button className="w-full text-left px-4 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-all">
              Profile
            </button>

            <button className="w-full text-left px-4 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-all">
              Settings
            </button>

          </div>

        </div>

        {/* Main Content */}

        <div className="flex-1 p-10">

          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="text-zinc-400 mt-3">
            This is your dashboard homepage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold">
                Users
              </h2>

              <p className="text-3xl font-bold mt-4">
                1,240
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold">
                Revenue
              </h2>

              <p className="text-3xl font-bold mt-4">
                $12K
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold">
                Orders
              </h2>

              <p className="text-3xl font-bold mt-4">
                320
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;