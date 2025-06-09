import React, { useEffect, useState } from 'react';
import { personalLinks } from '../personal-info/info';

interface Props {
  username: string;
  theme?: string;
  ext?: string;
}

const LeetCodeStatsCard: React.FC<Props> = ({
  username,
  theme = 'dark',
  ext = 'heatmap',
}) => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const url = `https://leetcard.jacoblin.cool/${username}?theme=${theme}&ext=${ext}`;
    setImageUrl(url);
  }, [username, theme, ext]);

  return (
    <div className="bg-netflix-background text-white border-t border-l border-b border-netflix-red rounded-tl-lg rounded-bl-lg rounded-tr-lg shadow-lg w-fit mx-auto">
      {imageUrl ? (
        <a href={personalLinks.leetCode} target='_'>
          <img
            src={imageUrl}
            alt={`${username}'s LeetCode stats`}
            className="border-t border-l border-b border-netflix-red rounded-bl-lg rounded-tl-lg rounded-tr-lg"
          />
        </a>
      ) : (
        <p className="text-netflix-gray">Loading stats...</p>
      )}
    </div>
  );
};

export default LeetCodeStatsCard;
