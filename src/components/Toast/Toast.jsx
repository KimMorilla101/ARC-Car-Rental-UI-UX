export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="toast toast-component" role="status">
      ✓ {message}
    </div>
  );
}
