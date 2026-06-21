// components/layout/Navbar.jsx

export default function Navbar() {

  const email = localStorage.getItem("email");

  return (
    <div className="bg-white h-20 shadow-sm flex justify-between items-center px-6">

      <div>
        <h1 className="font-bold text-2xl">
          Insurance Management System
        </h1>
      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">
          <p className="font-semibold">
            {email}
          </p>

          <p className="text-sm text-slate-500">
            Logged In User
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          {email?.charAt(0)?.toUpperCase()}
        </div>

      </div>

    </div>
  );
}