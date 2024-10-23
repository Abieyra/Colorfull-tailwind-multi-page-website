import Link from "next/link"
import styles from "../contact/contact.module.css"

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-700">Contact</h1>

      <section className="bg-yellow-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-red-600">(Get in Touch)</h2>
        <p className="text-center italic mb-8 text-green-700">
          "If you have any questions or want to place any order or need assistance, feel free to reach out to us. We are here for your help."
        </p>
      </section>

      <section className="bg-blue-100 p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-bold mb-2 text-indigo-600">(PHONE NUMBER)</h2>
        <h3 className="text-xl font-semibold text-pink-600">Afzal Ahmed: +92 *************</h3>
      </section>

      <ul className="flex justify-center space-x-4 mt-8">
  <li>
    <a href="/" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out border-2 border-blue-500 rounded-lg p-2 hover:bg-blue-100">
      GO TO Home PAGE
    </a>
  </li>
  <li>
    <a href="about" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out border-2 border-blue-500 rounded-lg p-2 hover:bg-blue-100">
      GO TO ABOUT PAGE
    </a>
  </li>
  <li>
    <a href="services" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out border-2 border-blue-500 rounded-lg p-2 hover:bg-blue-100">
      GO TO SERVICE PAGE
    </a>
  </li>
</ul>

    </div>
  );
}

export default Contact;

