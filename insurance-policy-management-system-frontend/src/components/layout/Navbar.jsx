export default function Navbar() {

  const email =
    localStorage.getItem("email");

  const role =
    localStorage.getItem("role");

  return (
    <div className="bg-white h-20 px-6 shadow flex items-center justify-between">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">

        <div className="text-right">

          <p className="font-semibold">
            {email}
          </p>

          <p className="text-sm text-gray-500">
            {role}
          </p>

        </div>

        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

          {email?.charAt(0).toUpperCase()}

        </div>

      </div>

    </div>
  );
}