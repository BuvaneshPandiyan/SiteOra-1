import React from 'react';

function Clients() {
  const clientLogos = [
    { src: "https://logo.clearbit.com/google.com?size=80", alt: "Google" },
    { src: "https://logo.clearbit.com/spotify.com?size=80", alt: "Spotify" },
    { src: "https://logo.clearbit.com/airbnb.com?size=80", alt: "Airbnb" },
    { src: "https://logo.clearbit.com/slack.com?size=80", alt: "Slack" },
    { src: "https://logo.clearbit.com/uber.com?size=80", alt: "Uber" },
    { src: "https://logo.clearbit.com/dropbox.com?size=80", alt: "Dropbox" },
  ];

  return (
    <section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
      Our Client List? It's Still Under NDA (Naturally).
    </h2>
    <p className="mt-4 text-center text-xl text-gray-600">
      We're busy building the future, one game changing solution at a time. The world just hasn't caught up yet.
    </p>
  </div>
</section>
  );
}

export default Clients;