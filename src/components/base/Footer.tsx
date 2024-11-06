export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center items-center text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Satoru Nakamura. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
