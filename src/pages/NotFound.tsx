import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoName, setVideoName] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [videoUrl]);

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setVideoUrl(null);
      setVideoName(null);
      return;
    }

    const nextUrl = URL.createObjectURL(file);
    setVideoUrl((previousUrl) => {
      if (previousUrl) {
        URL.revokeObjectURL(previousUrl);
      }
      return nextUrl;
    });
    setVideoName(file.name);
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      void videoRef.current.play();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-6 py-12">
      <div className="w-full max-w-xl text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <div className="mb-6 rounded-lg border border-dashed border-muted-foreground/40 bg-background p-6">
          <p className="mb-4 text-sm text-muted-foreground">
            Want to see a video while you&apos;re lost? Choose a local video file and we&apos;ll play it
            right here.
          </p>
          <div className="flex flex-col items-center gap-3">
            <label className="inline-flex cursor-pointer flex-col items-center gap-2 text-sm font-medium text-primary">
              <span className="rounded-md border border-primary/40 px-4 py-2 text-primary transition hover:bg-primary/10">
                Select a video file
              </span>
              <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleVideoChange}
              />
            </label>
            {videoName ? (
              <p className="text-xs text-muted-foreground">Selected: {videoName}</p>
            ) : (
              <p className="text-xs text-muted-foreground">No file selected yet.</p>
            )}
            <button
              type="button"
              onClick={handlePlayClick}
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={!videoUrl}
            >
              Play selected video
            </button>
          </div>
          {videoUrl && (
            <div className="mt-6">
              <video
                ref={videoRef}
                src={videoUrl}
                controls
                className="mx-auto w-full max-w-lg rounded-lg"
              />
            </div>
          )}
        </div>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
