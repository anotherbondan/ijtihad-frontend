import React from "react";

const Loader: React.FC = () => {
  const colors = ["#FDF7E1", "#FCEEC4", "#F0CE8C", "#E7B767"];

  return (
    <div className="relative flex justify-center items-center overflow-hidden min-h-screen">
      <style>{`
        .loader {
          width: 80px;
          height: 80px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-template-areas:
            "one two"
            "four three";
          gap: 10px;
        }
        .loader div {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          animation: colorShift 2.4s linear infinite;
        }
        .loader div:nth-child(1) { grid-area: one; animation-delay: 0s; }
        .loader div:nth-child(2) { grid-area: two; animation-delay: 0.6s; }
        .loader div:nth-child(3) { grid-area: three; animation-delay: 1.2s; }
        .loader div:nth-child(4) { grid-area: four; animation-delay: 1.8s; }

        @keyframes colorShift {
          0% { background-color: ${colors[0]}; }
          25% { background-color: ${colors[1]}; }
          50% { background-color: ${colors[2]}; }
          75% { background-color: ${colors[3]}; }
          100% { background-color: ${colors[0]}; }
        }
      `}</style>
      <div className="loader">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
