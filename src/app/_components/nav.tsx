"use client";

export default function Nav() {
  return (
    <div className="w-full flex  justify-center items-center">
      {/* <h2 className="font-bold text-2xl">Quizney +</h2> */}

      <div className="flex flex-row space-x-4">
        <a
          className="text-blue-500 underline"
          onClick={() => {
            window.location.pathname = "/home";
          }}
        >
          Home
        </a>
      </div>
    </div>
  );
}
