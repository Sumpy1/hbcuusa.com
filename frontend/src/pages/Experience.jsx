import React, { useState } from 'react';

const videos = [
  { id: 1, src: '/img/Video1.MOV', thumbnail: '/img/pitch.png', title: 'TMCF The pitch' },
  { id: 2, src: '/videos/video2.mp4', thumbnail: '/img/coke.png', title: 'HBCU SOAR Externship' },
];

const Experience = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="flex flex-col items-center gap-4 overflow-y-auto">
      {videos.map((video) => (
        <div key={video.id} className="w-full max-w-5xl">
          <div className="overflow-hidden bg-gray-100 rounded-lg shadow-md">
            {selectedVideo === video.id ? (
              <video controls className="w-full">
                <source src={process.env.PUBLIC_URL + video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={video.thumbnail}
                alt={`Thumbnail for ${video.title}`}
                className="w-full object-cover cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{video.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
