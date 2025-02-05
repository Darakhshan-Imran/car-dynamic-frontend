import { useWishlist } from "@/context/WishlistContext";
import { Trash2 } from "lucide-react";

interface WishlistProps {
  onClose: () => void;
  className?: string;  // Add className as an optional prop
}

const Wishlist: React.FC<WishlistProps> = ({ onClose, className }) => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const wishlistCount = wishlist.length; // Get the count of wishlist items
 

  return (
    <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 modal ${className}`}>
      <button onClick={onClose} className="text-red-500">Close</button>
      <h2 className="text-xl font-bold mb-4">Your Wishlist ({wishlistCount})</h2>
      {wishlist.length === 0 ? (
        <p>No cars in wishlist.</p>
      ) : (
        <ul>
          {wishlist.map((car) => (
            <li key={car.id} className="flex justify-between items-center p-2 border-b">
              <span>{car.name}</span>
              <button onClick={() => removeFromWishlist(car.id)} className="text-red-500">
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
