import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CommentCard = ({ id, title, username, content, likes, dislikes, replies }) => {
    const [opened, setOpened] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [likesCount, setLikesCount] = useState(likes);
    const [dislikesCount, setDislikesCount] = useState(dislikes);

    const handleShowReplies = () => {
        setOpened(!opened);
    };

    const handleLike = () => {
        if (!isLiked) {
            setLikesCount(likesCount + 1);
            setIsLiked(true);

            if (isDisliked) {
                setDislikesCount(dislikesCount - 1);
                setIsDisliked(false);
            }
        }
    };

    const handleDislike = () => {
        if (!isDisliked) {
            setDislikesCount(dislikesCount + 1);
            setIsDisliked(true);

            if (isLiked) {
                setLikesCount(likesCount - 1);
                setIsLiked(false);
            }
        }
    };

    return (
        <div className="comment__container opened" style={{ marginLeft: 20 }}>
            <div className="comment__card">
                <h3 className="comment__title">{title}</h3>
                <span className="comment__username">@{username}</span>
                <p>{content}</p>
                <div className="comment__card-footer">
                    <div className="likes">
                        <span onClick={handleLike} className={`like-btn ${isLiked ? 'liked' : ''}`}>
                            Like
                        </span>
                        <span className={`like-count ${isLiked ? 'liked' : ''}`}>{likesCount}</span>
                    </div>
                    <div className="dislikes">
                        <span onClick={handleDislike} className={`dislike-btn ${isDisliked ? 'disliked' : ''}`}>
                            Dislike
                        </span>
                        <span className={`dislike-count ${isDisliked ? 'disliked' : ''}`}>{dislikesCount}</span>
                    </div>
                    {replies && (
                        <div
                            className="show-replies"
                            onClick={!replies.length ? null : handleShowReplies}
                            style={{ display: `${replies.length ? 'block' : 'none'}` }}
                        >
                            {opened ? 'Hide Replies' : `Show ${replies.length} Replies`}
                        </div>
                    )}
                </div>
            </div>
            {replies && opened && replies.map((reply) => (
                <motion.div
                    key={reply.id}
                    initial={{ opacity: 0, y: 20, marginTop: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <CommentCard key={reply.id} {...reply} />
                </motion.div>
            ))}
        </div>
    );
};

export default CommentCard; 