export default function Sidebar() {
  return (
    <aside className="w-64 min-h-full px-4 py-8 flex flex-col bg-white transition-all duration-300 ease-in-out relative z-10 shadow-lg">
      <nav className="flex-grow overflow-y-auto space-y-9">
        {[
          "Pengenalan HTML & CSS",
          "Pengenalan HTML & CSS",
          "Pengenalan HTML & CSS",
          "Pengenalan HTML & CSS",
        ].map((text, idx) => (
          <a
            key={idx}
            href="#"
            className="flex w-full h-8 items-center justify-center p-[1px] rounded-lg bg-gradient-primary mb-3"
          >
            <div className="flex w-full h-full items-center justify-center bg-white hover:bg-gray-100 px-3 rounded-lg">
              <h1 className="text-center">{text}</h1>
            </div>
          </a>
        ))}
      </nav>
      <button className="flex items-center justify-center w-full bg-[#72d3bd] active:bg-[#1a6e6a] rounded-lg px-3 py-2 mb-4 transition-colors">
        <span className="sidebar-text text-center">New Chat</span>
      </button>
    </aside>
  );
}
