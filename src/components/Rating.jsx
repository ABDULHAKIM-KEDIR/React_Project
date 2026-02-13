import { Star } from "lucide-react";

export default function Rating({ value }) {
  return (
    <div className="flex gap-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < value ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}
