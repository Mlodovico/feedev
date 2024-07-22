
export default function Home() {

  return (
    <main className="font-mono flex justify-center items-center min-h-screen flex-col p-24 lg:w-3/5">
      <h1 className="text-3xl font-bold text-center">
        Welcome to Feedev, the dev social media platform
      </h1>
      <div className="bg-gray-950 rounded-2xl p-6 mt-4 w-full">
        <div className="flex justify-center lg:justify-start">
          <a href="/login" className="px-4 py-2 mx-2 bg-gray-800 rounded-lg">
            Login
          </a>
          <a href="/register" className="px-4 py-2 mx-2 bg-gray-800 rounded-lg">
            Register
          </a>
          <a href="/about" className="px-4 py-2 mx-2 bg-gray-800 rounded-lg">
            About
          </a>
        </div>
      </div>
      <div className="bg-gray-950 rounded-2xl p-6 mt-4">
        <p>
          the premier social networking app designed exclusively for developers!
          DevConnect is a fully integrated and user-friendly platform where you
          can connect, collaborate, and grow with fellow developers from around
          the world. Whether you are a seasoned professional or just starting
          your coding journey, DevConnect offers a seamless experience tailored
          to your needs.
        </p>
      </div>
    </main>
  );
}
