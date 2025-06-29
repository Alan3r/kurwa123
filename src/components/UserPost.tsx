import { Lock } from 'lucide-react';

interface Post {
  id: number;
  image: string;
  likes: number;
  comments: number;
}

interface UserPostProps {
  post: Post;
  onLike: () => void;
  onComment: () => void;
}

const UserPost = ({ post, onLike, onComment }: UserPostProps) => {
  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl overflow-hidden shadow-xl border border-rose-800/30">
      <div className="relative w-full h-48">
        <img 
          src={post.image}
          alt="Post"
          loading="lazy"
          className="w-full h-48 object-cover opacity-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
          <Lock className="w-8 h-8 text-white mb-2" />
          <span className="text-white text-xl font-bold bg-black/70 px-4 py-2 rounded-lg">
            DOSTĘPNE PO REJESTRACJI
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-rose-200/80 text-sm">
            ❤️ {post.likes} polubień
          </span>
          <span className="text-rose-200/80 text-sm">
            💬 {post.comments} komentarzy
          </span>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={onLike}
            className="flex-1 bg-gradient-to-r from-rose-600/80 to-pink-600/80 text-white px-4 py-2 rounded-lg font-medium hover:from-rose-700/80 hover:to-pink-700/80 transition-all duration-300"
          >
            ❤️ Lajkuj
          </button>
          <button 
            onClick={onComment}
            className="flex-1 bg-gradient-to-r from-purple-600/80 to-rose-600/80 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700/80 hover:to-rose-700/80 transition-all duration-300"
          >
            💬 Komentuj
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
