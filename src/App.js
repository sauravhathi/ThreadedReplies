import React from 'react';
import commentsData from './commentsData.json';
import { motion } from 'framer-motion';
import CommentCard from './CommentCard';

const App = () => {
  const comments = commentsData.comments;
  return (
    <div className="container">
      {comments.map((comment, index) => (
        <motion.div
          key={comment.id}
          initial={{ opacity: 0, y: 20, marginTop: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <CommentCard key={comment.id} {...comment} />
        </motion.div>
      ))}
    </div>
  );
};

export default App;
